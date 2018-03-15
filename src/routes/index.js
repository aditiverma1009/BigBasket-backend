const products = require('./products');
const orders = require('./orders');

module.exports = [{
  path: '/',
  method: 'GET',
  handler(request, response) {
    response('On root.');
  },
}].concat(products, orders);

