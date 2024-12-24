// functions in java Script
/*function is a key word in java script

-> In JavaScript, a function is a block of reusable code that performs
 a specific task. It is defined using the function keyword, followed by 
 a name, parentheses (for parameters), and curly braces {} to enclose
  the code block */

  function sayHello() {
    console.log("Hello, World!");
  }
  
  // Calling the function
  sayHello(); // Output: Hello, World!
  
  function myName(){
    console.log("sonam")
    console.log("kandari")

  }//this is a function which we made
  //calling myName fuction

  myName/*here myName is the reference of the funtion through which we are calling a funtion*/();
  //we can call the same function multiple times without repeating the same code again and again
  myName();
  myName()/*after adding parentheses it it became execution of a function*/;
  myName();
  myName();
  myName();


  //make a function for adding two numbers
//one of a way 
  function SumOfNumbers( a,b){
    a=5
    b=7
    const sum=a+b;
    console.log(sum);
  }
  SumOfNumbers();

//another way by passing arguments
// function Multi_OfNumbers( a,b){//these are called parameters beacuse we are defining a funtion and gaving some them  input variables these input variables are called parameters 
//     const Multiplication=a*b;
//     console.log(Multiplication);
//   }
//   Multi_OfNumbers(9,6);//by passing the arguments


function Multi_OfNumbers( a,b){//these are called parameters beacuse we are defining a funtion and gaving some them  input variables these input variables are called parameters 
    const result=a*b;

    /* or another way 
     return a*b;*/
    return result;

    //note if we write somthing after return statement in a fuction that statement will never execute
    //example
    console.log("sonam kandari");// unreachable code
  }
 const result= Multi_OfNumbers(9,6);//by passing the arguments
 console.log("Results:",result)

 