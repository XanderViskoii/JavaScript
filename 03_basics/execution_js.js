let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
console.log(`value of result1 is ${result1} and result2 is ${result2}`);

//Steps of Execution:
//1. Global Execution --> it is first allocated in this.  (ye to hona hi hona hai)
//2. Memory Phase(allocation of memory) 
//3. Execution Phase 
/*   val1<--10
     val2<--5
     addNum --> a new seperate Execution Context(ec) is Created 
     A new ec is created everytime you call a function */
//4. Execution context
// JS is single threaded