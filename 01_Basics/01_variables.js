const accountId = 1234
let accountEmail= "cholapuri@gmail.accountEmail"
var accountPassword="2345"// We don't prefer to use var in JavaScript.
let accountState;//If we do not assign a value to it, it will display undefined in the console or table.
/*
It is preferred not to use var because of issues with block scope and functional scope.
*/
accountCity="Dehradun"
 
accountID =2// here we try to update account id but node js doesnt changed it
accountEmail="sonam@gamail.com"
accountPassword="3445"
accountCity="udaipur"
console.log(accountId);
//console.tables is used to print all the infortion at a single time we don't have to print the the information one by one
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])