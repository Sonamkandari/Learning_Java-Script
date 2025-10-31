//create a object for a user who is ragistering to my website

const owner ={
    ownername: "sonam",
    price:9999,

    //creating a function now
    welcomeMessage: function(){
        //this keyword is used here for current context
        /*FOR ACCESSING ALL THE VARIABLES INSIDE THE USER BLOCK WE USE THIS KEYWORD*/
        console.log(`${this.ownername},welome to my website`);
        console.log(this);//this keyword is used here for current context
        
    }
}
owner.welcomeMessage();//output is ** sonam,welome to my website
//IF we want to  change the user name
owner.ownername="Dora"
owner.welcomeMessage();
//output is ** Dora,welome to my website

console.log(this);//node environment //OUTPUT IS ->>Empty

//WE CAN USE THIS KEYWORD WITH OBJECTS IN JAVASCRIPT


//IN GENERAL WE CAN NOT O USE THIS KEYWORD WITH FUNCTIONS

function UsingKeyWord (){
    let username = "soni"
    console.log(this); // various values..
     console.log(this.username);// out put undefine
    
}
UsingKeyWord()

//Syntax of arrow function **most basic syntax
//***(),=>,{}
const addTwo = (num1,num2)=>{
    return num1+num2//explicitly using return keyword

}
console.log(addTwo(6,9));//output is 15

//Another way of creating arrow function is ** implicit return //not using return keyword
const addthree= (num3,num4)=>(num3+num4)//use full for react
console.log(addthree(6,9));


// creating an another arrow function

const sayHEllo=()=>{
 console.log("hello students how are you");

}
// calling the  arrow function which i had created
sayHEllo();


//how we accept arguments inside an arrow functions
const addition=(a,b)=>{
    return a+b;
}
const result=addition(999,800);
console.log(result);

// now can we insert unlimited elements in arrow function
//Note in arrow functions we can not use this object call argument
/*const letCheck=()=>{
    let result=0;
    for(let i=0;i<arguments.length;i++){
         result=result+arguments[i];
    }
    return result
    
}
const ans=letCheck(2,3,4,6);
console.log(ans);*/



// since we cannot use argument object in case of arrow functions so how we will take unlimited parameters in these functions
// so  we will spread operators

const letCheck=(...num)=>{
    let result=0;
    for(let i=0;i<num.length;i++){
         result=result+num[i];
    }
    return result
    
}
const ans=letCheck(2,3,4,6)
console.log(ans);

// this will work perfectly


// Hoisting in java script
// java script store a functions first in the memory and you can can it whenever you want

//example
sayHii();
function sayHii(){
    console.log("say Hii");
    
}

// Hoisting does not work for  arrow function
// this keyword : In case  of normal function  this keyword points the caller 
const obj={
    value:20,
   myFunction: function(){
    console.log("value is :" + this.value);
    
   }
};
obj.myFunction();
// But in case of  arrow function since we know that scope of arrow function is global
// in this case it started pointing window functions and global variable
// this keyword behave weirdly inside arrow functions
 


