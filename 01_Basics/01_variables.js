// variables in java scripts

// Note: by using  ! mark + boiler plate you can directly create an boiler plate of html code

// for storing numbers and constant in java script we use constant
const accountId = 1234
const phoneNumber=9917869118;

//let keyword in java script is used for storing strings
let accountEmail= "cholapuri@gmail.accountEmail";
let personalEmail="anaukarn@gmail.com";
let officeEmail="dit@gmail.com"

var accountPassword="2345"// We don't prefer to use var in JavaScript.
var pass="8965"
/*
It is preferred not to use var because of issues with block scope and functional scope.
*/

let accountState="Uttarakhand";//If we do not assign a value to it, it will display undefined in the console or table.
accountCity="Dehradun"
accountID =2// here we try to update account id but node js does'nt changed it
accountEmail="sonam@gamail.com"
accountPassword="3445"
accountCity3="udaipur"
console.log(accountId);
//console.tables is used to print all the information at a single time we don't have to print the the information one by one
console.table([accountId,,accountEmail,accountCity3,accountPassword,accountCity,accountState])

// if an variable has a fixed value we will use const variable
const studentId=897075;
// if want to declare a variable who's value can be changed use let keyword
let  studentAdress="Dehradun";

// var are not preferred use most of the time in java script as it  because of issues with block scope and functional scope.
var name="gautam";

// table in java script is used to print information at once so that we don't have tp print data one by one
console.table([studentId,studentAdress,name]);

