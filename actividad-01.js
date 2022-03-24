//  MULTIPLICACION
// Number convierte el string a naturaleza numerica
var factor = Number(prompt("Ingresa el primer factor para multiplicar"));
var multiplicacion = factor*2;
alert("El resultado de multiplicar x2 es " + multiplicacion);

// RESTA 
var sumando1= Number( prompt("Ingresa el primer número"));
var sumando2= Number( prompt("Ingresa el segundo número"));

var resta = sumando1 - sumando2;
alert("El resultado de la diferencia es " + resta );

/// AREA DEL CIRCULO
var radio = Number(prompt("Ingresa el radio del círculo"))
var areac = (Math.PI  * (radio ** 2));
alert("El área es " + areac + " [u^2]");

// AREA DEL ROMBO
var D = Number(prompt("Ingresa diagonal mayor"))
var d = Number(prompt("Ingresa diagonal menor"))
var arear = (D*d)/2;
alert("El área es " + arear + " [u^2]");

