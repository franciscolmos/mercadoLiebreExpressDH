const operacionesJSON = require('./jsonLogic');
const product = require('./productos');

const productDetail = {
    getDetail: function(id, category) {
        const productList = product.filterdeProductosWithImages(category);
        return productList.filter((producto) => {
            return (producto.id == Number(id) && producto.category == category);
        })
    },
    getOriginalPrice: function(id){
        let productList = product.productos();
        productList = productList.filter(product => {
            return product.id == id;
        })
        return productList[0].price;
    } 
}

module.exports = productDetail;