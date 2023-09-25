const myObject = {
    js: "JavaScript",
    cpp: "C++",
    RB: "ruby",
    swift: "Swift by apple"
}
// ForIn Loop is used for objects
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

/*const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('FR',"France")

for (const key in map) {
    console.log(key);
} Map Not Iteratable */



