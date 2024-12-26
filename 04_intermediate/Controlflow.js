//logic control or control flow

/* if */
const isSonamLoggedIn =true;

if(2=="2"){//since here if we think logically it is not equal[a constant 2 is not equal to a String 2 ] 
    console.log(true);//but output is true because it is not checking data types 
    
}else{
    console.log(false);
}
//use triple equals 2
if(2==="2"){
    console.log(true);
    
}else {
    console.log(false);
    
}


//conditional code
 let temprature = 80;
if (temprature <50){

    console.log("less than 50");

}else{
    console.log("temprature is greater than 50");
    
}


const marks =89;
if(marks>40){
  /*use var */  let pass="yes"
    console.log(`student is:${pass}`);
    
}
//if if use var data type than this line will also execute
//console.log(`student is:${pass}`);// this will gave a error because pass is  not initialize here that is initialize inside the block

// short hand notation
const balance =9000;
if(balance>500)console.log("test");//implicit scope //it will execute in a single line

//but not a good approach of writing a code
const value=900;
if(value>400)console.log("lets go"),//by using commas we can write multiple lines
console.log("surely we are going");

//else if condition for checking multiple condition
const number =779;
 if(number<300){
    console.log("less than 300");
    
 }else if(number<600){
    console.log("less than 600");
    
 }else{// in else case we dont have to check the condition
    console.log("less than 800");
    
 }


//how to use these control flow in real life

const userLoggedIn =true
const debitcard = true
const loggedinFromgoogle = false
const loggedinFromemail = true


if(userLoggedIn && debitcard && 2==3){// & operator both the condition should be true for execution
    console.log("Allow to buy course");
}else{
    console.log("not buy the course");
    
}

if (loggedinFromemail || loggedinFromgoogle){// OR operator atlest one  should be true
    console.log("user logged in");
}else{
    console.log("not logged in");
    
}

/* Types of operators in js
ARITHMETIC OPERATORS 
CONDITIONAL OPERATORS (&& AND OR OPERATORS)
ASSIGNMENT OPERATORS 
LOGICAL OPERATORS 
RELATIONAL OPERATORS 
BITWISE OPERATORS 
COMPARISION OPERATORS 
TERNARY OPERATORS 
INCREMENT AND DECREMENT OPERATORS
SHIFT OPERATORS
*/






