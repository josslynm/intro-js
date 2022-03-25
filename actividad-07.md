# JS Scoping exercises
​
1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```
​
> undefined ya que la variable a se imprime antes de ser declarada e imprime 2 ya que foo() esta retornando

> //undefined 
> //2
​
​
2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> Nada. No tiene nada para imprimir. 

> Vacio
​
​
3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;
​
    function bar() {
      console.log( a );
    }
​
    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> creo que error porque pone a la variable baz como funcion

>Uncaught SyntaxError: Invalid or unexpected token
​
​
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```
​
> No hay console.log para imprimir resultado

> vacio