
const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val){  // as it is a callback function it doesn't required any "name"
//     /* Normal function declearation
//         function name () {
//         } 
//     */
//    console.log(val);
   
// } )

//Normal Arrow function 
/*
    const greet = () =>{
        }
*/

// coding.forEach( (item)=> {  //  using arrow function ....
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)  // just give the reference of the function don't call the function

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    
})