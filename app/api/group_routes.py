from flask import Blueprint, jsonify, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment
from app.forms import NewGroupForm, EditGroupForm
from app.api.auth_routes import validation_errors_to_error_messages

group_routes = Blueprint('groups', __name__)


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
@group_routes.route('/<int:id>/members', strict_slashes=False)
@login_required
def group_members(id):
    member_ids = Group.query.get(id).users
    members = User.query.filter(id.in_(member_ids)).all()
    return members.to_dict()


# get
@group_routes.route('/')
@login_required
def users():
    user_id = current_user.get_id()
    users = User.query.all()


# get
@group_routes.route('/')
@login_required
def users():
    user_id = current_user.get_id()
    users = User.query.all()


# get
@group_routes.route('/')
@login_required
def users():
    user_id = current_user.get_id()
    users = User.query.all()


# get
@group_routes.route('/')
@login_required
def users():
    user_id = current_user.get_id()
    users = User.query.all()


@group_routes.route('/')
@login_required
def users():
    user_id = current_user.get_id()
    users = User.query.all()


# get
@group_routes.route('/')
@login_required
def users():
    user_id = current_user.get_id()
    users = User.query.all()
