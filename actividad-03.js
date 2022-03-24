// 1.
var variable1 = Number(prompt("Ingresa un número:"));

var residuo = variable1 % 2;

if(residuo === 0){
    console.log(variable1 + " es divisible entre 2");
}else
    console.log(variable1 + " no es divisible entre 2");

// 2. 

var variable2 = Number(prompt("Ingresa un número:"));

var residuo2 = variable2 % 2;
if(residuo === 0){
    alert(variable2 + " es par");
}else
    alert(variable2 + " no es par");

//3
var variable3 = Number(prompt("Ingresa un número:"));

if(variable3 === 1000){
    console.log("Ganaste un premio");
}else
console.log("Lo sentimos, sigue participando");

//4
var numero1 = Number(prompt("Ingresa un número:"));
var numero2 = Number(prompt("Ingresa un número:"));

if(numero1 != numero2 && numero1>numero2 )
{
    console.log(numero2 + " es menor")
}else if( numero1 != numero2 && numero2>numero1)
    console.log(numero1 + " es menor")

//5
var numA = Number(prompt("Ingresa un número:"));
var numB = Number(prompt("Ingresa un número:"));
var numC = Number(prompt("Ingresa un número:"));

var aux=0;

if(numA > numB || numA == numB){
    aux = numA;
    console.log("El numero mayor es ", numA);
}else if (numB > numA){
    aux =numB;
    console.log("El numero mayor es ", numA);
}

if(aux > numC){
    console.log(aux + " es el numero mayor");
}else if( numC > aux || aux == numC)
    console.log("El numero mayor es " + numC);


