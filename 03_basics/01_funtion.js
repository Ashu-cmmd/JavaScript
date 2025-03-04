// Fnction

// function sayMyName() {
//     console.log("a")
//     console.log("s")
//     console.log("h")
//     console.log("u")
// }

// sayMyName // without () means its a referance only means it will not give any output
// sayMyName() // with () mean it will execute it will give output

// function addTwoNumbers(number1,number2){ // parameter 
//      console.log(number1 + number2 );
// }


function addTwoNumbers(number1,number2){ // parameter 
    let result = number1 + number2

    // console.log("Ashu"); // reachable code as it's before the return 
    // return result  // This (result) from the execution (result) we will learn it on the scope chapter.
    // console.log("Ashu"); // unreachable code as it's after the return 
    return number1 + number2 
    
}

// addTwoNumbers(3 , null) // it convert into Strings then concartinate it
const result = addTwoNumbers(4,4) // arguments  ===> Is (result) is Differnt from the Function (result) ; -> we will learn in the scope
// console.log("result : "+result);


function loginUserMessage(username = "sam"){
    if(username===undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())  // If we will not pass any value then it will retuen (Undefine)
// console.log(loginUserMessage("ashu"))  



function calcuateCartPrice ( val1,val2,...num1){ // (...) Rest oprater also Spread Oprater  
                          // val1 ,val2 stored the 1st two number and the other number is stored in ...num1 (because of [Rest Operator])
    return num1
}
// console.log(calcuateCartPrice(200,300,400,500)); 

const user ={
    username : "hitesh",
    prices: 199
}

function handleObject(anyobject){  // insted of User (Object) we write anyobject ( also a Object)
    console.log(`Usernmae is ${ anyobject.username} and price is ${anyobject.price}`)
                         // Stings Interpulation (`${ }`)
}

// handleObject(user) // call the Object 
handleObject({       // we can also pass an Object to call it
    username :"sam",   
    price:399
})

const myNewArray = [200,300,400,500]

function retuenSecondValue (getaArray){
    return getaArray
}

// console.log(retuenSecondValue(myNewArray));
console.log(retuenSecondValue([
    200,400,3002
]))


