const Myfunction=setTimeout(function(){
    console.log("Sonam Kandari"); 
// giving a time of two second it will wait for two second to print the name which i have been given to it  and the name will be printed only once
})
//we type windows in the console in will gave all the function of set time out like its length,name, arguments, caller and prototype etc
setTimeout(Myfunction,2000)
// can we change h1 name directly

const changeText= setTimeout (function(){
document.querySelector('h1').innerHTML ="Dora Dora"
})


setTimeout(changeText,2000)

// we can use a function to stop a executing function by using clearTime out but we have to gave a reference to this function
//clearTimeout(changeText);

//but I want to use  this function  with an event
// i will  gave reference of the button to this function 

document.querrySelector('#Stop').addEventListener('click',function(){
    clearTimeout(changeText)
 console.log("stopped");
 
})// #stop is id of the button




