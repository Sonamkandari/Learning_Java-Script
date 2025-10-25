let score ="789"

console.log(typeof score);
console.log(typeof (score));
// type conversion
let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//out put is NaN //not a number

//if the value is null
let Score =null

console.log(typeof Score);

console.log(typeof (Score));
// type conversion
let InNumber =Number(Score)
console.log(typeof InNumber);
console.log(InNumber);//output is 0 (zero)

//"33"=>33 easily get converted
//if "33abc"=>NAN(not a number)
//true=>1; false=>0

//type  in boolean 
let isloggedin = 1 // we can check for "sonam" ,"null",or for empty space also
let booleanIsloggedIn =Boolean(isloggedin)
console.log(booleanIsloggedIn);

