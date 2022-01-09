export const formatMoneyValue = (value) => {
  const numberValue = parseInt(value.replace(/,/g, ""));

  return numberValue
    ? new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(numberValue)
    : "";
};

export const formatNumberValue = (value) => {
  return parseInt(value.replace(/,/g, "")) || 0;
};
