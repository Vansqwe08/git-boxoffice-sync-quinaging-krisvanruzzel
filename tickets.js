function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  const subtotal = quantity * basePrice;
  const priced = isPremium ? subtotal * 1.5 : subtotal;
  return Math.floor(priced);
}

module.exports = { isValidQuantity, calculateTicketPrice };
