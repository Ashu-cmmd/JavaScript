let score="33" // String type 

console.log(typeof score); // return the  type of variable 
console.log(typeof(score));// return the type of variable 

let valueInNumber = Number(score);// convert the String type to number type.  

console.log(typeof valueInNumber);// return the type of variable.
/*
  "33ab"is not a real number type but it can also convert to nnuber type in JS 
*/

console.log(valueInNumber); /* here the output is NaN beacuse the "33abc" is not a real number type
      but "33" give the output 33 type number as it is a real number type.
*/


// "33"=> 33
//"33abc" => NaN
// true => 1; False => 0

let isLoggedIn = "ashu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0=> False
//"" => false
//"ashu"=> true

let somrNumber = 33

let StringNumber= String(somrNumber)
console.log(typeof StringNumber);
console.log(StringNumber);

//******************************************* oprations**********************************/
let value =3
let negValue = -value
console.log(negValue)
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);




// let srt1 ="hello"
// let srt = " ashu"
// let str3= srt1+srt
// console.log(str3);
// console.log("1"+2);
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
/*when String is added with String its concartinate and convert its type to String type.
And when Srting is added with number its concartinated and its datatype convert into String datatype.
and when Number is added with String ita also concartinated and its datatype convert into String datatype,
but when Number is added with number its just added normally but after is its is added with String it just concartinate. */

//console.log(+"");// =>0
let num1,num2,num3
num1=num2=num3=4

let gameCounter = 100
++gameCounter
console.log(gameCounter);