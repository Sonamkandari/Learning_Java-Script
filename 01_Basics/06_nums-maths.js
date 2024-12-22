const marks = 20
console.log(marks);// here automatically get to know it is a number

const balance =new Number(200)
console.log(balance);//but here  when we are getting the out but wr are getting //number:200 type caste

// we are using a *(toString) method
console.log(balance.toString().length)
//out put it became a string now with length
//for decimal values we  used a method to fix
console.log(balance.toFixed(2));
const otherNumber =56.565445
console.log(otherNumber.toPrecision(3));

const nim =1000000;
console.log(nim.toLocaleString());//it will put commas in between the numbers 
//and it will follow the us standards 


// js we hae by default maths library 
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // roundoff to maximum 
console.log(Math.ceil(4.2));//ciel value is used to find maximum nearest in decimal 
console.log(Math.floor(4.9));// floor value is used to  find the lowest nearest in decimal
console.log(Math.min(4,9,5,3,23));//this function is used here to  find the minimum element from all
console.log(Math.max(4,9,5,3,23));// using thi s function to find the maximum value from the all 
console.log(Math.random())///it will generate a random value 




