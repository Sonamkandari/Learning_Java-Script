function add(a,b){
    return a+b;
}
let result=add(2,3);
console.log(result);

// high order function : A function that takes a function as an argument

// high order functions and Callback functions
function add(a,b,cb){
    let result=a+b;
    cb(result);
}

function showResult(result){
    console.log(result); 
}
add(2,4, showResult);


