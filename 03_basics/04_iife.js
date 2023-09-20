// Immediately Invoked Function Expressions (IIFE)
// Reasons to use iife are to not pollute from global variable and to immediately execute

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //code end(;) should be applied to prevent from context problem
// chai()

//()() //first parentheses is function defintion and second is execution call
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Xander')