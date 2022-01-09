import marshmallow as ma
from api.schema.base_schema import BaseSchema

class WellnessScoreSchema(BaseSchema):
  score = ma.fields.String()
