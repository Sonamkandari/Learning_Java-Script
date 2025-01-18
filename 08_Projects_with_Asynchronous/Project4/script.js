//generate  a random color
// we will generate a random color with the help of a random hex values
// hex code values started from 0 to 9 and A to F
const randomColor=function(){
    const hex='0123456789ABCDEF';
    // let is using here so thad we can change the color later
    let color='#'
    for(let i=0;i<6;i++){
       // color=color+1;
       color+=hex[Math.floor(Math.random()*16)];

    }
    return color;
}
// generating some random values

//Math.random(); -> this function is used to generate the random values 
//console.log(Math.floor(Math.random()*16));// we are using a floor function here so that we gat values with out decimal values 

//console.log(randomColor());

// method for changing the color

let intervalID;

const startChangingColor=function(){
    if(intervalID) return;// prevent multiple intervals

    intervalID=setInterval(function(){
    document.body.style.backgroundColor=randomColor();

    },1000);

 

    // if we use this method it will change the background color one by one not continuously
    // document.body.style.backgroundColor=randomColor
    
};

// method for stopChanging the color 
const stopChangingColor=function(){
    if (intervalID) {
        clearInterval(intervalID);
        intervalID = null; // Reset interval ID
    }
}


// now we need the reference of start and stop button
 document.querySelector('#startChange').addEventListener('click',startChangingColor)
 document.querySelector('#stopChange').addEventListener('click',stopChangingColor)



