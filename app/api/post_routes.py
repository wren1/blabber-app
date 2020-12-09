from flask import Blueprint, jsonify, session, request, Response
from flask_login import login_required, current_user
from app.models import User, Post, Group, Invite, Comment, db
from app.forms import NewPostForm, EditPostForm, NewCommentForm, EditCommentForm
from app.api.auth_routes import validation_errors_to_error_messages

import datetime

post_routes = Blueprint('posts', __name__)


# get all posts user has made
@post_routes.route('/users/<int:id>', strict_slashes=False)
# @login_required
def get_user_posts(id):
    posts = Post.query.filter(Post.user_id == id).all()
    return {"posts": [post.to_dict() for post in posts]}


# get all posts within group
@post_routes.route('/groups/<int:id>', strict_slashes=False)
# @login_required
def get_group_posts(id):
    posts = Post.query.filter(Post.group_id == id).all()
    return {"posts": [post.to_dict() for post in posts]}


# make a new post on user page
@post_routes.route('/', methods=['POST'], strict_slashes=False)
# @login_required
def make_post():
    # user_id = current_user.get_id()
    user_id = 1
    user = User.query.get(user_id)
    form = NewPostForm()
    form['user_id'].data = user_id
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(
            user_id=form.data['user_id'],
            title=form.data['title'],
            content=form.data['content'],
            created_on=datetime.datetime.now(),
            last_modified=datetime.datetime.now()
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# make a new post in group
@post_routes.route('/groups/<int:id>', methods=['POST'], strict_slashes=False)
# @login_required
def make_group_post(id):
    # user_id = current_user.get_id()
    user_id = 1
    user = User.query.get(user_id)
    form = NewPostForm()
    form['user_id'].data = user_id
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(
            user_id=form.data['user_id'],
            group_id=id,
            title=form.data['title'],
            content=form.data['content'],
            created_on=datetime.datetime.now(),
            last_modified=datetime.datetime.now()
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# get all comments associated with post
@post_routes.route('/<int:id>', strict_slashes=False)
# @login_required
def get_comments(id):
    # user_id = current_user.get_id()
    user_id = 1
    post = Post.query.get(id)
    comments = Comment.query.filter(Comment.post_id == id).order_by(Comment.created_on).all()
    return {"post": post.to_dict(), "comments": [comment.to_dict() for comment in comments]}


# unlike a post
@post_routes.route('/<int:id>/likes', methods=['DELETE'], strict_slashes=False)
# @login_required
def unlike_post(id):
    # user_id = current_user.get_id()
    user_id = 1
    user = User.query.get(user_id)
    post = Post.query.get(id)
    user.likes.remove(post)
    # check if user already doen't like post
    db.session.commit()
    return post.to_dict()


# like a post
@post_routes.route('/<int:id>/likes', methods=['POST'], strict_slashes=False)
# @login_required
def like_post(id):
    # user_id = current_user.get_id()
    user_id = 1
    user = User.query.get(user_id)
    post = Post.query.get(id)
    #  check if user likes post already
    user.likes.append(post)
    db.session.commit()
    return post.to_dict()

# edit a post
@post_routes.route('/<int:id>', methods=['PUT'], strict_slashes=False)
# @login_required
def edit_post(id):
    # user_id = current_user.get_id()
    user_id = 1
    user = User.query.get(user_id)
    form = EditPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post.query.get(id)
        post.title = form.data['title'],
        post.content = form.data['content'],
        post.last_modified = datetime.datetime.now()
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# delete a post
@post_routes.route('/<int:id>', methods=['DELETE'], strict_slashes=False)
# @login_required
def delete_post(id):
    # check for owner of post or mod of group post is in
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return post.to_dict()


# comment on a post
@post_routes.route('/<int:id>/comments', methods=['POST'], strict_slashes=False)
# @login_required
def make_comment(id):
    # user_id = current_user.get_id()
    user_id = 1
    post = Post.query.get(id)
    form = NewCommentForm()
    form['user_id'].data = user_id
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            user_id=form.data['user_id'],
            post_id=id,
            content=form.data['content'],
            created_on=datetime.datetime.now(),
            last_modified=datetime.datetime.now()
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# edit a comment
@post_routes.route('/comments/<int:id>', methods=['PUT'], strict_slashes=False)
# @login_required
def edit_comment(id):
    # user_id = current_user.get_id()
    user_id = 1
    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment.query.get(id)
        comment.content = form.data['content'],
        comment.last_modified = datetime.datetime.now()
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# delete a comment
@post_routes.route('/comments/<int:id>', methods=['DELETE'], strict_slashes=False)
# @login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()
