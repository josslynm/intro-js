//Metodos arreglos
//1.
var animals =["eagle", "parrot", "monkey", "boar", "lion"];
var comingSoonAnimals=["panter","dragon","turtle"];

var animalesconca= animals.concat(comingSoonAnimals);

for(var i=0; i< animalesconca.length; i++){
    console.log(animalesconca[i]);
}


//3. Agrega cow al arreglo animals
animals.push("cow");
console.log(animals);

//4. Retira el elemento eagle de animals
animals.shift();
console.log(animals);



//2
var arr = [4,6,1,0,8,2]

arr.sort();

console.log(arr);


for(var i=0; i< arr.length; i++){
    console.log(arr[i]);
}