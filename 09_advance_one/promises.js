// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptograpghy, network
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve()  //resolve connected
    }, 1000)
});

promiseOne.then(function(){
    console.log(`Promise consumed`);
})//.then ka sidha connection hai resolve ke saath

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async Task 2`);
        resolve()
    }, 2000)
}).then(function () {
    console.log(`Async task 2 resolved`);
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : `y-git`, email : `xander@example.com`})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function){
//         let error = true
//         if(!error){
//             resolve({username: `Xander`, password: `roti234`})
//         }else{
//             reject(`ERROR: Something went wrong`)
//         }
//     }
// })