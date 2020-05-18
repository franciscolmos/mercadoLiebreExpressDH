const operacionesJSON = require('./jsonLogic');
const product = require('./productos');

const productDetail = {
    getProductToEdit: function(id) {
        const productsList = product.allProductsWithImage();
        return productsList.filter((product) => {
            return (product.id == Number(id));
        })
    },
    editProduct: function(id, editedProduct){
        const products = product.productos();
         products.map(product => {
            if(product.id ==  id){
                product.name = editedProduct.name;
                product.price = editedProduct.price;
                product.discount = editedProduct.discount;
                product.category = editedProduct.category;
                product.description = editedProduct.description;
            }
        })
        operacionesJSON.escribirJSON(products,'data/productsDataBase.json');
    }

}

module.exports = productDetail;