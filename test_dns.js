const dns = require('dns');

dns.resolveTxt('flightchap.com', (err, addresses) => {
  if (err) console.log(err);
  console.log('TXT:', addresses);
});
