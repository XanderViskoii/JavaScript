// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Nitish Bharadwaj","Savardman D banerjee"]

const myArr2 = new Array(1,2,3,5,6)
// console.log(myArr[1]);

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(typeof newArr);


// console.log(myArr);

// Slice,Splice

console.log('A',myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);
//Slice V/s Splice : Splice manipulates the original array while slice just creates a deep copy
//Splice  is example of shallow copy since it's using reference
