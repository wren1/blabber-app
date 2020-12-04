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
    posts = Post.query.filter().all()


# get all users that are the current user's friends
@user_routes.route('/<int:id>/friends', strict_slashes=False)
@login_required
def user_friends(id):
    friends = User.query.filter().all()


# get all groups current user is in
@user_routes.route('/<int:id>/groups', strict_slashes=False)
@login_required
def user_groups(id):
    groups = Group.query.filter().all()


# get all invites to and from current user
@user_routes.route('/<int:id>/posts', strict_slashes=False)
@login_required
def user_posts(id):
    posts = Post.query.filter().all()
