// declare an object
//const vscodeUser ={} //this is one a way of declaring an object
const vscodeUser = new Object()
vscodeUser.id="10008929"
vscodeUser.name="Dora"
vscodeUser.isLoggedIn=false

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
