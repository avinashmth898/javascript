const myObject ={
    js: "javascript",
    cpp: 'c++',
    rb: 'ruby',
    sw: 'swift'
}

for (const key in myObject) {
    console.log(key)
}
// this will print only the key value and for pair we need to do 

for (const key in myObject){
    console.log(`${key} is the shortcut for ${myObject[key]}`)
}

const programing=["js","cpp","py","html"]
for (const key in programing) {
    console.log(programing[key]) //keyis the index 
}

// const map = new Map()

// map.set("IN","India")
// map.set("USA","United State of America")
// map.set("UK","United Kingdom")
// map.set("FR","France")

// for (const key in map) {
//     console.log(key)
// }

// map is not iterable in forin