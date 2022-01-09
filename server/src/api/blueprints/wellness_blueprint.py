from flask import Blueprint
from flask.views import MethodView

from api.schema.wellness_schema import WellnessScoreSchema
from services.wellness_service import calculate_wellness_score

blueprint = Blueprint(
  'wellness',
  __name__
)

@blueprint.route("/<annual_income>/<monthly_costs>", methods=['GET'])
def wellness_score(annual_income, monthly_costs):
  response_schema = WellnessScoreSchema()

  wellness_score = calculate_wellness_score(annual_income, monthly_costs)
  
  return response_schema.dump({'score': wellness_score})