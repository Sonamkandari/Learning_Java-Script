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
