/* **n JavaScript, forEach is a method available on arrays that allows you to run a function
 on each element of the array, one by one. It's commonly used to loop through array elements. */
const coding =["C++","java","javaScript","HTML","CSS"]

coding.forEach(function (item){// sice it is a call back function so will not gave a name to the function
console.log(item);
})

//another variation for writting for each loop
// using arrow function

//here we are not gaving name to the function because it don't have to store 
coding.forEach((item)=>{
console.log(item);
})

/* Note: The forEach loop does not only have access to the items; it also has access to the (item, index, arr). */


//we can declare multiple objects inside a array
const Subjects=[
    //objects inside the array
    {
        subjectName:"computer network",
        PracticalLab:"yes"
    },
    {
        subjectName:"Operating System",
        PracticalLab:"yes"
    },
    {
        subjectName:"Data Structures And Algorithm",
        PracticalLab:"yes"
    }
]
//we hae access of items , index and values
Subjects.forEach((item)=>{
  console.log(item.subjectName); // taking access of objects which are inside a array
})

