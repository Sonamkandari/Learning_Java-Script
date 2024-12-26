
// truthy and falsy value
const userEmail ="sonamNoon@gmail.com"
if(userEmail){
    console.log("got user email");
    
}else{
    console.log("Don't have user email")
}

// Falsy value
/* 
False ,0,-0 ,BigInt, 0n ,"", null, undefined, Not a number[NaN]
 */

//Truthy values
/*
"0",`false`," ",[],{},function(){}
*/

//how check an  array
UserMessage =[]
if (UserMessage.length===0){
   console.log("Aray is empty");
   
}else {
    console.log("Array is not empty");
    
}

//Nullish Coalescing operator (??)
let val;
//val = 5??10
val = null?? 10// it will check is the first value is null or not  if first value is 0, it will always print next value which is not zero
val = undefined?? 45// it will check if the first value is null or not 
console.log(val);

//ternary operator

//condition ? true: false

//Example 
const icecream = 8989;
icecream>=80 ? console.log("less than 8000"):console.log("more than 80");

