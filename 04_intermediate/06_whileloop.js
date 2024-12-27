//Structure of while loop
// while(condtion){

// }

//A while loop is like telling your computer: "Keep doing this task over and over as long as a condition is true." It checks the condition first before doing the task.

let i=0
while(i<=10){
    console.log(`value of index is ${i}`);
    i=i+2
}

// apply while loop for an array

let companiesArray =["dell","hp","TCS","Wipro","Infosys"]
let arr=0;
while(arr<companiesArray.length ){
    console.log(`value is ${companiesArray[arr]}`);
    arr=arr+1

}// note readiability  in a code is very important


//A do-while loop is like telling your computer: "Do this task at least once, and then keep doing it as long as the condition is true." It checks the condition after doing the task.
let score =11
do{//now atleast one time the code will run
    console.log(`score is ${score}`);// do while loop don't care about the condition in the first run
    score++
}while(score<=10)//if score is 11
// In a do-while loop, the code will execute at least once, whether the condition is true or not.
