const accountId = 1234
let accountEmail= "cholapuri@gmail.accountEmail"
var accountPassword="2345"// we dont use var now generally in js
let accountState;//if we not gave value to it it will print in the table undefined
/*
prefered not to use var
because of issue in block scope and fuctional scope
*/
accountCity="Dehradun"
 
accountID =2// here we try to update account id but node js doesnt changed it
accountEmail="sonam@gamail.com"
accountPassword="3445"
accountCity="udaipur"
console.log(accountId);
//console.tables is used to print all the infortion at a single time we don't have to print the the information one by one
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])