var Client = require('coinbase').Client;

var client = new Client({
  'apiKey':key,
  'apiSecret': secret,
  'version':'2022-09-12',
  'strictSSL' : false
});

var address = null;

client.getAccount('d57d3265-dccc-5834-8de3-5294b4ac23bf', function(err, account) {
    account.sendMoney({'to': 'lim2481284.near',
        'amount': '0.11',
        'currency': 'NEAR'}, function(err, tx) {
        console.log(tx);
        console.log(err);
    });
});