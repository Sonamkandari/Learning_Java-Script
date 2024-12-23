//singleton 

/* note in arrays we cannot define keys and values both we can define values only
but by using objects we can define key and value as well*/


//another method of creating a object is
Object.create// like this way ,this is also called the constructor method and within this a single turn is crated 


//Symbol data type
 //declaring a symbol

 const mysymbol = Symbol("key1")//now 
 /*take a symbol and add  it to the keys of the object and show it to by 
 printing*/


//object literals 

//here we are declaring a object
const Jsuser ={
    [mysymbol]:"mykey1",
    name:"sonam",
    "full name":"sonam kandari",
    age:21,
    email:"sonamkancdari@gmail.com",
    Adress:"Dehradun",
    Phone_Number:90735253
    
}

//one way of accessing the objects 
console.log(Jsuser.name,Jsuser.age,Jsuser.Adress,Jsuser.Phone_Number);

//Another way of accessing the objects
    /*NOTE->  "full name":"sonam kandari",
 this can not be accessed by previous method
 there fore we used another method */

 console.log(Jsuser["full name"])
 console.log(Jsuser[mysymbol])//syntex for aacesssing a symbol
console.log(typeof[mysymbol])

//making changes in the values of jsuser
Jsuser.email="cholapuri@gmail.com"
console.log(Jsuser.email);

// for locking up the values for particular key word so that others  people cannot change those value
//we can use a freez method egxample
 //Object.freeze(Jsuser)
  //now we can not make changes there ''if  try"
 Jsuser.email="kandari@gmail.com"
 console.log(Jsuser.email);//output the email will remain same --> the changes will not propogate

// creating a fuction

Jsuser.greeeting = function(){
    console.log("hello js user");
}

console.log(Jsuser.greeeting);// we run this ->OUTPUT [function (anonymous)]
console.log(Jsuser.greeeting());

//creating a another fuction'

Jsuser.greeetingtwo = function(){
    console.log('hello sonam, ${this.name}');//string interplation
}
console.log(Jsuser.greeeting());
console.log(Jsuser.greeetingtwo());




 
 
    

