
const marvel_hero=["Thor","Ironman","sipderman"]
const dc_hero =["Superman","Flash","Batman"]

// marvel_hero.push(dc_hero) // Array within the Array in this condition
// console.log(marvel_hero [3][1]); // return the 2 elemnt from the within element .

const all_hero =marvel_hero.concat(dc_hero)  // merge the given arrays to make a new Array

// console.log(all_hero);

const all_new_hero = [...marvel_hero,...dc_hero,...all_hero]

console.log(all_new_hero);

const another_arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_arr);


const real_another_arr= another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("Ashu")); //Array.isArray(?) : check if it is a Array .

console.log(Array.from("Ashu")); //Array.from(?) : convert it into Array
console.log(Array.from({name:"Ashu"})); // Can't Convert it into Array , as we need to set  a which part we need to convert it into Array (Key or Value)


let score1 =100
let score2 = 200
let score3=300

console.log(Array.of(score1,score2,score3)); //Array.of(?) : Create a new Array with the given elements.

