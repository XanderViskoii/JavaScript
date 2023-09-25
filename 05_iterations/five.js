const coding = ["js","Ruby","Swift","Python", "Java", "cpp"]

coding.forEach( function (val) {
    // console.log(val);
} ) //CallBack Fn do not have name

 coding.forEach( (item) => {
    // console.log(item);
} )

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe); Not to execute just have to give reference

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

