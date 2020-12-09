# from .db import db


# friends = db.Table(
#     'friends',
#     db.Column('id', db.Integer, primary_key=True),
#     db.Column('user_one_id', db.Integer, db.ForeignKey('users.id'), nullable=False),
#     db.Column('user_two_id', db.Integer, db.ForeignKey('users.id'), nullable=False)
# )

from .db import db


class Friend(db.Model):
    __tablename__ = 'friends'

    id = db.Column(db.Integer, primary_key=True)
    user_one_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_two_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user_two_friends = db.relationship(
        'User', back_populates='friendship_a', foreign_keys=[user_one_id])
    user_one_friends = db.relationship(
        'User', back_populates='friendship_b', foreign_keys=[user_two_id])

    def to_dict(self):
        return {
            "id": self.id,
            "user_one_id": self.user_one_id,
            "user_two_id": self.user_two_id
        }
