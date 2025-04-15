const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', 
  client_id: process.env.PAYPAL_CLIENT_ID || "fakeClientIdForTesting123",
  client_secret: process.env.PAYPAL_CLIENT_SECRET  || "fakeClientSecret456"
});




module.exports = paypal