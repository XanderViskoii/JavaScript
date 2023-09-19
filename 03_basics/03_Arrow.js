const user = {
    username: "Xander",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

} //This keyword for referring to current context

// user.welcomeMessage()
// user.username = "Samuel"
// user.welcomeMessage()

// console.log(this);

// function check(){
//     let username = "Xander"
//     console.log(this.username);
// }
// check()

//++++++++++++++Arrow Functions+++++++++++

// const check = function() {
//     let username = "Xander"
//     console.log(this.username);
// }

// check()

const check = ()  => { //Arrow Function just removing function keyword and apply a arrow 
    let username = "Xander"
    console.log(this);
}

// check()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //Implicit return
 //IF wrapped in curly braces we have to use return keyword but if wrapped in parantheses then no need

 const addTwo = (num1, num2) => ({username: "Xander"} )

console.log(addTwo(3,5));