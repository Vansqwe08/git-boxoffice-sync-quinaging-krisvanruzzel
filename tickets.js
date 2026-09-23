function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  const subtotal = quantity * basePrice;
  const priced = isPremium ? subtotal * 1.5 : subtotal;
  return Math.floor(priced);
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  const subtotal = quantity * basePrice;
  const withVip = isPremium ? subtotal * 1.5 : subtotal;
  const withGroupDiscount = quantity >= 5 ? withVip * 0.9 : withVip;
  return Math.round(withGroupDiscount);
}

module.exports = { isValidQuantity, calculateTicketPrice };
