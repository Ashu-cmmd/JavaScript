
const user={
    username : "hitesh",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`); // "this" : keyword refer to the current context

        console.log(this);
        
    }

}

//  (this keyword is only used in object not in function)


// user.welcomeMessage()
// user.username = "sam" // here we change the context ; to :"sam"
// user.welcomeMessage()

// console.log(this);  // on the global context: "this" is empty ,so return a empty object 
// Browser ka Global Object : is Window Object


// function chai(){
//     let username = "hitesh" 
//     console.log(this.username);   // this keyword only work on Object not on function
    
// }

// chai()


// const chai = function (){   // Expression function
//     let username ="hitesh"
//     console.log(this);   // just "colsole.log(this)" : here it will show so many things like fetch crypto and more....
    
// }

const chai =  () => {  // arrow function
    let username ="hitesh"
    console.log(this);  // "console.log(this)" : here it will not show any thing just the empty Object : {}
    
}

// chai()

// const addTwo =(num1 , num2) => {
//     return num1+num2
// }
// const addTwo =(num1 , num2) =>   num1+num2 // Implicit arrow  retuen function : where no need of "return" and bracket "{ } " 

// const addTwo =(num1 , num2) =>   (num1+num2 )  // Implicit arrow retuen function  If you write in {} bracket then you need to write return ; if you write in () bracket then you don't need to write in return 

const addTwo = (num1 , num2) => ({ username  : "hitesh"})

console.log(addTwo(4,3));


// const myarray =[1,2,3,4,5]

// myarray.forEach(() =>)

