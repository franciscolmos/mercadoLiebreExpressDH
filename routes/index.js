var express = require('express');
var router = express.Router();
const products = require('../controllers/productos.js')

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Mercado Liebre Argentina', 
                        productosInSaleConImage: products.filterdeProductosWithImages('in-sale'),
                        productosVisitedConImage: products.filterdeProductosWithImages('visited')
                        
                      });
});

module.exports = router;
