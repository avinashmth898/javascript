// Type of data types
// primitive and non-primitive

// primitive - String , Number, Boolean, null, Symbol, undefined, BigInt
// Non-primitive - Array, Objects, Functions
const score=100
const scorevalue=100.3
const isLoggedin=false
const outsideTemp= null
let username;

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber= 95216104189939516117846543846151354152154968163513n


const bikes =['Yamaha', 'Royal Enfield', 'Hero','Honda'];
let myObj = {
    name:'Avinash',
    age:25
}

const myFunction = function (){
    console.log("Function declered");
}

console.log(typeof score)
console.log(typeof scorevalue)
console.log(typeof isLoggedin)
console.log(typeof outsideTemp)
console.log(typeof username)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof bigNumber)

console.log(typeof bikes)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(bigNumber)