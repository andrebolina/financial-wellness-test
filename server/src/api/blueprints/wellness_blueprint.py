from flask import Blueprint
from flask.views import MethodView

from api.schema.wellness import wellness_score_schema
from services.wellness_service import calculate_wellness_score

blueprint = Blueprint(
  'wellness',
  __name__
)

@blueprint.route("/<annual_income>/<monthly_costs>/score", methods=['GET'])
def wellness_score(annual_income, monthly_costs):
  score = calculate_wellness_score(annual_income, monthly_costs)
  return wellness_score_schema.dump({'score': score})