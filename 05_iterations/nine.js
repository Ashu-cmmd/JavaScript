const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce( (acc,currval) => acc + currval ,0)

console.log(myTotal);


const shoppongCart =[
   {
     itemName : "js cousrse",
    price :2999
   },
   { 
    itemName : "py cousrse",
    price :999
   },
   { 
    itemName : "mobile dev cousrse",
    price :5999
   },
   { 
    itemName : "data science cousrse",
    price :12999
   }
]

const priceTopay =  shoppongCart.reduce((acc, item) => acc + item.price,0)

console.log(priceTopay);
