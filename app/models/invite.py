from .db import db


class Invite(db.Model):
    __tablename__ = 'invites'

    id = db.Column(db.Integer, primary_key=True)
    inviter_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    invitee_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))
    type = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "inviter_id": self.inviter_id,
            "invitee_id": self.invitee_id,
            "group_id": self.group_id,
            "type": self.type,
        }
