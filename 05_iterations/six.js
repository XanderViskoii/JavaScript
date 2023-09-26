const coding = ["js","Ruby","Swift","Python", "Java", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} ) //For-Each Do not return value
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myNums.filter( (num) => num>4 )