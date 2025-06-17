const myNumbers = [1,2,3,4,5,6,7,8,9,10] 

// const newnums = myNumbers.map( (num) => { return num + 10})   // when you open a scope we need to write return

const newnums = myNumbers   // chaning method  (.map() will print all the number like foreach() )
        .map( (num ) => num * 10 ) // 1st it will execude this map function (* 10 to each number) then it will go next function 
        .map( (num) => num + 1) // after the execution of the 1st map function (multiply 10 )  , this function will add 1 to each number
        .filter( (num) => num  >= 30) // filter is all about true and false 
console.log(newnums);



