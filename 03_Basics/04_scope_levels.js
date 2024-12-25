//scope levels and mini hoisting in java script

/*DOM ->Document object model*/


function one(){
    const username = "sonam"
    //creating a function inside a function
    function two(){
        const website ="github"
        //we will try to access the outer function while we are in the insider fucntion
        console.log(username);
         
    }
    // console.log(website); ***** can not access elements out side the block
    two() //user name will be executed here
    
}
//it will  execute since it work as global scope if we will not execute one then two will not be executed
one()

if(true){
    const username = "sonam"
    if(username=="sonam"){
        const website ="Github"
        console.log(username + website);
        
    }
    //console.log(website); we can not access it because its scope is  inside the block, outside the block we cannot access it
}
//console.log(username);//again we cannot access it



//+++++++++++++++++++++++++ interesting ++++++++++++++++++
console.log(addOne(5));// this will not gave any error output will be 6
function addOne (number){
    return number+1
}
console.log(addOne(5));

//console.log(addTwo(5)); //this will gave an error because we cannot access a variable before initializing
const addTwo = function (number){
    return number+2
}
console.log(addTwo(5));