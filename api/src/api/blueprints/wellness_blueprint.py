import json
from flask import Blueprint, jsonify, request

from api.models.score_history import db, ScoreHistory
from api.schema.wellness_schema import WellnessScoreSchema
from api.schema.score_history_schema import score_history_response_schema
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


@blueprint.route("/score", methods=['POST'])
def create_wellness_score():
    response_schema = WellnessScoreSchema()

    payload = json.loads(request.data)

    wellness_score = calculate_wellness_score(payload['annual_income'], payload['monthly_costs'])

    new_score = ScoreHistory(income=payload['annual_income'], costs=payload['monthly_costs'], score=wellness_score, user_id=payload['user_id'])
    
    db.session.add(new_score)
    db.session.commit()

    return response_schema.dump({'score': wellness_score})


@blueprint.route("/score/history/<int:user_id>", methods=['GET'])
def get_score_history(user_id):  
    return jsonify(score_history_response_schema.dump(ScoreHistory.query.filter(ScoreHistory.user_id == user_id).all()))