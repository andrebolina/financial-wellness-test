from utils.constants.wellness_constants import (
    LOW_SCORE,
    MEDIUM_SCORE,
    HEALTHY_SCORE
)
from services.wellness_service import calculate_wellness_score


class TestWellnessService():
    def test_calculate_wellness_score_low_result(self):
        assert calculate_wellness_score(1000, 80) == LOW_SCORE

    def test_calculate_wellness_score_medium_result(self):
        assert calculate_wellness_score(1000, 30) == MEDIUM_SCORE

    def test_calculate_wellness_score_healthy_result(self):
        assert calculate_wellness_score(1000, 10) == HEALTHY_SCORE
