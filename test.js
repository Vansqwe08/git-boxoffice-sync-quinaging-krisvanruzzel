const tickets = require('./tickets');

let failures = 0;
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(tickets.isValidQuantity(4), true, 'a normal order quantity is valid');
assertEqual(tickets.isValidQuantity(0), false, 'a zero quantity is invalid');
assertEqual(tickets.isValidQuantity(25), false, 'an order over 20 tickets is invalid');

assertEqual(tickets.calculateTicketPrice(3, 15.5), 47, 'price for 3 tickets at $15.50 each');
assertEqual(tickets.calculateTicketPrice(5, 20), 90, '10% group discount');
assertEqual(tickets.calculateTicketPrice(2, 20, true), 60, '50% VIP surcharge');
assertEqual(tickets.calculateTicketPrice(5, 20, true), 135, 'VIP surcharge and group discount together');

process.exitCode = failures > 0 ? 1 : 0;
