// here we are using query selectorAll so that we can select all the buttons at a single time
const buttons =document.querySelectorAll(`.button`);
console.log(buttons);

//we selecting a particular element so we will gave name of  that particular  element 
const body=document.querySelector("Body")



// we can use loops for buttons also Or we can say we can apply loops on buttons also
// since we had node list not html collection so we are using ** forEach  LOOP HERE
//we can use arrow function and call back function also

/* call back function 
 this call back fuction is printing all the buttons  and we are gatting all the attributes of those buttons also*/
buttons.forEach(function(button){
    console.log(button);
  
    //applying a event listener here for performing some action
    
    button.addEventListener(`click`,function(e){

        // e is an mouse event so whenever we will click on a button it will perform a mouse event
        console.log(e);
        console.log(e.target);// this will tell you that from where a particular event is comming for example this is an MOUSE EVENT 
        
        //change the background color when we click a button

        // //switch case
        switch (e.target.id) {
            case 'grey':
                // here the color will change accordig to the id of the button
                body.style.backgroundColor = 'orange';
                break;
    
            case 'white':
                body.style.backgroundColor = 'black';
                break;
    
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
    
            case 'pink':
                body.style.backgroundColor = 'red';
                break;

            case 'purple':
                    body.style.backgroundColor ='yellow';
                    break;    
    
            default:
                console.log('No matching color found');
                break;
        }

    // using if else

    //  if(e.target.id==='grey'){
    //     body.style.backgroundColor='yellow';
    //  }

    //  if(e.target.id==='white'){
    //     body.style.backgroundColor=`black`;
    //  }

    //  if(e.target.id==='blue'){
    //     body.style.backgroundColor='orange';
    //  }

    //  if(e.target.id==='pink'){
    //     body.style.backgroundColor='green';
    //  }

    //  if(e.target.id==='purple'){
    //     body.style.backgroundColor='orange';
    //  }


    });
});



