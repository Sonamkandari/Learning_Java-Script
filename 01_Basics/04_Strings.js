const name = "Sonam"
const surname ="kandari"
console.log(surname[0]);// it is also working
console.log(surname.length);
 //sum = name+surname
 console.log(name+surname);//String Concatination// it is outdated method
 //console.log(sum);

 //string interfication
 console.log('hello my name is ${name} and my surname is ${Kandari}');
 const gameName = new String('SonamKandari');
 console.log(gameName[0]);
 // we can calculate total length of the string
 console.log(gameName.length);
 // we can  also convert it into lower case and upper  case
 console.log(gameName.toUpperCase);//SONAM KANDARI
 console.log(gameName.charAt(3));

 //slice (reverse)
 /* we can use  negative values
 but here whwn i am trting with negative values not working s*/

const astring = gameName.slice(1,4)
console.log(astring);

//trim and replace method

const UTrim = "    Doremon    "
console.log(UTrim);// out put with spaces 
//trim is used here to remove the extra spaces
console.log(UTrim.trim());// out put without spaces

//(trim start) and (trim end) Methods
//but we use trim only because it can do work of both

const link ="https.sonam.com"
console.log(link);
// replace
console.log(link.replace('sonam','kandari'))
// we can aske questions also like (includes or not)

console.log(link.includes('kandari'))// out put is false

// split method(mdn ** for reading the documentation)






 