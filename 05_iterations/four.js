const myObject ={
    js : 'Javascript',
    cpp :"c++",
    swift:"Swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ['js',"rb","py","java",'cpp']

for (const key in programming) {
    // console.log(programming[key]);
    
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
