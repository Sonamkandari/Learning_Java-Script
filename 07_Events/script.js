//this approach has some issues
// this approach provides less approaches
// document.getElementById('Birthyday').onclick=function(){
//     alert("Birthday is clicked");
// }

//click event
// document.getElementById('Friends').addEventListener('click',function(){
//     alert("Party Time")
// })

//another method is attachEvent
// this method is used when there is alot of need of internal explorar

// jQuery -- it is a framework of js in earlier time similar as react which is one a popular framework 

//type,timestamp,defaultPrevented,current target
//source element
//clientX, clientY,  Screenx, screeny
//altley, ctlrkey.shiftkey,keycode

document.getElementById('Friends').addEventListener('click',function(e){
    console.log(e);
    /*False can be default hare */
},false);

//Event propogation
//event Bubbling -->false
//event capturing -->true


// document.getElementById('images').addEventListener('click',function(e){
//     console.log("clicked inside the ul");
//     /*False can be default hare */
// },false);

// //this will print a message whenever we click any of the images inside the images id


// document.getElementById('GroupPhoto').addEventListener('click',function(e){
//     console.log("Group photo is clicked");
//     /*False can be default hare */
// },false);
// this will print a message when we specifically on the particular photo
// note ** since there is already a event is applied out side this box so according to the practical scenario it should print to measseges when we clicking on the particular image

// outPut we are getting
// Group photo is clicked 
//clicked inside the ul

// this above event is working on the processes of Bubbling up



// document.getElementById('images').addEventListener('click',function(e){
//     console.log("click inside the ul");
//     /*False can be default hare */
// },true);

// //this will print a message whenever we click any of the images inside the images id


// document.getElementById('GroupPhoto').addEventListener('click',function(e){
//     console.log("Group photo is clicked");
//     /*False can be default hare */

//    // e.stopPropagation() -> Avoid Unintended Behavior:Nested UI Components:,Prevent Duplicate Actions:
// },true);


 //now  we are using capturing mode
//** top to buttom approach */

/*OUTPUT-->
 click inside the ul
Group photo is clicked */

 
/*how to make an image disappear when you click on it using JavaScript:*/

//** evet */
document.querySelector('#images').addEventListener('click',function(e){
console.log(e.target.tagName);// becuase we want to delete whole li for removing the images
// how we will remove it

//check point
if(e.target.tagName==='IMG'){
    console.log(e.target.id);
    
    let removeIt=e.target.parentNode
removeIt.remove();
}
},false)




 











