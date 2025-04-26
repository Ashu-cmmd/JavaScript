// for of 

// ["","",""]
// [{},{},{}]

const arr= [1,2,3,4,5]

for (const num of arr) {
    console.log(num);   
}

const greeting = "hello world!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()    // We can use forOf(Itrable) in Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('FR','France')
map.set('IN','India')

console.log(map);



for (const key of map) {   // It will print the Map in List form... because of only the key variable... 
    console.log(key);
}


for (const [key,Value] of map) {  // due to " [key , value] "  it will give the output in simple form not in List form..
    console.log(key,':-',Value);
    
}


// We can't  use forOf(Itrable) in Object 
const myObject ={   
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,Value] of myObject) {  
    console.log(key,':-',Value)
}
