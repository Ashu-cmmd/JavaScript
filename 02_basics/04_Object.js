
// const tinderUser = new Object () // Singleton Object 

const tinderUser = {}  // Not a Singeton object 

tinderUser.id ="123abc"
tinderUser.name = "Sammy" 
tinderUser.isLoggedIn =false ;


// console.log(tinderUser);

const regularUser ={
    email : "some@email.com",
    fullname :{
        userFullName :{
            firstname:"ashu",
            lastname:"luha"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3= {obj1 ,obj2} // return the Object in Object  

// const obj3 = Object.assign({},obj1,obj2,obj4)  // {}: Target , after all are Source which goes into the target .

const obj3 = {...obj1,...obj2} // it also merge but 1st it spered it then it merge it
// console.log(obj3);

const user =[   // array of Object 
    {
        id:1,
        email: "h@gamil.com"
    },
    {

    },
    {

    }, {

    }, {

    }, {

    }, {

    },
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return data type is Array
console.log(Object.values(tinderUser)); // return data type is Array
console.log(Object.entries(tinderUser)); // return each key-value as Array in Array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// De-structure in Object

const course ={
    coursename :"Js in Hindi",
    price:"999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const{courseInstructor : Insturctor}=course // by using (:) after the key  we can give a different name and called it by this given name.

// console.log(courseInstructor);
console.log(Insturctor);


// const navbar = ({company}) => {

// }

// navbar (company = "hitesh")


// APIs :- To give the work to someone else , you don't take the tension 
// ==> API is nothing just How you write the value which come to by backend.
//==> Before the value come in XML structure (Format) which was very complex;
//==> Nowadays the value come in JASON structure (Format) is a not complex



// JASON FORMAT
// {
//    " name" :"hitesh",
//     "coursename" : "js in hindi" ,
//     "price":"free"
// }

[
    {},
    {},
    {}
]

