//Basic syntax of swiitch case 
// switch(key){
//     case value:
//         break;
//         default:
//             break;
// }
const month =3

switch (/*key*/month) {//key is that value which shoulld be i check every time
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
        console.log("March");//by default what happend if key mathes still the remaining code will be executed
        break;//break is used to break the control flow
        //we use break so that the code will executed util the key is not met

    case "Friday":
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}