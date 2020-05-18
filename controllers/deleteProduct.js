const operacionesJSON = require('./jsonLogic');
const product = require('./productos');

const productDetail = {
    deleteProduct: function(id){
        const products = product.productos();
        const newProductList = products.filter(product => {
            if(product.id !=  id){
                return product;
            }
        })
        operacionesJSON.escribirJSON(newProductList,'data/productsDataBase.json');
    }
}

module.exports = productDetail;