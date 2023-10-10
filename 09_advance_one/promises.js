// fetch('https://something.com').then().catch().finally()

//Promise means in queue but does not load at that instance itself (Jaruri nahin ki abhi ki abhi )
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptograpghy, network
    setTimeout(function(){
        // console.log(`Async task is complete`);
        resolve()  //resolve connected
    }, 1000)
});

promiseOne.then(function(){
    // console.log(`Promise consumed`);
})//.then ka sidha connection hai resolve ke saath

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async Task 2`);
        resolve()
    }, 1000)
}).then(function () {
    console.log(`Async task 2 resolved`);
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : `y-git`, email : `xander@example.com`})
    }, 1000)
})

promiseThree.then(function(user){
    // console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout (function(){
        let error = false
        if(!error){
            resolve({username: `Xander`, password: `rugo234`})
        }else{
            reject(`ERROR: Something went wrong`)
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log(`Problem is either resolved or rejected`);
})

//.finally tells jo bhi kaam hona tha vo ho gaya gai
//prefer . syntax from new line for readibility

const promiseFive = new Promise(function(resolve, reject){
    setTimeout (function(){
        let error = true
        if(!error){
            resolve({username: `Viskoii`, password: `ruev194`})
        }else{
            reject(`ERROR: Viskoii went wrong`)
        }
    }, 1000)
})

// async function consumeP5(){
//     const response = await promiseFive
//     console.log(response);
// }
// if error is flase then sb kch badhiya chalta in above code else if error is possible to problem ho sakti hai async await can directly handle errors therefore it suggested to use try catch block to handle error gracefully

async function consumeP5(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 
consumeP5()
    //waits for the work for a time else give error

// async function getAllUsers(){
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         // console.log(response);
//         const data = await response.json()
//         //await kyunki isko bhi time lagta hai
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch(`https://api.github.com/users/DeepakY-Git`).then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
.finally(`Error resolved or rejected`)

