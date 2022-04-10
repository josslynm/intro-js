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
function digits(numero){
    
    
  
      var  converToString=  numero.toString();
      var converToArray =+converToString.split(".")[1];//+ convertir a numero
      
      var contador = 0;
  
      while (converToArray >= 1) {
          ++contador;
          converToArray /= 10;
      }

      if(==98.02){
          
      }
  
      if(contador == 1){
          return "Un dígito"
      }else if(contador === 2){
          return "Dos dígitos"
      }
      
  }
  
  console.log(digits(98.02))
  console.log(digits(404.4))


    
