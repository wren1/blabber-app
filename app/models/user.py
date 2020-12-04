from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_to_group import users_to_groups
from .friend import friends
from .like import likes
from .moderator import moderators


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    icon_url = db.Column(db.String(255))

    groups = db.relationship('Group', secondary=users_to_groups, back_populates='users')
    friends = db.relationship('User', secondary=friends, back_populates='users')
    likes = db.relationship('Like', secondary=likes, back_populates='users')
    groups_moderating = db.relationship('Group', secondary=moderators, back_populates='users')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "name": self.name,
          "description": self.decription,
          "icon_url": self.icon_url,
          "groups": self.groups,
          "friends": self.friends,
          "likes": self.likes,
          "groups_moderating": self.groups_moderating
        }
