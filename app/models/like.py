from .db import db


likes = db.Table(
    'likes',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), nullable=False),
    db.Column('post_id', db.Integer, db.ForeignKey('posts.id'), nullable=False)
)

# from .db import db


# class Like(db.Model):
#     __tablename__ = 'likes'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "post_id": self.post_id
#         }
