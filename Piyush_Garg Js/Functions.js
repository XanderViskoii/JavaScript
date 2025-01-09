function sayHello(){
    console.log('Hey Deepak')
}

sayHello()

function add(a, b, c){
    console.log(a + b + c);
}

add(5, 10, 7)
add('radhe', 'krishna', 'ek')

function multi(a, b){
    // console.log(a*b)
    return a*b;
}

multi(66, 66)
add(3, 5, 6)

let a = multi(3, 2)
console.log('Hey user result is', a)

// Unlimited arguments 
function addNum(a, b){
    console.log(arguments)
    let ans = 0;
    for(let i = 0; i<arguments.length; i++){
        ans = ans + arguments[i]
    }
    return ans;
}

let result = addNum(10, 22, 33, 44, 55, 66)

console.log(result)

function addNumbersSpread(...numbers){
    let ans = 0
    for(let i = 0; i<numbers.length; i++){
        ans = ans + numbers[i];
    }
    return ans;
}
let resultSpread = addNumbersSpread(10, 22, 33, 44, 55, 66)

console.log(resultSpread)
// Spread operator : ...variableName