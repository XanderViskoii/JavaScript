// const tinderUser = new Object() //Singleton object
const tinderUser = {} //Non Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser); 

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullName : {
            FirstName : "Xander",
            LastName : "Viskoii"
        }
    }
}
//console.log(regularUser.fullname?.userfullName.FirstName); //? means if it is available i.e. existing then do this

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4) //Empty parentheses : Optional parameter

const obj3 = {...obj1,...obj2,...obj4}

//console.log(obj3);


//When objects come from database it is array of objects
const users = [
    {
        id : 1,
        email: "x@mail.kagg"
    },
    {
        id : 1,
        email: "x@mail.kagg"
    },
    {
        id : 1,
        email: "x@mail.kagg"
    }
]

users[1].email //Accesing 1 element of array which is object later (.) for accesing object 
/*console.log(tinderUser);

console.log(Object.keys(tinderUser)); //Datatype is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin')); */


//++++++++++++++++++Destructuring+++++++++

const course = {
    coursename: "JS in hindi",
    price : "999",
    courseInstructor: "Xander"
}
//course.courseInstructor // If we have to use these values repeatedly then we can use another way to keep clean code

const {courseInstructor: Instructor} = course

//Now to access courseInstructors we can write:
console.log(Instructor);

//+++++++++++++++++++APIs Intro+++++++++++

// {
//     "name": "Xander",
//     "coursename": "js in hindi"
//     "price": "free"
// }  //JSON even keys are string as above also similar to object but 
//APIs in form of arrays consisting object
[
    {},
    {} ,
    {}
]