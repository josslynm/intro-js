//2. 
var numeracion = Number(prompt("Ingresa un numero:"));

var contador=1;

while (contador <= numeracion) {
   
    var residuo = contador % 5;

    if(residuo==0)
    console.log(contador);

    contador++;  
}
console.log("Fin de while") 

// 3.

var numeracion2 = Number(prompt("Ingresa un numero:"));

var contadorDo=1;

do {

    var residuo2 = contadorDo % 5;

    if(residuo2 == 0)
        console.log(contadorDo)

    contadorDo ++;
    
} while (contadorDo <= numeracion2);

//4.
for(var i=1 ; i <= 50; i++){
    
    if(i % 2 == 1)
        console.log(i + ' es un número impar');

}