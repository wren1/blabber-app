from flask import Blueprint, jsonify, session, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment, db


search_routes = Blueprint('search', __name__)


@search_routes.route('/groups/<query>')
@login_required
def search_groups(query):
    groups = Group.query.filter(Group.name.ilike(f'%{query}%')).all()
    return {"results": [group.to_dict() for group in groups]}


@search_routes.route('/users/<query>')
@login_required
def search_users(query):
    users = User.query.filter(User.username.ilike(f'%{query}%')).all()
    return {"results": [user.to_dict() for user in users]}


@search_routes.route('/posts/<query>')
@login_required
def search_posts(query):
    posts = Post.query.filter(Post.title.ilike(f'%{query}%')).all()
    return {"results": [post.to_dict() for post in posts]}


@search_routes.route('/<query>')
# @login_required
def search_all(query):
    groups = Group.query.filter(Group.name.ilike(f'%{query}%')).all()
    users = User.query.filter(User.username.ilike(f'%{query}%')).all()
    return {
        "results": [group.to_dict() for group in groups] + [user.to_dict() for user in users]
    }
