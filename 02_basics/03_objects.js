// SingleTon : the only object of its kind made from a constructor
//If Object made from Literal : No Singleton & If from Constructor Single will be made
//object literals
//Object.create to make an object (constructor)

const mySym = Symbol("key1")

const JsUser = {
    name: "Xander",
    "full name": "Xander Viskoii",
    age: 21,
    location: "Voluntrica",
    email: "Xander@perfoison.fr",
    isLoggedIn: false,
    lastLoginSitu : ["Mink", "Lisy"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.["full name"]);
console.log(JsUser);
