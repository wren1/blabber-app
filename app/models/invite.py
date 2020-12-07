from .db import db


class Invite(db.Model):
    __tablename__ = 'invites'

    id = db.Column(db.Integer, primary_key=True)
    inviter_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    invitee_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))
    type = db.Column(db.String(255), nullable=False)

    users_invited = db.relationship('User', back_populates='received_invites', foreign_keys=[invitee_id])
    users_inviting = db.relationship('User', back_populates='sent_invites', foreign_keys=[inviter_id])
    group = db.relationship('Group', back_populates='invites')

    def to_dict(self):
        return {
            "id": self.id,
            "inviter_id": self.inviter_id,
            "invitee_id": self.invitee_id,
            "group_id": self.group_id,
            "type": self.type,
        }
