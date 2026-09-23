function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  const subtotal = quantity * basePrice;
  const discounted = quantity >= 5 ? subtotal * 0.9 : subtotal;
  return Math.round(discounted);
}

module.exports = { isValidQuantity, calculateTicketPrice };
