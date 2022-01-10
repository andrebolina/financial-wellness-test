from utils.constants.wellness_constants import (
    LOW_SCORE,
    MEDIUM_SCORE,
    HEALTHY_SCORE
)

TAX_PERCENTAGE = 0.08
MAX_MEDIUM_PERCENTAGE = 0.75
MAX_HEALTHY_PERCENTAGE = 0.25


def calculate_wellness_score(annual_income, monthly_costs):
    annual_costs = int(monthly_costs) * 12
    annual_compensation = int(annual_income) - \
        int(annual_income) * TAX_PERCENTAGE
    net_balance = annual_costs / annual_compensation

    if (net_balance > MAX_MEDIUM_PERCENTAGE):
        return LOW_SCORE
    elif (net_balance > MAX_HEALTHY_PERCENTAGE):
        return MEDIUM_SCORE

    return HEALTHY_SCORE
