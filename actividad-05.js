/* ITERANDO ARREGLOS
JOCELYN MEJIA */

//1.
 var arreglo=[1,4,6,10,22,55,46,2,5,0];

for(var i=0; i<= arreglo.length ; i++)
    console.log(arreglo[i]);

for(var i=0; i<= arreglo.length ; i++){

    if(arreglo[i] > 3)
        console.log(arreglo[i]);
}
   
//2.

var arreglo2 = [];
var k=0;
while(k <= 4){

    arreglo2[k] =  Number(prompt("valor [" +k+ "]"))

    k++;

}

for(var i=0; i <= arreglo2.length-1 ; i++)
    console.log("arreglo2["+ i +"]= " +arreglo2[i]);