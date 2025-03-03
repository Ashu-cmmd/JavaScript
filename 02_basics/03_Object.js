
// Singleton : when it's made from constructor , it one of a kind.
// Object.create //

// Object literals 

const mySym =Symbol("key1")

const JsUser ={
    name:"Ashu"  , // key:  By default make it / take it as String .
    "full name":"ashutosh luha",
    [mySym] :"mykey1", // [] : square bracket to specify it's a Symbol. 
    age:17,
    location:"bhubneswer",
    email:"luhashutosh@gamil.com",
    isLoginDay: false,
    LastLoginDays:["Monday" ,"Saturday"]

}
// console.log( JsUser.name); // one of the way but not the best way
// console.log( JsUser["email"]); // this is the best type 
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);
// console.log(typeof JsUser["mySym"]);


// TO change the value we need to just called it and change it using (=) sign 
 
// JsUser.email="ashutosh@chatgpt.com"
// console.log(JsUser["email"]);

// // To lock the value , so no one can change it use (.freeze)
// Object.freeze(JsUser)
// JsUser.email="ashutosh@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${ this.name}`); // String Interpolation {Change " " To -> ' ' } 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



