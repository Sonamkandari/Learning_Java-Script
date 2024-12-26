
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