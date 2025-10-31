//DESTRUCTURING OF OBJECT

const course = new Object()
course.Cousename = "js programming"
course.price="free"
course.courseInstructor="Hitesh sir"

console.log(course)

// //basic method(react)

// const navbar = ({company}) =>{

// }
// navbar(company = "sonam");

//we get APIs in the form of objects and some times in the form of array
//random user api me 
/*we get some random APIs to use ,we get some random responses to use */

//we also use formatters to understands these responses (APIs sample code) //click on format and beautify

//JSON [java script object Notation]


// how to do object destructuring

const person={
    name:'Pranjal',
    age:34,
    country:"Dehradun"

};


// instant of doing 

// const name=person.name;
// const age=person.age;
// const country=person.country;

const{name,age,country}=person;