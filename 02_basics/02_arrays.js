const month_name =["January","February","March","April","May","June","july","August"];
// console.log(month_name);
const Days_name = ["sunday","Monday","Tuesday","Thursday","Friday","Saturday","Sunday"];
// console.log(Days_name);

const school_name=["Sonam","Rahul"];
const class_teachers=["Kirti gupta, rohan"];
school_name.push(class_teachers);
console.log(school_name);

console.log(Array.isArray(school_name)); // this use to check whether the give data structure is array or not
console.log(Array.isArray("Rishita"));
//if we directly push Days name in the months name lets see what will happen
        //  month_name.push(Days_name)
        //  console.log(month_name) 
/*output generated here is both the arrays are combined together
 -> the days_name array comes under the MONTH_NAME ARRAY */

 //concatenation method
        // const all_months_days= month_name.concat(Days_name);// concatination metho is also used to combine  two or more arays and returns a new array
        // console.log(all_months_days);//returned a new array


 // spread operator 

 const all_new_months =[...Days_name,...month_name]
 console.log(all_new_months)//it will spread  out all the elements


 const myn3= [11,12,13,14,15,16,[1,2,3],78,56,54,[3,4,5,[3,0,29]]];
 //flat IS USED Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 const real_another_array=myn3.flat(Infinity);
 console.log(real_another_array);


 const myarr4=[23,45,56,[45,67],57[34,56,[12,34],87]];
 const real_another_array1=myarr4.flat(Infinity);
 console.log(real_another_array1)

 // operations

 //isArray
 console.log(Array.isArray("sonam"));// it will return false
 
 // if we want to convert the name in a array
  //From
 console.log(Array.from("sonam"));// output is ['s','o','n','a','m']


 //OF
 let marks1 =56;
 let marks2 =96;
 let marks3 =76;

 console.log(Array.of(marks1,marks2,marks3))
 //the output we get here is a -> a combined array of all the marks

 let hindi=45;
 let english=55;
 let maths=90;

 console.log(Array.of(hindi,english,maths));
