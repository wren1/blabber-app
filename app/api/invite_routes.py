from flask import Blueprint, jsonify, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment
from app.forms import NewGroupForm, EditGroupForm
from app.api.auth_routes import validation_errors_to_error_messages

invite_routes = Blueprint('invites', __name__)


# current user accepts friend request
@group_routes.route('/users/<int:id>/friends/accept', methods=['DELETE'], strict_slashes=False)
@login_required
def respond_to_invite(id):
    current_user_id = current_user.get_id()
    invite = Invite.query.filter(Invite.invitee_id == current_user_id,
                                 Invitee.inviter_id == id, Invite.type == 'friend').first()
    current_user = User.query.get(current_user_id)
    inviter = User.query.get(id)
    current_user.friends.append(inviter)
    db.session.delete(invite)
    db.session.commit()
    return inviter.to_dict()


# current user declines friend request
@group_routes.route('/users/<int:id>/friends/decline', methods=['DELETE'], strict_slashes=False)
@login_required
def respond_to_invite(id):
    current_user_id = current_user.get_id()
    invite = Invite.query.filter(Invite.invitee_id == current_user_id,
                                 Invitee.inviter_id == id, Invite.type == 'friend').first()
    db.session.delete(invite)
    db.session.commit()
    return {"msg": "Friend request declined."}


# current user accepts group invite
@group_routes.route('/users/<int:user_id>/groups/<int:group_id>/accept', methods=['DELETE'], strict_slashes=False)
@login_required
def respond_to_invite(user_id, group_id):
    current_user_id = current_user.get_id()
    invite = Invite.query.filter(Invite.invitee_id == current_user_id,
                                 Invitee.inviter_id == user_id, Invite.type == 'group').first()
    current_user = User.query.get(current_user_id)
    inviter = User.query.get(id)
    group = Group.query.get(group_id)
    current_user.groups.append(group)
    db.session.delete(invite)
    db.session.commit()
    return group.to_dict()


# current user declines group invite
@group_routes.route('/users/<int:user_id>/groups/<int:group_id>/decline', methods=['DELETE'], strict_slashes=False)
@login_required
def respond_to_invite(user_id, group_id):
    user_id = current_user.get_id()
    current_user_id = current_user.get_id()
    invite = Invite.query.filter(Invite.invitee_id == current_user_id,
                                 Invitee.inviter_id == id, Invite.type == 'friend').first()
    db.session.delete(invite)
    return {"msg": "Invite declined."}


# current user invites another user to join a group or become friends
@group_routes.route('/users/<int:id>/friends', methods=['POST'], strict_slashes=False)
@login_required
def make_invite(id):
    current_user_id = current_user.get_id()
    invite = Invite(
        inviter_id=current_user_id,
        invitee_id=user_id,
        type='friend'
    )
    db.session.add(invite)
    db.session.commit()
    return invite.to_dict()


# current user invites another user to join a group or become friends
@group_routes.route('/users/<int:user_id>/groups/<int:group_id>', methods=['POST'], strict_slashes=False)
@login_required
def make_invite(user_id, group_id):
    current_user_id = current_user.get_id()
    invite = Invite(
        inviter_id=current_user_id,
        invitee_id=user_id,
        group_id=group_id,
        type='group'
    )
    db.session.add(invite)
    db.session.commit()
    return invite.to_dict()