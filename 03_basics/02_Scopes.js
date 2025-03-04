// Scpoes 

// var c=300
let a = 300

// If it "{}" comes alongs function and if-else Statement then it's called 'Scopes'

if (true) {   // it's block Scope : as it's in a block , which is not in the block is known as Global Scpoe
    let a = 10
    const b = 20
    // console.log("Inner : "+a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two (){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)  //  can't excess it as it's out of scope.

    two()
}


// one()
if (true) {
    const username = "hitesh"
    if (username=== "hitesh") {
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website) // out os it's scope ,so error 
   
}
// console.log(username)


// +++++++++++++++++++++++++++++++++++ INTERSTING ++++++++++++++++++++++++++

console.log(addone(5));


function addone(num){   // Normal function ; here if we call the function before decleartion there will be no error as it a normal functoin
    return num +1 
}


// addtwo(5)

const addtwo = function (num){  // Expression  ; but here If we call the function before it's decleartion there will be a error as it's wrriten in a variable (known as Hosting)
    return num +2
}

console.log(addtwo(5));

