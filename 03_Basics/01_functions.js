// functions in java Script
/*function is a key word in java script

-> In JavaScript, a function is a block of reusable code that performs
 a specific task. It is defined using the function keyword, followed by 
 a name, parentheses (for parameters), and curly braces {} to enclose
  the code block */

// creating an function in java script
  function sayHello() {
    console.log("Hello, World!");
  }
  
  // Calling the function
  sayHello(); // Output: Hello, World!


  //creating a function for washing good morning to Rishita
  function sayGoodmornig(){
    console.log("Hello Rishita good morning");
  }

  sayGoodmornig();
  
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

  // creating  function for multiplying two numbers

  function MultiplicationOfNum(t, p){
    t=8
    p=20
    let result=t*p;
    console.log(result);;
    
  }

  MultiplicationOfNum();


//another way by passing arguments
// function Multi_OfNumbers( a,b){//these are called parameters because we are defining a function and giving some them  input variables these input variables are called parameters 
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

 
 //creating a function and calling of a function
function add(a,b,c){
  console.log(a+b+c);
}
let result2=add(6,9,6);
console.log(result2);


// create a function in which you can add unlimited numbers and you can take input unlimited numbers
function UnlimitedEle(){

 let result3=8;
 // Argument is an object 
 // so whatever parameters are receive by the functions javaScript converted in to arguments 
 for(let i=0;i<arguments.length;i++){
  result3=result3+arguments[i];
 }
return result3
 
}
let ans=UnlimitedEle(2,3,45,65,7,8,56,445);
console.log(ans);


// spread operators
// another way of creating a function is using spread operations
function numberLimits2(...num){
  let ans=0;
  for(let i=0;i<num.length;i++){
     ans=ans+num[i];
  }
  return ans
    
}
let res=numberLimits2(11,23,5,6,77.9,78,99)
  console.log(res);
  

  // these functions are not mostly used in java scripts and latest versions of java scripts used arrow functions
  


