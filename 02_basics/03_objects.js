// SingleTon : the only object of its kind made from a constructor
//If Object made from Literal : No Singleton & If from Constructor Single will be made
//object literals
//Object.create to make an object (constructor)

const mySym = Symbol("key1")
//In object we define keys and their value 
const JsUser = {
    name: "Xander",
    "full name": "Xander Viskoii",
    [mySym ] : "myKey1", //To refer mySym as a key of above symbol [] needs to be used otherwise it acts as string
    age: 21,
    location: "Voluntrica",
    email: "Xander@perfoison.fr",
    isLoggedIn: false,
    lastLoginSitu : ["Mink", "Lisy"]
}
//Ways of accessing objects
/*console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); 
console.log(typeof JsUser.mySym); */

JsUser.email = "Xander@openai"
//Object.freeze(JsUser)
JsUser.email = "furkosian@terms" //This value did not propogate bcs object was feezed
console.log(JsUser);

//Functions can be treated as variables
JsUser.greetings = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greetings());

