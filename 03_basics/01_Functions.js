
function saymyName() {
    console.log("X");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("e");
    console.log("r");
} 

//saymyName()

// function addTwoNumbers(n1,n2){ //n1,n2 are parameters
//      n1 + n2
//     console.log(n1 + n2);
// }
function addTwoNumbers(n1,n2){ //n1,n2 are parameters
    // let result = n1 + n2
    // return result
    return n1 + n2 
}
//Once return is used, function will do nothing

const result = addTwoNumbers(3, 6) //3,6 are arguments
//To store in a variable u shld reutrn (while worling in function otherwise it will be undefined)


// console.log("Result: ", result);


function LoginUserMessage(username = "Sam"){  //Sam is by default value
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(LoginUserMessage("Xander"))
//console.log(LoginUserMessage())

function calculateCartPrice(val1, val2, ...num1){ //rest or spread operator depends on which use case is that //Val1, Val2 are returning since functions returns only num1
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000, 50000)); //Val1, Val2 are not returning since functions returns only num1. 200, 400 are val1 & val2 while others in num1
const user = {
    username: "Xander",
    prices: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username : "samuel",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 400, 60000, 500]));
