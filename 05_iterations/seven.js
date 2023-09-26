const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10 )
const newNumbs = myNums.map( (num) => {
    return num*10
} )
// console.log(newNums);
// console.log(newNumbs);

const newNumbers = myNums
                    .map( (num) => num*11 )
                    .map( (num) => num+1 )
                    .filter( (num) => num >= 40 )
//Filter checks condition such as whehther condition is true or not while map  also performs operations 
console.log(newNumbers);