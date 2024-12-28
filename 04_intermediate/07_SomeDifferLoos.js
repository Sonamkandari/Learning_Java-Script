/*
for in loop 
for each loop
for of loop
*/

//for of loop

const arr =[1,2,3,4,5,6]
// for (const element of object) {
    
// }
// which ever data type is iterator on those we can apply for of loop    
// such as in arrays, strings, objects

for(const num of arr){
    console.log(num);
    
}

const greatings ="hello world"// applying on a string
for(const greet of greatings){
    console.log(`each chARACTER IS ${greet}`); //iterating each character of the string and pring the 
    
}
// creatin a map 
const map =new Map()
map.set(`IN`,"India")
map.set(`USA`,"United State of America")
map.set(`FR`,"France")
map.set(`AUS`,"Australia")

console.log(map);

//applying a loop on the above map
//using a for off loop

/*for(const key of map){
    console.log(key);// shen we use this print statement it will print the whole aray with brackets
    // but we needd only keys and values so we will use a short cut
    
}*/

// destructuring the array
for (const [key, value] of map){
    console.log(key,':-',value);
}

//if we creat an object can we use for of loop for that object
//
const myObject ={
    'game1':'NFS',
    'game2':'FootBall',
    'game3':'Cricket',
    'game4':'Hockey',

}
// using for in loops for objects

//if an boject is already declared we cannot declared it again
const myLanguages ={
    js:`javascript`,
    cpp:`cpp`,
    rb:"rubby",

    }

for(const key in myLanguages){
    console.log(key);
}//it will print all the keys
// if we want objects with keys

//printing keys and values using for in loops for objects
for(const key in myLanguages){
    console.log(myLanguages[key]);
}

//can we use for in loops for arrays also 

const programming =["Doremon","Nobita","Superman","Spider man"]
for(const key in programming){
    //console.log(key);// right now this is printing only keys of  a array 
    console.log(programming[key]);// this print  statement is printing the keys and value of the array
}

// lets check can we use a for in loop for an map  or not

const map2 =new Map()
map.set(`HR`,"Haridawar")
map.set(`UTt`,"Uttarakhand")
map.set(`FRI`,"Fridabad")
map.set(`ADP`,"Aandhra Pradesh")

console.log(map2);

