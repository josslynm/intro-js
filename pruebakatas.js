// function isChristmas(parametro){
    
//     parametro.split();
//     var array = parametro.slice(0,5);
//     var aux= "25-12"
//     return aux == array;

// }
// console.log(isChristmas("25-12-2003"))

// function isMinor(num1,num2,num3){

//     if((num1 < 10) || (num2 < 10) || (num3 < 10)  ){
//         return true;
//     }else if((num1 > 10) || (num2 > 10) || (num3 > 10) ){
//         return false;
//     }
// }

// console.log(isMinor(12, 39, 48));
function whichQuadrant(x,y){
    if(x>0 && y>0){
        return Cuadrante I;
    }else if(x<0 && y>0){
        return Cuadrante II;
    }else if(x<0 && y<0){
        return Cuadrante III;
    }else if(x>0 && y<0){
        return Cuadrante IV;
    }
}


console.log(whichQuadrant(3,-4));
