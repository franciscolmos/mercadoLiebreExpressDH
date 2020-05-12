const fs = require ('fs');

const operacionesJSON = {
    leerSinParseJSON : function(archivoJSON) {
        return fs.readFileSync(archivoJSON,{encoding:"utf-8"})
    },
    leerJSON : function(archivoJSON) {
        const archivo = fs.readFileSync(archivoJSON,{encoding:"utf-8"})
        return JSON.parse(archivo);
    }
}

module.exports = operacionesJSON;
