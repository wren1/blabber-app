from .db import db


moderators = db.Table(
    'moderators',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), nullable=False),
    db.Column('group_id', db.Integer, db.ForeignKey('groups.id'), nullable=False)
)

# from .db import db


# class Moderator(db.Model):
#     __tablename__ = 'moderators'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     group_id = db.Column(db.Integer, db.ForeignKey('groups.id'), nullable=False)

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "group_id": self.group_id
#         }
