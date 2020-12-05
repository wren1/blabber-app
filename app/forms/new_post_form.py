from flask_wtf import FlaskForm
from wtforms.fields import (
    StringField, IntegerField, TextAreaField
)
from wtforms.validators import DataRequired, ValidationError


class NewPostForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired("Please provide a title.")])
    content = TextAreaField("content", validators=[DataRequired("Content can not be empty.")])
