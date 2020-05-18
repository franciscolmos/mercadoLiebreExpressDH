const operacionesJSON = require('./jsonLogic');
const product = require('./productos');

const productDetail = {
    createProduct: function(productToCreate){
        const products = product.productos();
        const lastProductId =  products[products.length - 1].id;
        const newProduct = {
            id : lastProductId + 1,
            name : productToCreate.name,
            description : productToCreate.description,
            price : productToCreate.price,
            discount : productToCreate.discount,
            image : "default-image.png",
            category: productToCreate.category
        }
        operacionesJSON.agregarJSON(newProduct,'data/productsDataBase.json');
    }
}

module.exports = productDetail;