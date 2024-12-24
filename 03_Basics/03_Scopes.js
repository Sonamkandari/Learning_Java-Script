// scopes
/*availability of an variable */

if(true){
    let a=10
    const b=20
    var c =299
}

//now if  we try to print above variables
//console.log(a);//gave error becuse it is locally declare we can not use that variable out side the block

//similarly
//console.log(b);//not print value of b

console.log(c);//but in case of var ** it is printing the value of c 

//there fore **var is mostly avoided to use

//global scope and local scope or block scope


