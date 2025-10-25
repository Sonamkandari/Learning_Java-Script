//  Data types in Java Scripts
/* Data types
- Numbers
- Strings
- Booleans
- Null
- Undefined
- Objects
*/

// some basic operators
/* +,-,*,/, %*/ 


"use strict";//treat all js code as newer version
// alert("hello")
// alert(3+3) //gives a error because we are using node.js not browser

let name="sonam"
let age =18
let isloggedin=false

//number => 2 to power 53
//bigInt  
//String=>""
//boolean=>true/false
//null =>(it is a stand alone value)(it is the representation of null value)
//undefined=>when value is not define or assigned
//symbol =>unique


//object 
console.log(typeof "sonam kandari")
console.log(typeof 456)
console.log(typeof null)//output is ->it is a object
console.log(typeof undefined)//output is it is undefined//because it is a type


let name1="puffin";
let age1=18;
let isSignUp=false;

console.log([name1,age1,isSignUp]);
console.log([typeof name1,typeof age1,typeof isSignUp]);

console.table([
    {Value:name1,Type:typeof name1},
    {Value:age1,Type:typeof age1},
    {Value:isSignUp,Type:typeof isSignUp}
]);

console.log(x);
var x=10;

// NAN is a numerical data type in javaScript despite it stand for "Not-a-Number"
console.log(typeof NaN);

const arr = [1, 2, 3];
arr.push(4);
arr.pop(3);
arr.push(7);
arr.push(9);
arr.push(8);
arr.push(0);
arr.push(79);
arr.push(39);
console.log(arr);

console.log(a);
var a=10;
//In JavaScript, hoisting is the behavior where the interpreter moves declarations of variables, functions, or classes to the top of their scope before code execution begins

// const student;
// student="sonam"; this will through an error

let s="10";
let o=10;
console.log(s==o,s===o);


//number data type
let num=234;
let num1=10;

// strings data type 
let fistName='sonam';
const lastName=' kandari'
// we can also do concatenation of two different strings
console.log(fistName +lastName);

//booleans data type in java script

// booleans - 0,1 only
let islog=true;
console.log(islog);

// js 1-> true | 0-> false
// js true| false


// if you multiply in compatible data types

let num4=4.76;
let num7='nobi';
console.log(num4*num7);

// this will give NaN (Not a number)
// because we are trying to multiply a number and a character



