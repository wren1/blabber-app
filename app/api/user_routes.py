from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


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
    user = User.query.get(id)
    user_ids = [friend.id for friend in user.friends]
    user_ids.append(id)
    group_ids = [group.id for group in user.groups]
    posts = Post.query.filter((Post.user_id.in_(user_ids)) | (Post.group_id.in_(group_ids))).order_by(Post.created_on).all()
    return posts.to_dict()


# get all users that are the current user's friends
@user_routes.route('/<int:id>/friends', strict_slashes=False)
@login_required
def user_friends(id):
    user = User.query.get(id)
    friends = User.query.filter(User.id.in_(user.friends)).all()
    return friends.to_dict()


# get all groups current user is in
@user_routes.route('/<int:id>/groups', strict_slashes=False)
@login_required
def user_groups(id):
    user = User.query.get(id)
    groups = Group.query.filter(Group.id.in_(user.groups)).all()
    return group.to_dict()


# get all invites to and from current user
@user_routes.route('/<int:id>/posts', strict_slashes=False)
@login_required
def user_posts(id):
    received_invites = Invite.query.filter(Invite.invitee_id == id).all()
    sent_invites = Invite.query.filter(Invite.inviter_id == id).all()
    # send info about invites too!!
    return {"received_invites": received_invites.to_dict(), "sent_invites": sent_invites.to_dict()}
