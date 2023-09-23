const userEmail = []

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BgInt 0n, null, "",undefined, NaN

// Truthy Values
// "0", 'False', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty")
}
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
/*false == 0
true
false == ""
true
0 == ""
true */
