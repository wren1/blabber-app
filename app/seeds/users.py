from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    db.session.add(demo)

    user_1 = User(username='Demo', email='demo@aa.io',
                  password='password', name='demo user', description='demo user', 
                  icon_url='https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F433-spouting-whale-512.png')
    user_2 = User(username='seeduser1', email='email1@aa.io',
                  password='password', name='sara', description='Seed User', 
                  icon_url='https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F433-spouting-whale-512.png')
    user_3 = User(username='seeduser2', email='email2@aa.io',
                  password='password', name='sally', description='my name is sally and i like cats', 
                  icon_url='https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F433-spouting-whale-512.png')
    user_4 = User(username='seeduser3', email='email3@aa.io',
                  password='password', name='sue', description='im not an actual person', 
                  icon_url='https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F433-spouting-whale-512.png')
    user_1 = User(username='seeduser4', email='email4@aa.io',
                  password='password', name='sammy', description='what up dogaroo', 
                  icon_url='https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F433-spouting-whale-512.png')
    

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()


# id
# username
# email
# hashed_password
# name
# description
# icon_url

# groups
# friends
# # like
# groups_moderating
