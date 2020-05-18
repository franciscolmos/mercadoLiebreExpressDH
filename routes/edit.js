var express = require('express');
var router = express.Router();
const products = require('../controllers/editProduct.js')

/* GET home page. */
router.get('/products/edit/:id', function(req, res, next) {
    const productId = req.params.id;
  res.render('productEditForm', { title: ' Edit product - Mercado Liebre Argentina',
                                  productToEdit: products.getProductToEdit(productId)});
});
router.put('/products/update/:id', function(req, res, next) {
const productId = req.params.id;
products.editProduct(productId, req.body);
    res.redirect('/');
});

module.exports = router;
