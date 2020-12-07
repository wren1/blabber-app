from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment, Friend

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>', strict_slashes=False)
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# get all posts associated with that user to show on their front page,
# including followed group posts and friend's posts
@user_routes.route('/<int:id>/posts', strict_slashes=False)
# @login_required
def user_posts(id):
    user = User.query.get(id)
    friends = Friend.query.filter((Friend.user_one_id == id) | (Friend.user_two_id == id))
    user_ids = [friend.id for friend in friends]
    user_ids.append(id)
    print(user_ids)
    group_ids = [group.id for group in user.groups]
    posts = Post.query.filter((Post.user_id.in_(user_ids)) | (Post.group_id.in_(group_ids))).order_by(Post.created_on).all()
    return {"posts": [post.to_dict() for post in posts]}


# get all users that are the user's friends
@user_routes.route('/<int:id>/friends', strict_slashes=False)
# @login_required
def user_friends(id):
    # user = User.query.get(id)
    friends = Friend.query.filter((Friend.user_one_id == id) | (Friend.user_two_id == id)).all()
    return {"friends": [friend.to_dict() for friend in friends]}


# get all groups user is in
@user_routes.route('/<int:id>/groups', strict_slashes=False)
# @login_required
def user_groups(id):
    user = User.query.get(id)
    return {"groups": [group.to_dict() for group in user.groups]}


# get all invites to and from user
@user_routes.route('/<int:id>/invites', strict_slashes=False)
# @login_required
def user_invites(id):
    user = User.query.get(id)
    received = user.received_invites
    sent = user.sent_invites
    return {"received_invites": [invite.to_dict() for invite in received],
            "sent_invites": [invite.to_dict() for invite in sent]}
    # received_invites = Invite.query.filter(Invite.invitee_id == id).all()
    # sent_invites = Invite.query.filter(Invite.inviter_id == id).all()
    # send info about invites too!!
    # return {"received_invites": received_invites.to_dict(), "sent_invites": sent_invites.to_dict()}
