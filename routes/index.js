var express = require('express');
var router = express.Router();
const products = require('../controllers/productos.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  /*
  const routToDetail = products.routToDetail('in-sale');
  console.log(routToDetail);
  */  
  res.render('index', { title: 'Mercado Liebre Argentina', 
                        productosInSaleConImage: products.productosConImages('in-sale'),
                        productosVisitedConImage: products.productosConImages('visited')
                        
                      });
});

module.exports = router;
