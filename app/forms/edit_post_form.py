from flask_wtf import FlaskForm
from wtforms.fields import (
    StringField, TextAreaField
)
from wtforms.validators import DataRequired, ValidationError


class EditPostForm(FlaskForm):
    title = StringField("title", validators=[DataRequired("Please provide a title.")])
    content = TextAreaField("content", validators=[
                            DataRequired("Please provide your comment.")])
