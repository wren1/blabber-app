from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment, Friend, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    id = current_user.get_id()
    # id = 1
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', strict_slashes=False)
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# get all posts associated with that user to show on their front page,
# including followed group posts and friend's posts
@user_routes.route('/<int:id>/posts', strict_slashes=False)
@login_required
def user_posts(id):
    user = User.query.get(id).to_dict()
    user_ids = user['friends']
    user_ids.append(id)
    print(user_ids)
    group_ids = user['groups']
    posts = Post.query.filter((Post.user_id.in_(user_ids)) | (Post.group_id.in_(group_ids))).order_by(Post.created_on.desc()).all()
    users = User.query.filter(User.id.in_(user_ids)).all()
    groups = Group.query.filter(Group.id.in_(group_ids)).all()
    return {
        "posts": [post.to_dict() for post in posts
            if post.to_dict()['user_id'] is id or post.to_dict()['group_id'] in user['groups'] or post.to_dict()['group_id'] is None],
        "groups": [group.to_dict() for group in groups],
        "users": [user.to_dict() for user in users]
    }


# get all users that are the user's friends
@user_routes.route('/<int:id>/friends', strict_slashes=False)
@login_required
def user_friends(id):
    user = User.query.get(id).to_dict()
    # friends = Friend.query.filter((Friend.user_one_id == id) | (Friend.user_two_id == id)).all()
    # friend_ids = [friend.id for friend in friends]
    users = User.query.filter(User.id.in_(user['friends'])).all()
    return {"friends": [user.to_dict() for user in users] + [user]}


# remove friend
@user_routes.route('/<int:id>/friends', methods=['DELETE'], strict_slashes=False)
@login_required
def remove_friend(id):
    current_user_id = current_user.get_id()
    friendship = Friend.query.filter((Friend.user_one_id == id and Friend.user_two_id == current_user_id) | (Friend.user_two_id == id and Friend.user_one_id == current_user_id)).first()
    print(friendship.to_dict())
    db.session.delete(friendship)
    db.session.commit()
    user = User.query.get(current_user_id)
    return user.to_dict()


# get all groups user is in
@user_routes.route('/<int:id>/groups', strict_slashes=False)
@login_required
def user_groups(id):
    user = User.query.get(id)
    return {"groups": [group.to_dict() for group in user.groups]}


# get all invites to and from user
@user_routes.route('/<int:id>/invites', strict_slashes=False)
@login_required
def user_invites(id):
    user = User.query.get(id)
    received = user.received_invites
    sent = user.sent_invites
    group_ids = [invite.group_id for invite in received] + [invite.group_id for invite in sent]
    user_ids = [invite.inviter_id for invite in received] + [invite.invitee_id for invite in sent]
    groups = Group.query.filter(Group.id.in_(group_ids)).all()
    users = User.query.filter(User.id.in_(user_ids)).all()
    return {"received_invites": [invite.to_dict() for invite in received],
            "sent_invites": [invite.to_dict() for invite in sent],
            "users": [user.to_dict() for user in users],
            "groups": [group.to_dict() for group in groups]
            }
