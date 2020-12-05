from flask_wtf import FlaskForm
from wtforms.fields import (
    StringField, IntegerField, TextAreaField, BooleanField
)
from wtforms.validators import DataRequired, ValidationError


class NewGroupForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    name = StringField("name", validators=[
                        DataRequired("Please provide a title.")])
    description = TextAreaField("description", validators=[
                            DataRequired("Content can not be empty.")])
    private = BooleanField("private")
