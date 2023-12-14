// the forEach loop deosno,20t throw any return value so this problem alwayes gets created like
const num =[5,5,2,7,2,4,8,9,8,6,2,5,2]

num.forEach(element => {
    console.log(element)
});

// to overcome the above problem we have filter loop

const newset =num.filter((num)=> num>=2)

// console.log(newset)

// or

const newset2=num.filter((num)=> {
     return (num)
})

console.log(newset2)

// what if we want to use only foreach