var Client = require('coinbase').Client;

var client = new Client({
  'apiKey':key,
  'apiSecret': secret,
  'version':'2022-09-12',
  'strictSSL' : false
});

var address = null;

client.getAccount('415d6691-f76c-536f-8980-afecb304fed0', function(err, account) {
    account.sendMoney({'to': 'lim2481284.near',
        'amount': '0.15',
        'currency': 'NEAR'}, function(err, tx) {
        console.log(tx);
        console.log(err);
    });
});