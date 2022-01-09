import marshmallow as ma
from api.schema.base import BaseSchema

class WellnessScoreSchema(BaseSchema):
  score = ma.fields.String()

wellness_score_schema = WellnessScoreSchema()
