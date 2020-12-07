from .db import db
from .user_to_group import users_to_groups
from .moderator import moderators


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    private = db.Column(db.Boolean, nullable=False)

    users = db.relationship('User', secondary=users_to_groups, back_populates='groups')
    moderators = db.relationship('User', secondary=moderators)

    invites = db.relationship('Invite', back_populates='group')

    def to_dict(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "name": self.name,
            "description": self.description,
            "private": self.private,
            "users": [user.id for user in self.users],
            "moderators": [user.id for user in self.moderators]
        }
