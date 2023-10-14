const user = {
    username: "Xander",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log(`Got user details from database`);
        //console.log(`Username : ${this.username}`);
        //console.log(this);
    }
}


/* console.log(user.username);
console.log(user.getUserDetails());
console.log(this); */
  
/*************Constructor****************/
/* const promise1 = new Promise()
const date = new Date()
new keyword is here as a constructor function which helps in making multiple instance from single object literal
new keyword helps in telling new context */

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Xander",12,true)
const userTwo = new User("Viskoii", 11, false)

console.log(userOne.constructor); //values overwrite by userTwo if new not used
// console.log(userTwo);


// new keyword creates a empty object {instance}  -> constructor function called -> arguments inject -> we get it in function