const myObject ={
    js : 'Javascript',
    cpp :"c++",
    rb:"ruby",
    swift:"Swift by apple"
}

for (const key in myObject) {  
    //console.log(key)   // It will print only the key from the Object
    
}


for (const key in myObject) {  // It will give both key and Value of the object ..
    //console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ['js',"rb","py","java",'cpp']

for (const key in programming) {   //
    // console.log(programming[key]);  
    // console.log(key) // Only print the key of the Array ... which is 0 1 2 3 4 5...
    
}

// const map = new Map()   // map can not be iterator 
// map.set('IN','India')
// map.set('USA','United States Of America')
// map.set('FR','France')
// map.set('IN','India')

// // So froin is not possiable but forof is possiable
// for (const key in map) {
//    console.log(key);
// }
