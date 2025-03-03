// arrays

const myArr=[0,1,2,3,4,5]
// shallow copy : Share Same referancd point (changes made in the copied array ,shows in the main array)
// Deep Copy : Don't Share the The Same reference Point (Changes in the Copied Array, doesn't Shows in the Main array)
 const myhero=["ironman","spiderman"]
 const myArr2= new Array(1,2,3,4)
//  console.log(myArr2[2]);

 
// Array Methods

// myArr.push(6) // push() Insert in the given Array..
// myArr.push(7)
// myArr.pop() // pop() remove the Last element From the given array 
// myArr.unshift(9) // unshift() Append a element in the 0th Position of the Given Array
// myArr.shift()//  shift()  revome the First element(0th element ) in the Given Array 
// myArr.shift()
// console.log(myArr.includes(9)); // includes() : Give a boolean Value for the asked element .
// console.log(myArr.indexOf(9)); // indexOf()  : Return the index Value of The Asked element if present ,else Return -1
// console.log("Index of "+4+" is :"+myArr.indexOf(4));

// const newArr = myArr.join() // join() : Convert the Array element into String with comma saparated


// console.log(myArr);
// console.log(typeof newArr);


// slice , splice

console.log("A",myArr);

const myn1=myArr.slice(1,3) // .slice() : return the element from index (Start) to [End -1] range And also doesn't manipuate the Orginal Array.

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3) //.splice(): return the element from [Start] and [End] And FUlly manipulate the Orginal Array by removing the given range in the splice method.
console.log("C",myArr);
console.log(myn2);



