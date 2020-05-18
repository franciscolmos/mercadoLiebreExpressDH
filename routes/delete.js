var express = require('express');
var router = express.Router();
const products = require('../controllers/deleteProduct.js')

/* GET home page. */
router.delete('/products/delete/:id', function(req, res, next) {
    const productId = req.params.id;
  products.deleteProduct(productId);
  res.redirect('/');
});

module.exports = router;
