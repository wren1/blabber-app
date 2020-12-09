from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_to_group import users_to_groups
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
    # friends = db.relationship('User', secondary=friends, back_populates='users')
    likes = db.relationship('Post', secondary=likes)
    groups_moderating = db.relationship('Group', secondary=moderators)
    received_invites = db.relationship('Invite', foreign_keys='Invite.invitee_id', back_populates='users_invited')
    sent_invites = db.relationship('Invite', foreign_keys='Invite.inviter_id', back_populates='users_inviting')

    friendship_a = db.relationship(
        'Friend', foreign_keys='Friend.user_one_id', back_populates='user_two_friends')
    friendship_b = db.relationship(
        'Friend', foreign_keys='Friend.user_two_id', back_populates='user_one_friends')

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
          "description": self.description,
          "icon_url": self.icon_url,
          "groups": [group.id for group in self.groups],
          "likes": [post.id for post in self.likes],
          "groups_moderating": [group.id for group in self.groups_moderating],
          "received_invites": [invite.id for invite in self.received_invites],
          "sent_invites": [invite.id for invite in self.sent_invites],
          "friends": [friend.user_two_id for friend in self.friendship_a] + [friend.user_one_id for friend in self.friendship_b]
        }
