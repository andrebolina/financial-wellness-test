from marshmallow import Schema

class BaseSchema(Schema):
  class Meta:
    ordered = True
    strict = True
