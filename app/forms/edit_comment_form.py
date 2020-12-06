from flask_wtf import FlaskForm
from wtforms.fields import (
    IntegerField, TextAreaField
)
from wtforms.validators import DataRequired, ValidationError


class EditCommentForm(FlaskForm):
    content = TextAreaField("content", validators=[
                            DataRequired("Please provide your comment.")])
