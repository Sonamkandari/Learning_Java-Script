// clock can be access by using this method
//document.getElementById('Clock')

//The document.getElementById("clock").textContent will update the time on the webpage inside the #clock element.
const clock=document.querySelector('#Clock')// also can be selected by using query selector method 

/*new Date:The Date object is used to work with dates and times. 
 ->Without any arguments, new Date creates a Date object with the current date and time based on the user's system clock and timezone.
*/

// we use a simple method
setInterval(function(){
    let date =new Date();
    //console.log(date.toLocaleDateString());

   // If you check the browser's console, you'll also see the date and time logged every second.

   // console.log(date.toLocaleTimeString());

   // The time will update dynamically every second on the webpage inside the #clock element.
   clock.innerHTML=date.toLocaleTimeString();

},1000)

