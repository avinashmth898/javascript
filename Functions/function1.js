function sayMyName() {
    console.log("A");
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("sh");

}

function addTwoNum(num1,num2) {   //num1 and num2 are param while 7 and 8 are argument
    let sum=num1+num2
    // console.log(sum)
    return sum
}

const result= addTwoNum(7,8)
console.log(result)

function loginUser(username){
    return `${username} just logged in`
}

let whoLogged = loginUser("Avinash")
console.log(whoLogged)

// if we don't pass any value then it'll return undefined

console.log(loginUser()) // undefined just logged in

//we are going to write few functions to understand 
//how does return,!,conditions get executed

function loginUser1(username){
    if (username=== undefined){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser1())

function loginUser2(username){
    if (!username){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser2())

// Default values 
function loginUser2(username="Avinash"){
    if (!username){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(800,698,642))

const user ={
    username: "Avinash",
    price : 800
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and is ${anyobject.price}`)
}

handleObject(user)

handleObject({
    username: "Abhijeet",
    price : 750
})

const myNewArray =[ 200, 400, 100, 600]
function mySecondVal (getArray){
    return getArray[1]
}
console.log(mySecondVal(myNewArray))
console.log(mySecondVal([74,4,54,84,35]))

