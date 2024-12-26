//Basic syntax of swiitch case 
// switch(key){
//     case value:
//         break;
//         default:
//             break;
// }
const month =3

switch (/*key*/month) {//In JavaScript, a key in a switch statement refers to the value being compared against the case clauses within the switch block.
    case 1:
        console.log("January");
        break;

        case 2:
            console.log("february");
            break;
            
            case 3:
        console.log("March");//by default what happend if key mathes still the remaining code will be executed
        break;//break is used to break the control flow
        //we use break so that the code will executed util the key is not met

        case 4:
        console.log("April");
        break;


    default:
        console.log("default case match");
        break;
}

// similarly if the key value is a string
const Days = "tuesday"
switch (/*key*/Days) {//key is that value which shoulld be i check every time
    case "Monday":
        console.log("January");
        break;

    case "tuesday":
         console.log("Tuesday is found");
         break;
            
    case "Thrusday":
        console.log("March");/* By default, if the key matches, 
        the code for the matching case and all subsequent cases 
        will be executed unless a break statement is used.*/

        break;//break is used to break the control flow
        //We use the break statement to stop the execution. 
        //If the key matches the case, the code will execute 
        //up to that point and then stop.

    case "Friday":
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}