//Basics loops 
// we can not use const variable in case of for loop
for(let i=0;i<19;i++){
    console.log(i); 
}

// how to use while loop in java script
// let init=0;
// let final=10
// while(init!=final){
//     init=init+1;
//     console.log('time taken'+init);
// }
// in while loop first we check the condition and then we print the statement
// Means first it will check the condition and then it will execute the code


// But in Do while loop  before checking the condition once the statement is printed 
// where as in do while loop firstly one it execute the code then check the condition which means even if the condition is wrong the code will execute at least one time

let number3=40;
let guess=0;
// guess game
// do{
//     guess= parseInt(prompt("Guess a number"));
//     if(guess==number3){
        
//         alert("you are winner")
//         break
//     }
// }while(guess!=0)

while(guess!=1){
    guess=parseInt(prompt("guess the game"));
    if(guess==number){
        alert('winner')
        break;
    }
}