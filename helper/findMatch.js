module.exports = function (pass, gen) {
  let crypto = require('crypto');
  let salt = gen;
  let hash = crypto.createHmac('sha256', salt).update(pass).digest('hex');
  return hash;
};
