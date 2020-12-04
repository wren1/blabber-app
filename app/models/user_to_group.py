from .db import db


users_to_groups = db.Table(
    'users_to_groups',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), nullable=False),
    db.Column('group_id', db.Integer, db.ForeignKey('groups.id'), nullable=False)
)
