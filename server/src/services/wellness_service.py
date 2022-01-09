def calculate_wellness_score(annual_income, monthly_costs):
  annual_net_compensation = int(annual_income) * 0.92
  annual_costs = int(monthly_costs) * 12
  balance = annual_costs / annual_net_compensation

  if (balance > 0.75):
    return 'LOW'
  elif (balance > 0.25):
    return 'MEDIUM'
  
  return 'HEALTHY'