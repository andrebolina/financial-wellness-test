import marshmallow as ma
from api.schema.base_schema import BaseSchema


class ScoreHistorySchema(BaseSchema):
    class Meta:
        fields = ("created_at", "income", "costs", "score")

score_history_response_schema = ScoreHistorySchema(many=True)