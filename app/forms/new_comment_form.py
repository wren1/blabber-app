from flask_wtf import FlaskForm
from wtforms.fields import (
    IntegerField, TextAreaField
)
from wtforms.validators import DataRequired, ValidationError


class NewCommentForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    content = TextAreaField("content", validators=[
                            DataRequired("Please provide your comment.")])
