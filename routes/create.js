var express = require('express');
var router = express.Router();
const products = require('../controllers/create.js')

/* GET home page. */
router.get('/products/create', function(req, res, next) {
  res.render('productCreateForm', { title: ' Create product - Mercado Liebre Argentina'});
});
router.post('/products/create', function(req, res, next) {
  products.createProduct(req.body);
  res.redirect('/');
});

module.exports = router;
