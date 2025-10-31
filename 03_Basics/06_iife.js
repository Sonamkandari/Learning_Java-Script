/* IIFE -> IT IS STANDS FOR *** Immediately Invoked Function Expressions[IIFE]  ** Im*/
// Immediately Invoke function Expression [IIFE]
/*function subject(){
    console.log(`DB CONNECTED`);
}
subject()*/

//how we aply iife -> kept  the fuction inside the parenthesis

//due to global scope pollution we have to Phase some issues so for REMOVING that polution we use IIFE
//named iffi
(function subject(){
    console.log(`DB CONNECTED`);
}());//semicolon is required here

//another
((Cname)=>{
    console.log(`DB CONNECTED  ${Cname}` );
})('sonam');