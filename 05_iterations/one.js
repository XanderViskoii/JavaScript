// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}
// console.log(element); Not accessible as being asked out of scope

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j)

    }

}

let myArray = ["Captain America","Robert Downey Jr", "Dr Bruce Banner","Vision API"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

