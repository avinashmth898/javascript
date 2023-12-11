const todayDate = new Date()
console.log(todayDate.toDateString())
console.log(todayDate.toLocaleString())
console.log(typeof todayDate)
// Months will start from 0 in javascript
let mycreation =new Date(2023, 0, 23)
console.log(mycreation.toLocaleString())
console.log(mycreation.toDateString())

// with time AND date

let newdate = new Date(2023, 11, 8, 20, 28, 56)
console.log(newdate)
console.log(newdate.toLocaleDateString())

//with spacific format

const secDate =new Date()

console.log(secDate)