from werkzeug.security import generate_password_hash
from app.models import db, User, Group, Post, Comment, Invite


def seed_groups():
    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    db.session.add(demo)
    db.session.commit()


def undo_groups():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

# id
# owner_id
# name
# description
# private

# users
# moderators
