const arr = new Array(9,5,7,8,6,1,10,14)
// console.log(arr.length)

const arrA = [8,9,40,51,45,554,888,11,84,24]
// console.log(arrA[5])

//Array methods (concat)
arrB = arr.concat(arrA)
// console.log(arrB)
// console.log(arrB.length)

// push and pull

// console.log(arr)
arrC= arr.push(84)
arrD= arr.push(54)

// console.log(arr)
// console.log(arr.length)

// arrE= arr.pop()
console.log(arr)

// arrF= arr.copyWithin(0,6)

// console.log(arrF)
// arrG = arr.unshift(8)
// console.log(arrG)

var score1= 800
var score2= 684
var score3 = 963

let score_team=[84,354,651,[3541,341],354]

scoreArray= Array.of(score1,score2,score3,score_team)
console.log(scoreArray)
score_flat=scoreArray.flat(Infinity)
console.log(score_flat)
const myName= new String("Avinash")
spelling= Array.from("Avinash")
console.log(spelling)