// var c = 300 //Global scope value is available in blocks and at all over the code
let a = 1000
//Lec21 @ 5:00

/*if (true){
    let a = 10
    const b = 20
    console.log(`Inner value of a is ${a}`);
} */ // block scope should be inside the block
//a,b,c are declared in if else meaning that they are needed in if else only
//{} //curly braces is scope(in functions,if, else...) except in objects where it is object decleration



//console.log(`Here value of a is ${a} that is independent of if`);
// console.log(b);
// console.log(c); //coming out of if since it is being printed even after in the scope where it is not being returned 


//++++++++++++++Nested Scoping++++++++++++
function one(){
    const username = "Xander"

    function two(){
        const Website = "Github"
        console.log(username);
    }
    // console.log(Website);

    two()
}
// one()

/*if(true){
    const username = "Xander"
    if(username === "Xander"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}*/
// console.log(username);

// ++++++++++++++Interesting++++++++++++++


addone(5)
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){ //Also known as Expression 
    //VAriables are very powerful in js 
    return num + 2
} //Error due to hoisting
