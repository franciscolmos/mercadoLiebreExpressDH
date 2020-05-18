var express = require('express');
var router = express.Router();
const productDetail = require('../controllers/productDetails')

/* GET home page. */
router.get('/products/detail/:id/:category', function(req, res, next) {
    const id = req.params.id;
    const category = req.params.category;
  res.render('productDetail', { title: productDetail.getDetail(id,category)[0].name, 
                                detail: productDetail.getDetail(id,category),
                                originalPrice: productDetail.getOriginalPrice(id)});
});

module.exports = router;