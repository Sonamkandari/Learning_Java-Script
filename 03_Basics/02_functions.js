//creating a function
//function calculateCartprice(num1){//we declare here  a single parameter

/*LEARNING HOW TO PASS REST OPERATOR INSIDE A FUNCTION*/
    function calculateCartprice(VAL1,VAL2,...num1){//*** but if we use ...num now all the arguments can be printed because we use [...NUM[REST OPERATOR [OR]SPREAD]]*/
    return num1 //return the element
 }
console.log(calculateCartprice(200,300,455))// but we pass multiple arguements here
/* but console will print only first argument because in the aboe fuction we passes a single parameter only*/


//NOW LEARNING HOW TO PASS AN OBJECT IN A FUNCTION

//creating an object
const student = {
    username: "sonam",
    rollnum: 30
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and roll number is ${anyobject.rollnum}`);// we are using backticks here not single quotes
}
// Call the function
handleObject(student);

//passing another data type in  a fuction -> ARRAY

const myArray =[23,45,67,89] //square brackets
//now defining a fuction which accepts the array and return its second value

function returnSecondValue(getArray){
    return getArray[2]//it will return the value which is at index second
}
console.log(returnSecondValue(myArray/*we passed our above created array here*/));


