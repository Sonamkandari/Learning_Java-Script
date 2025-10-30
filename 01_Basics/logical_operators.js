// logical operators in java script

const age=79;
const gender='male';
// double equals to is used to check is the value is equal to the particular value or not
if(age>=18 && gender=='male'){
    console.log('you are adult male');
}else {
    console.log('he is a children'); 
}

// logical operators 
// And -> All condition must be true
//  or -> either one of the all must be true
// Not -> not operator 
// Not ! -> not equal to operator

const age1=15;
const gender1='female';
const number=5;
if(age1>18 ||gender=='male'){
    console.log('you are and adult')
}else{
    console.log('yor are a children');
}

let isMale= gender =='male'

const number1=5;
if(number%2!==0){
    console.log('Even number');
}

