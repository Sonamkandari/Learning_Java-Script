
//creating a promise here and holding the promise in a variable
// why we are using this resolve and reject
const  promiseOne = new Promise(function(resolve, reject){
    // Do and async task
    // DB calls ,Cryptography, networks
    setTimeout(function(){
        console.log('Async task is complete');
        //calling a resolve method
        resolve()// now the method is get connected with .than
        
    },1000)
})

//After creating  a promise we are consuming a promise
// resolve has a connect with .than
promiseOne.then(function(){// this is a call back function
    console.log("Promise consumed");
    
})

// creating a an other promise
// but this time we will n ot hold that promise in a variable because it is not necessary to hold a promise in a variable

new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Task two is completed");
     resolve()
   },1000)
    
//consumption    
}).then(function () {
  console.log("Async 2 resolved");
})

// Creating a another  promise

const promiseThree =new  Promise(function(resolve,reject){
    setTimeout(function(){

        // we can pass values in the resolve function
        // that data can be array ,function ...
        resolve({username:"Sonam",emal:"sonam@gmail.com"})

    },1000)
})

//we will passing parameters inside the resolve and getting those parameters here
promiseThree.then(function (user) {
    //how we are consuming the above data
    console.log(user);
    
})

// creating Another promise 

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error =true
       if(!error){
        resolve({username:"sonam",password:"123"})
       }else{
        reject('ERROR: Somthing went wrong')
       }
        
    },1000)
})

// call back 
//CONSUMING a Promise
 promiseFour.then((user)=>{ 
    console.log(user);
    return user.username 
}).then((username)=>{
    //chaining
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})



const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:" Doraemon",password:"123"})
    }else{
        reject('EROOR: Doraemon is unable to gave gadgets')
    }
  },1000)  
});
// we can consume a promise by async 
async function consumePromiseFive(){// promise is a object

  try{  // using a try and catch block for handling an error, in case  we are getting an error
    const response=await promiseFive// we can not handle an object simply so will will handle the promise  in a response
    console.log(response);
  }catch(error){
     console.log(error);
     
  } 

}
consumePromiseFive();
  
    





