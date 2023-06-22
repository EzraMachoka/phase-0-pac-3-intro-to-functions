// Follow along with the examples here

function doNothing() {}


function sayHello () {
   console.log("Hello!");

}

sayHello();




function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }


  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }

  sayHelloToBrendan();
  sayHelloToIsabel();
  sayHelloToSofia();






  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); 







  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1);




  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  say("Goodbye", "Julio");

  




  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }