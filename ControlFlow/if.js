// if

const isLoggedIn =true
// == will only check the value not the type but 
//the === will check everything(i.e, type) it's aslo called strict check
if (2=="2"){
    console.log("Executed ==")
}

if (2==="2"){
    console.log("executed ===")
}
const temp =42

if (temp <= 51){
    console.log("temparature is less than 51 ")
    const weather= "cold"
    console.log(`You'll feel ${weather} weather outside`) // we can;t access this variable
// weather outside of this scope similar to other block scope variations.
// And back to basics if we use var intead of const/let it'll work outside of this scope as well
}
else{
    console.log("temparature is greater than 51 ")
}

// implicit scope

const balance=1000

if (balance > 500) console.log("Balance is more than 500"); // furthur we can add few more lines 
//of the code in the same line only but that's not a good practice

if (balance > 600) console.log("Balance is more than 600") , console.log("test")

// AND & OR

const India= true
const Bihar= true
const Bhilai= false
const Motihari = true

if (India && Bihar){
    console.log(" The developer is from Bihar")
}
if(Motihari || Bhilai){
    console.log("The developer is from Motihari or Bhilai")
}

// AND -- &&
// OR -- ||