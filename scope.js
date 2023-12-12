//Traditional definition of function

const first = "Avinash"

function one() {
    const second= 550
    console.log("Function one has been called")
    function two(){
        const third= "Namesh" 
        console.log("Function two has been called");
    }
    two()
}
 one()

//Another way to define function
let num=5

// console.log(one2(8)) we can understand one thing that
//if we save our function as a varibale then we can't define the output 
// before function decleration
const one2 = function(num){
    return num+5
}

const two2 = function(num){
    return num-10
}

console.log(one2(8)+two2(5))