const email="Avinash@123"

if (email){
    console.log("Got the email");
}
else{
    console.log("no email");
}

// there are set of rules that are already defined as true or false
// here's the list
// Falsy values
    // false, 0, -0,BigInt 0n, "", null, undefined, NaN

// Truthy values
    // rest are truthy values including
    // "0", "falsy",'falsy', " ", [],{}, function(){},
const gmail=[]

if(gmail.length===0){
    console.log("Array is empty");
}
// similarly for object

const hotmail={}

if(Object.keys(hotmail).length===0){
    console.log("Object is empty")
}

// nullish coalescing operator (??)

val1 = 5 ?? 10
console.log(val1);

val1= null ?? 10
console.log(val1);

val1= undefined ?? 15
console.log(val1)

val1= null ?? 10 ?? 15 // the first value will be assigned
console.log(val1)

// Ternary operator (?)

// format 
// condition ? true: false

const tea = 80;
tea>=50 ? console.log("tea is costilier") : console.log("tea is cheaper")