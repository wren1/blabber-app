from flask_wtf import FlaskForm
from wtforms.fields import (
    TextAreaField
)
from wtforms.validators import DataRequired, ValidationError


class EditPostForm(FlaskForm):
    content = TextAreaField("content", validators=[
                            DataRequired("Please provide your comment.")])
