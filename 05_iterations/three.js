// for of 

// ["","",""]
// [{},{},{}]

// const arr= [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);   
// }

// const greeting = "hello world!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('FR','France')
map.set('IN','India')

// console.log(map);

for (const [key,Value] of map) {
    console.log(key,':-',Value);
    
}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,Value] of myObject) {
    console.log(key,':-',Value)
}
