var pares =[];

for(var k=0, i=0; k<101,i<101 ;  k++,i++){

    var par = i%2;
        if(par == 0){
            pares[k]= i;
        }else{
            k--;
        }
}

console.log(pares);