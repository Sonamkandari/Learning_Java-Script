let age=22;
age=10;
age=85;

if(age>=20){
    console.log('yes,you can vote');
}else{
    console.log('No,you cant vote');
}



if(age<18){
    console.log('No he cannot vote he does not has a legal age');
    
}else if(age>80){
    console.log('yes you are eligible for pension')
}
else{
    console.log('he can vote he is above then the legal age')
}


const new_age=78;
// ternary operator
new_age>=18 ? console.log('yes'):console.log('No');



// switch cases

const option =2;
switch(option){
    case 1:{
        console.log('Namaste!')
         break;
    }
   
    case 2:{
        console.log('hello');
        break;
    }
    case 3:{
        console.log('Arigato');
        break;
    }
        
}