const account_Id = 1445533;
let accountEmail = "ashutosh@google.com";// variable can be using the keyword 'let'.

var accountPassword = "1234"; // variable can be define by using the keyword 'var'.

accountCity = "Sambalpur"; // variable can be also use without 'var'OR 'let' ,but not to use them without 'var'OR'let'

let accountState;

console.table([account_Id,accountEmail,accountPassword,accountCity,accountState]);

//account_Id = 2 // not allow const cant change


/*
prefer not use var
brcause of the use of looop scope...
instead use -: let 
*/
account_Id = 44528746; // can't update the constant variable
accountEmail  = "asdjq@gamil.com";
accountCity = "bamra";
accountPassword = "84618376r";
console.log("after update");
/*
for single print statement use -: console.log();
For tabluar print statement use -: console.table([..,...,...]);
*/
console.table([account_Id,accountEmail,accountPassword,accountCity,accountState]);