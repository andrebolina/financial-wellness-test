export const formatMoneyValue = value => {
  const numberValue = parseFloat(value.replace(/,/g, '')) || 0;

  return new Intl.NumberFormat('en-US', {
    style: 'decimal'
  }).format(numberValue);
}