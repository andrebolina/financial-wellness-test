export const formatMoneyValue = value => {
  const numberValue = parseInt(value.replace(/,/g, ""));

  return numberValue
    ? new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(numberValue)
    : "";
};

export const formatNumberValue = value => {
  return parseInt(value.replace(/,/g, "")) || 0;
};

export const formatHistoryValue = value => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(value)
}

export const formatHistoryScore = value => {
  return `${value.substring(0, 1)}${value.substring(1).toLowerCase()}`;
}

export const getHistoryScoreColor = value => {
  const colors = {
    "HEALTHY": '#02A549',
    "LOW": '#D32A36',
    "MEDIUM": "#FFC032"
  }

  return colors[value]
}