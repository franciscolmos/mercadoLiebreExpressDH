const operacionesJSON = require('./jsonLogic');
const product = require('./productos');

const productDetail = {
    getDetail: function(id, category) {
        const productList = product.productosConImages(category);
        return productList.filter((producto) => {
            return (producto.id == Number(id) && producto.category == category);
        })
    },
    getOriginalPrice: function(id){
        const productList = product.productos();
        const originaltPrice = productList[Number(id-1)].price;
        return originaltPrice;
    } 
}

module.exports = productDetail;