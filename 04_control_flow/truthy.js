const UserEmail = []

if (UserEmail){
    console.log("Got User email");
}else{
    console.log("Don't have use");
}

// Flasy Values

// false , 0 , -0 , BigInt  0n , "" , null ,undefined ,NaN

// Truthy Values
// "0" , 'false' , " " , [] ,{}, function (){} 

// if (UserEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObject ={}
if (Object.keys(emptyObject).length=== 0) {
    console.log("Object is Empty"); 
}

// Nullish Coalescing Operator (??) : null undefine 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Terniary Operator 

// condition ? true : false 

const IceTeaPrice = 100 
IceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

