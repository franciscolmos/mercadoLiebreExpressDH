var express = require('express');
var router = express.Router();
const products = require('../controllers/productos.js')

/* GET home page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products - Mercado Liebre Argentina', 
                        products: products.allProductsWithImage()                        
                      });
});

module.exports = router;
