// Immediately Invoked Function Expression (IIFE)


(function chai (){ 
    // Named IIFE with no parameter
    console.log(`DB CONNECTED`);  
})();
 // Function which is execute immediately and global scope ke polluction se problem hoti hai bahut bar kaibar to wo global scpoes ke variable ko hatane keliye humne IIFE ka use kiye

// An IIFE should always end with semicolon to execute the next IIFE function

//An IIFE function also allows arrow function
 ( (name) =>  {
    //Simple IIFE with Parameter
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`hitesh`)

