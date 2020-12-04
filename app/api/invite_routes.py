from flask import Blueprint, jsonify, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment
from app.forms import NewGroupForm, EditGroupForm
from app.api.auth_routes import validation_errors_to_error_messages

invite_routes = Blueprint('invites', __name__)


# current user responds to invite, either accepting or declining
@group_routes.route('/', methods=['DELETE'], strict_slashes=False)
@login_required
def respond_to_invite():
    user_id = current_user.get_id()


# current user invites another user to join a group or become friends
@group_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def make_invite():
    user_id = current_user.get_id()
