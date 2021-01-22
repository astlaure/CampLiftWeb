import cryptoRandomString from 'crypto-random-string';

(() => {
  // eslint-disable-next-line no-console
  console.log(cryptoRandomString({ length: 32 }));
})();
