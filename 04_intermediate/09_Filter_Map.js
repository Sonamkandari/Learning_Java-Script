const Cartoons =["Doremon","Ninja Hatori","Chota bheem","Motu_patlu"]
// can  another variable  hold the value
const values = Cartoons.forEach((item) => {
    console.log(item);
})
console.log(values);


//using filter method in javaScript
//filter() does not mutate the original array.
/*It always returns a new array, even if no elements 
meet the condition (in which case it returns an empty array).*/

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>num>4)// filter returns you values back// filter also takes an call back inside itself
console.log(newNums);// Output: [ 5, 6, 7, 8, 9, 10]


const numbers =[1,2,3,4,5,6,7,8,9,10]
const empty = numbers.filter(num => num > 10);
console.log(empty); // Output: []


//If you need to stop the loop early, use a different method, as filter() processes all elements.

const Nums =[]
numbers.forEach((num)=>{
    if(num>4){
        Nums.push(num)
    }
})
console.log(Nums) 

//create a book aray and some objects inside the books
const books =[
    
    //creating objects of the books 

    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Fiction',publish:1931,edition:2005},
    {title:'Book Three',genre:'Non-Fiction',publish:1941,edition:2064},
    {title:'Book Four',genre:'Fiction',publish:1991,edition:2007},
    {title:'Book Five',genre:'Non-Fiction',publish:1931,edition:2008},
    {title:'Book Six',genre:'Non-Fiction',publish:1901,edition:2009},
    {title:'Book Seven',genre:'science',publish:1921,edition:2020},
    {title:'Book Eight',genre:'Non-Fiction',publish:1951,edition:2021},
    {title:'Book Nine',genre:'History',publish:1931,edition:2022},
    {title:'Book Ten',genre:'Fiction',publish:1911,edition:2023},
    {title:'Book Eleven',genre:'Non-Fiction',publish:1931,edition:2024},
    {title:'Book Twelve',genre:'History',publish:1931,edition:2025},
];
// apply a filter and find out 
const userbooks = books.filter((bk)=>bk.genre==='Fiction')
console.log(userbooks);

//again apply a filter and find out those books which get published in 2005
let mybook = books.filter((BK)=>BK.publish===1931)
console.log(mybook);
mybook = books.filter((BK)=>{
    return BK.publish>=2000 && BK.genre==="Fiction"
})//here we opened a scope
console.log(mybook);

//using map()

const myNumbers = [1,2,3,4,5,6,7,8,9]
//using call back function
//adding  10 to the each of the above given number
//const store=myNumbers.map((Num)=>Num + 10) // not returning the array after adding the number 10  to each number
const store=myNumbers.map((Num)=>Num + 10)
console.log(store);
