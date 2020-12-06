from .db import db
from .like import likes


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_on = db.Column(db.String(255), nullable=False)
    last_modified = db.Column(db.String(255), nullable=False)

    users = db.relationship('User', secondary=likes)
    comments = db.relationship('Comment', back_populates='post', cascade='all, delete')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "group_id": self.group_id,
            "title": self.title,
            "content": self.content,
            "created_on": self.created_on,
            "last_modified": self.last_modified,
            "users_liked": [user.id for user in self.users],
            "comments": [comment.id for comment in self.comments]
        }
