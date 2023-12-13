// for of

arr = [8,25,5,546,54,69,86]
for (const iterator of arr) {
    console.log(iterator);
}

const name = "Avinash Kumar"
for (const i of name) {
    console.log(i)
}

// map
const map = new Map()

map.set("IN","India")
map.set("USA","United State of America")
map.set("UK","United Kingdom")
map.set("FR","France")

// if we add copy element it won't show because it always gives unique values like-

map.set("IN","India")

console.log(map)

for (const abbv of map) {
    console.log(abbv);
}
// but we can print it as destructured array like

for (const [abbv, fform] of map) {
    console.log(`${abbv} :- ${fform}` )
    
}
// we can't apply it on objects