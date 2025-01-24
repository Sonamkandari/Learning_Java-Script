//ES 6

// constructor Based Syntax
class User{
    constructor(usernmae,password,email){
        this.usernmae=usernmae;
        this.email=email;
        this.password=password;
    }

    // creating a method for encrypting a message
    encryptPassword(){
        return `${this.password}y3ihriuhiuh`
    }

    changeUsername(){
        return`${this.usernmae.toUpperCase()}`

    }

} 

const chai=new User("Doremon","Dora@gmail.com","234")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

