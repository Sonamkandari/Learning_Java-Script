// declare an object
//const vscodeUser ={} //this is one a way of declaring an object
const vscodeUser = new Object()
vscodeUser.id="10008929"
vscodeUser.name="Dora"
vscodeUser.isLoggedIn=false


// creating a function
const placementPrep=new Object()
placementPrep.id="123";
placementPrep.name="Dora";
placementPrep.city="Dehradun";

console.log(placementPrep);


// creating an another object in javaScript
const studentRequirements=new Object()
studentRequirements.id="hello";
studentRequirements.name="Sonam";
studentRequirements.city="Noida";
console.log(studentRequirements);



//console.log(vscodeUser); //this print statement will print all the elements of the object

//Declaring an another object using second way of declaring a method
const regularUser= {
   email:"sk@gamil.com",
   //this will be a object inside a object
   fullname:{
     firstname:"sonam",
     lastname:"kandari"

   }
}
console.log(regularUser.fullname)

// Another way of creating an object 

const friendsGroup=[{
    name:"Rishita Rawat",
    number:23456,
    Address:"Dehradun",
    HouseNumber:123

},
    {
     name:"Shubham",
     number:1234,
     Address:"Ladpur",
     HouseNumber:345
    }
]
console.log(friendsGroup);



// merging two or more objects together

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3={obj1,obj2} //important

//const obj3=Object.assign({},obj1,obj2)

//best way for combinnig

const obj3 ={...obj1,...obj2}
console.log(obj3)

const users =[
    {
        id:1,
        age:23,
        email:"sk@gmail.com1"
    },
    //comma separated values
    {
        id:1,
        age:23,
        email:"sk@gmail.com"
    }
]
users[1].email
console.log(vscodeUser);
console.log(Object.keys(vscodeUser));//this will generate all the keys and put it into a array 
