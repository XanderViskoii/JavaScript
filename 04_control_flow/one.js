// if

if (true){

}
//Agr condition is true then it will execute and go into the scope 
//if false it will not go further

// === also checks type along with magnitude
// !== negative 

const score = 200
if (score>100){
    const power = "fly"
    console.log(`User power: ${power}`);
}

//ShortHand Notation
const balance = 1000
if (balance>500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("less than 500");
}
else if (balance <750){
    console.log();
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) // this pipes is (||) or operator 
{
    console.log("User Logged In");
}