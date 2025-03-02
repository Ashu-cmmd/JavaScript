// Dates 

let myDate=new Date();
// console.log(myDate); // date and time 
console.log(myDate.toString())
console.log(myDate.toLocaleString()); // date and time
console.log(myDate.toDateString()); // date only
console.log(typeof myDate); // object


let myCreateDate = new Date(2025,0,18) // (year month day)
// console.log(myCreateDate.toDateString()); // date only
// console.log(myCreateDate.toLocaleString()); // date and time



let myNewDatewithTime= new Date(2025,1,24,5,6,40)
// console.log(myNewDatewithTime.toLocaleString()); // date and time ToLocalString because it is a method of Date object and we have to show date as well as time so we use this method
// console.log(myNewDatewithTime.toString())

// let myNewDate=new Date("2025-01-29")// yyyy-mm-dd (can also use mm dd yyyy ) Format  Here  months start from 01 to 12 but in other formates it starts from 0 to 11 (array formate)
// console.log(myNewDate.toLocaleString());

let myTimeSatmp = Date.now();

// console.log(myTimeSatmp); // it will give the time in milliseconds from 1970 to till now

// console.log(myCreateDate.getTime()); // it will give the time in milliseconds from 1970 to Date decleared in myCreateDate

// console.log(Math.floor(Date.now()/1000)) // it will give the time in seconds from 1970 to till now 


// console.log(myCreateDate.getFullYear()); // it will give the year of the date
// console.log(myCreateDate.getMonth() +1); // it will give the month of the date sating from 0 to 11 (array formate) , +1 to not get confused by the month
// console.log(myCreateDate.getDate()); // it will give the day of the date


// '${myCreateDate.getDate()}/${myCreateDate.getMonth() +1}/${myCreateDate.getFullYear()}' // it will give the date in the format of dd/mm/yyyy

let newDate = new Date();
console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZone: 'UTC' 
}))
