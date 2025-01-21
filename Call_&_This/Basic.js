// over lab abstraction

function SetUsername(username){
    //complex calculations,complex database calls
    this.username=username;
    console.log("called");
    
}

function createUser(email,username,password){

   // for username lets call the above function which is used to set the user nam we don't have to do it by our own
   // this will gave the current context of the user name // it passes the context 
    SetUsername.call(this,username) //.call// it is used for holding the reference
   // this.username=username  ->we are outsourcing this method but currently unable to call it
    this.email=email;
    this.password=password;


}

const subjects=new createUser("sonam@gamil.com","sonam ","467")
console.log(subjects);
