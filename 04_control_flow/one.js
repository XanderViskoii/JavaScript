// if

/*if (condition){

} //Agr condition is true to andr ka code execute karenge nahin to nahin karenge

const isUserLoggedIn = true
if (isUserLoggedIn){

}

// <, >, <=, >=, ==, ===(checks type also), !=, !==(negation of strict equality)

if (3!=2){
    
} Since condition i.e. 3 is not equal to 2 holds itself that's why the internal code(line 15) will be executed
if (2 === "2"){
    console.log("Executed");
} condition not true since one is String another is number*/

const a = Number(2)
const b = Number(2)
if (a !== b){
    console.log("Executed");
} // !(a===b)

const temperature = 41

if (temperature<50){
    console.log("temperature is less than 50");
}
else {
    console.log("temperature is greater than 50");
}

const score = 200

/*if (score>100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}

console.log(`User power: ${power}`); */

/*const balance = 1000

// if (balance>500) console.log("test"), console.log("test2");
//implicit scope 
if (balance<500){
    console.log("less than 500");
} else if (balance<750){
    console.log("Less than 750");
} else if (balance<900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}*/

const userLoggeedIn = true
const DebitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
// && all conditions if true then only execution
if (userLoggeedIn && DebitCard){
    console.log("Allow to buy course");
}
// ||(or) any one if true condition executes the code
if (userLoggeedIn || DebitCard){
    console.log("User logged in");
}
