from flask import Blueprint, jsonify, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment
from app.forms import NewGroupForm, EditGroupForm
from app.api.auth_routes import validation_errors_to_error_messages

group_routes = Blueprint('groups', __name__)


# check if a user is the owner or moderator of a group
def check_mod(user, group):
    if user in group.users or user.id == group.user_id:
        return True
    return False


# create a new group
@group_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def new_group():
    user_id = current_user.get_id()
    user = User.query.get(user_id)
    form = NewGroupForm()
    form['user_id'].data = user_id
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        group = Group(
            owner_id=form.data['user_id'],
            name=form.data['name'],
            description=form.data['description'],
            private=form.data['private'],
        )
        db.session.add(group)
        group.users.append(user)
        db.session.commit()
        return group.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# get all members of a group
@group_routes.route('/<int:id>/users', strict_slashes=False)
@login_required
def group_members(id):
    members = Group.query.get(id).users
    return members.to_dict()


# remove a user from a group if current user is group owner or a mod
@group_routes.route('/<int:group_id>/users/<int:user_id>', methods=['DELETE'], strict_slashes=False)
@login_required
def remove_member(group_id, user_id):
    current_user_id = current_user.get_id()
    current_user = User.query.get(current_user_id)
    group = Group.query.get(group_id)
    if check_mod(current_user, group):
        user = User.query.get(user_id)
        group.users.remove(user)
        db.session.commit()
        return {"user": user.to_dict(), "group": group.to_dict()}
    return {"msg": "Sorry, you aren't authorized to do that."}


# current member joins a group
@group_routes.route('/<int:id>/users', methods=['POST'], strict_slashes=False)
@login_required
def join_group(id):
    user_id = current_user.get_id()
    user = User.query.get(user_id)
    group = Group.query.get(id)
    group.users.append(user)
    db.session.commit()
    return {"user": user.to_dict(), "group": group.to_dict()}


# get group and check if current user is authorized to view it
@group_routes.route('/<int:id>', strict_slashes=False)
@login_required
def get_group(id):
    user_id = current_user.get_id()
    user = User.query.get(user_id)
    group = Group.query.get(id)
    if group.private is False or user in group.users:
        return group.to_dict()
    return {"msg": "Sorry, this group is private."}


# edit the title, dexcription, or private status of a group
@group_routes.route('/<int:id>', methods=['PUT'], strict_slashes=False)
@login_required
def edit_group(id):
    user_id = current_user.get_id()
    user = User.query.get(user_id)
    group = Group.query.get(id)
    form = NewGroupForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if check_mod(user, group) and check_mod(user, group):
        group.name = form.data['name']
        group.description = form.data['description']
        group.private = form.data['private']


# delete a group if current user is the owner of it
@group_routes.route('/<int:id>', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_group(id):
    user_id = current_user.get_id()
    group = Group.query.get(id)
    if group.user_id == user_id:
        db.session.delete(group)
        db.session.commit()


# add a new moderator to the group
@group_routes.route('/<int:id>/moderators', methods=['POST'], strict_slashes=False)
@login_required
def new_mod(id):
    user_id = current_user.get_id()
    user = User.query.get(user_id)
    group = Group.query.get(id)
    if check_mod(user, group):
        group.moderators.append(user)
        db.session.commit()


# remove a moderator from a group
@group_routes.route('/<int:group_id>/moderators/<int:user_id>', methods=['DELETE'], strict_slashes=False)
@login_required
def remove_mod(group_id, user_id):
    current_user_id = current_user.get_id()
    user = User.query.get(user_id)
    group = Group.query.get(group_id)
    if user_id == current_user_id or current_user_id == group.user_id:
        group.moderators.delete(user)
        db.session.commit()
