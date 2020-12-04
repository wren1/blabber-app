from flask import Blueprint, jsonify, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment
from app.forms import NewGroupForm, EditGroupForm
from app.api.auth_routes import validation_errors_to_error_messages

post_routes = Blueprint('posts', __name__)


# get all posts user has made
@post_routes.route('/users/<int:id>', strict_slashes=False)
@login_required
def get_user_posts(id):
    user_id = current_user.get_id()


# make a new post
@post_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def make_post():
    user_id = current_user.get_id()


# get all comments associated with post
@post_routes.route('/<int:id>', strict_slashes=False)
@login_required
def get_comments(id):
    user_id = current_user.get_id()


# edit a post
@post_routes.route('/<int:id>', methods=['PUT'], strict_slashes=False)
@login_required
def edit_post(id):
    user_id = current_user.get_id()


# delete a post
@post_routes.route('/<int:id>', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_post(id):
    user_id = current_user.get_id()


# comment on a post
@post_routes.route('/<int:id>/comments', methods=['POST'], strict_slashes=False)
@login_required
def make_comment(id):
    user_id = current_user.get_id()


# edit a comment
@post_routes.route('/comments/<int:id>', methods=['PUT'], strict_slashes=False)
@login_required
def edit_comment(id):
    user_id = current_user.get_id()


# delete a comment
@post_routes.route('/comments/<int:id>', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_comment(id):
    user_id = current_user.get_id()
