
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
console.log(LoginUserMessage())
