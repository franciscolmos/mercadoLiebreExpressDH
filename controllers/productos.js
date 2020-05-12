const operacionesJSON = require('./jsonLogic');

const productos = {
    productos: function () {
        const listadoProductos = operacionesJSON.leerJSON('data/productsDataBase.json');
        return listadoProductos;
    },
    prodcutosConDescuentos: function(){
        const productos = this.productos();
        const productosConDescuentos = productos.map((producto) =>{
            producto.price = (producto.price - (producto.price * (producto.discount/100))).toFixed();
            return producto;
        })
        return productosConDescuentos;
    },
    productosConDescuentosYSeparadorDeMiles: function(){
        const productosConDescuentos = this.prodcutosConDescuentos();
        const productosConPrecioYSeparadorDeMiles = productosConDescuentos.map((producto) =>{
            producto.price = producto.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return producto;
        })
        return productosConPrecioYSeparadorDeMiles;
        
    },
    productosFiltrados: function (category) {
        const listadoProductosListos = this.productosConDescuentosYSeparadorDeMiles();
        const listadoProductosListosFiltrados = listadoProductosListos.filter((product) => {
             return product.category == String(category);
        })
        return listadoProductosListosFiltrados;
    },
    productosConImages: function(category){
        const productosListosFiltrados = this.productosFiltrados(category);
        const productosListosFiltradosConImagen = productosListosFiltrados.map((producto) =>{
            producto.image = 'images/products/' + producto.image;
            return producto;
        })
        return productosListosFiltradosConImagen;
    },
    /*
    routToDetail: function(category){
        const productosListosFiltradosConImage = this.productosConImages(category);
        console.log(productosListosFiltradosConImage.id)
        return routeToDetail = 'localhost:3000/product/detail/' + productosListosFiltradosConImage.id + '/' + productosListosFiltradosConImage.category
    }
    */
}

module.exports = productos;