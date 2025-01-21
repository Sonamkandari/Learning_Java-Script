//Object literal
//it means creating an object

const user ={//base unit // object literal
    username:"Sonam",
    LoginCount:5,
    signedIn:true,


getUserDetails:function(){
        //console.log("Got user details from database");
        //console.log(`usernam: ${this.username}`);
        console.log(this);
        
        
    }

}
console.log(user.username,user.LoginCount,user.signedIn);
//console,console.log(user.getUserDetails);

// for node environment
//console.log(this);//at this time in the global context there is nothing global context is empty

// but in case of browser when we will run this query we will get a lot of elements inside the curly brackets



// constructor Function

function user(username,LoginCount,isLogged){
    this.username=username;
    this.LoginCount=LoginCount;
    this.isLogged=isLogged;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userOne =new user("sonam",12,true)
const userTwo =new user("Doremon ki duniya",14,false)
console.log(userOne);
console.log(userTwo);

