// declering object as singleton

const tinderUser = new Object()

tinderUser.id = "123"
tinderUser.name= " Romio"
tinderUser.isLoggedIn =false

console.log(tinderUser)

const regularUser ={
    email : "romio@gmail.com",
    fullName : {
        first_name : "Romio",
        second_name : "Mathews",
        last_name : "saw",
        Parents_name : {
            first_name_p: "Ashu",
            second_name_p : "Dow",
            last_name_p : "Agroscience"
        }
    }



}

console.log(regularUser.fullName.Parents_name.last_name_p)

// merging or combining objects

const obj1 ={1:"a", 2: "b"}
const obj2 ={3:"c", 4: "d"}

// const obj3 = {obj1,obj2}
const obj3= Object.assign({},obj1,obj2) //why {} in the argument because that is target object or 
console.log(obj3); // the object at first place will act as target object

const obj4 ={ ... obj1,...obj2}
console.log(obj4)

// Objects inside an array We are going to use it more

const data =[
    {name1: "Avinash", age: 25, Nickname: " Avi"},
    {name1: "Surbhi", age: 22, Nickname: "Bali Ji"},
    {name1: "Amisha", age: 18, Nickname: "Chhochhi"},
    {name1: "Abhijeet", age: 26, Nickname: "Ashu"}

]

console.log(data[2].Nickname)
console.log(tinderUser)
//  The most Important

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //spread the entries Entries 

//Both the lines will return the array where we can use the loop and so,

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))


const course ={
    coursename: "JS",
    price : 8000,
    courseinstructor :"Avinash"
}

// destructuring the object

const {courseinstructor : inst} = course

console.log(inst)


