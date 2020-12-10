from flask import Blueprint, jsonify, session, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment, db, Friend
from app.forms import NewGroupForm, EditGroupForm
from app.api.auth_routes import validation_errors_to_error_messages

invite_routes = Blueprint('invites', __name__)


# current user accepts friend request
@invite_routes.route('/users/<int:id>/friends/accept', methods=['DELETE'], strict_slashes=False)
@login_required
def accept_friend_request(id):
    current_user_id = current_user.get_id()
    # current_user_id = 1
    invite = Invite.query.filter(Invite.invitee_id == current_user_id,
                                 Invite.inviter_id == id, Invite.type == 'friend').first()
    # current_user = User.query.get(current_user_id)
    # inviter = User.query.get(id)
    # current_user.friends.append(inviter)
    friends = Friend(
        user_one_id=id,
        user_two_id=current_user_id
    )
    db.session.add(friends)
    db.session.delete(invite)
    db.session.commit()
    return invite.to_dict()


# current user declines friend request
@invite_routes.route('/users/<int:id>/friends/decline', methods=['DELETE'], strict_slashes=False)
@login_required
def decline_friend_request(id):
    current_user_id = current_user.get_id()
    # current_user_id = 3
    invite = Invite.query.filter(Invite.invitee_id == current_user_id,
                                 Invite.inviter_id == id, Invite.type == 'friend').first()
    db.session.delete(invite)
    db.session.commit()
    return invite.to_dict()


# current user accepts group invite
@invite_routes.route('/users/<int:user_id>/groups/<int:group_id>/accept', methods=['DELETE'], strict_slashes=False)
@login_required
def accept_group_invite(user_id, group_id):
    current_user_id = current_user.get_id()
    # current_user_id = 2
    invite = Invite.query.filter(Invite.invitee_id == current_user_id, Invite.group_id == group_id,
                                 Invite.inviter_id == user_id, Invite.type == 'group').first()
    current_user = User.query.get(current_user_id)
    # inviter = User.query.get(id)
    group = Group.query.get(group_id)
    current_user.groups.append(group)
    db.session.delete(invite)
    db.session.commit()
    return invite.to_dict()


# current user declines group invite
@invite_routes.route('/users/<int:user_id>/groups/<int:group_id>/decline', methods=['DELETE'], strict_slashes=False)
@login_required
def decline_group_invite(user_id, group_id):
    current_user_id = current_user.get_id()
    # current_user_id = 3
    invite = Invite.query.filter(Invite.invitee_id == current_user_id, Invite.group_id == group_id,
                                 Invite.inviter_id == user_id, Invite.type == 'group').first()
    db.session.delete(invite)
    db.session.commit()
    return invite.to_dict()


# current user invites another user to become friends
@invite_routes.route('/users/<int:user_id>/friends', methods=['POST'], strict_slashes=False)
@login_required
def make_friend_request(user_id):
    current_user_id = current_user.get_id()
    # current_user_id = 4
    invite = Invite(
        inviter_id=current_user_id,
        invitee_id=user_id,
        type='friend'
    )
    db.session.add(invite)
    db.session.commit()
    return invite.to_dict()


# current user invites another user to join a group
@invite_routes.route('/users/<int:user_id>/groups/<int:group_id>', methods=['POST'], strict_slashes=False)
@login_required
def make_group_invite(user_id, group_id):
    current_user_id = current_user.get_id()
    # current_user_id = 1
    invite = Invite(
        inviter_id=current_user_id,
        invitee_id=user_id,
        group_id=group_id,
        type='group'
    )
    db.session.add(invite)
    db.session.commit()
    return invite.to_dict()
