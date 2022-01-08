export const formatMoneyValue = value => {
  const numberValue = parseFloat(value.replace(/,/g, ''));

  return numberValue ? new Intl.NumberFormat('en-US', {
    style: 'decimal'
  }).format(numberValue) : '';
}