// firstly we read the MdN documentation where we get ALL the information related to the Date function

//Dates

let myDate = new Date(); //we declare an object and create an instance of the object
console.log(myDate);
//we try to conert it into other data type
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());;
console.log(myDate.toDateString());;
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//in java scrip date is an object

// we can declare the date by our own also 
 
let myCreatedDate = new Date (2024,6,23);
console.log(myCreatedDate);
console.log(myCreatedDate.toString()); //0utput is TUESDAY 23 JULY 
//NOTE  Months sequence in java Script started from 0-11

//but we changes the format
let selfCreated  = new Date ("2023-01-30");
console.log(selfCreated.toLocaleString());

let myTimeStamp =Date.now();
console.log(myTimeStamp);//this method will gave you a value in mili seconds

// for example if i want to know the total time from the day i started leaving in a hotel till today
console.log(myCreatedDate.getTime());
// convert the time in seconds
console.log(Math.floor(Date.now()/1000));// now the time will be converted into seconds

let newdate = new Date("2004-06-30")
console.log(newdate.toString());
// we can use some methods which can tell us about the month year day or particular day
console.log(newdate.getMonth()+1);// if we not add +1 the OutPut will be 5 th month
//beacuse in js month sequence is started from 0


