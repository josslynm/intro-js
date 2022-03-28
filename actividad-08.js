//Funciones
//1
function buscarPalabra(oracion, palabra){

    if(oracion.includes(palabra)){ //! método includes parametro.includes(string)
        return true;
    }else{
        return false;
    }
}

var oracion1 = prompt('Escribe una oracion');
var palabra1 = prompt('Escribe una palabra a buscar');

buscarPalabra(oracion1,palabra1); // * ingresamos parametros con datos

console.log(buscarPalabra(oracion1,palabra1));

// 2

function sumatoria(array) {

    var acumulador =0;

    for(var i=0; i< array.length ; i++){
        acumulador = acumulador + array[i];
    
    }
    
    return acumulador;
}

var arreglo=[1,2,3,4,10,11];

sumatoria(arreglo);

console.log(sumatoria(arreglo));

// 3


