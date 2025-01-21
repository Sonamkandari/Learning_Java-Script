
// this is foe new keyword
//Behavior of java Script

//Prototypal  Inheritance

               /**function----->
                                \
                                 \
                                  \
                                   \
//in java script Array--------->Object---->Null   // prototypes of objects is null
                                   /
                                  /
                                 /
                                /                                                 
                  //String-----> */


 //Prototypal inheritance                 

function multipleBy5(num){// in java script function is also an object
    return num*5;

}  
multipleBy5.power = 2   
console.log(multipleBy5(5));// out put is 25
console.log(multipleBy5.power);// 2
console.log(multipleBy5.prototype);// can we access prototype // by default some context is set ,of the prototype thats why we are getting Empty parenthesis 


function createUser(username, Price){
    // creating to variables
   // username =username// confusion
     //therefore we use a this key word

     this.username=username// this keyword will help to differentiate between the both
     this.Price=Price;


}

     // injecting my own function
  createUser.prototype.increment=function(){
    this.Price++;// current context value will be increased
}


// injecting another method
createUser.prototype.printMe=function(){
    console.log(`Price is ${this.Price}`);// this.Price represents current context
    
}
//context// does not have context write now
// const chai=createUser("chai",300)
// const coco=createUser("coco",300)

// chai.printMe()//  output cannot read properties of undefine


// IMPORTANCE OF NEW KEYWORD

const chai=new createUser("chai",300)// new key word 
const coco=new createUser("coco",300)

chai.printMe()

/*

here' s what happens behind the scenes when  the new keyword is used:

A object is created: The new keyword initiate the creation of a new JavaScript object

A prototype is linked: The newly created object gets linked to the  prototype property
of the constructor function. this means that it has access to properties and methods 
defined on the constructors prototype

The constructor is called: the constructor function is called with the specified arguments
and this bound to the newly created object. if no explicit  value is specified from the constructor
,javascript assumes this , the newly created object ,to be the intended return value

The object is returned : After the constructor function has been called, if it doesn't return a non-primitive
value (object)

*/