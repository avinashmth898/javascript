// Imediatally Invoked Function Expression
// Here we are going to learn How does IIFE works

// there are two different ways

(function LemonTea(myName) {
    console.log(`My Name is ${myName}`)
})("Anup");

// Always use semicolon when two iife been used

((drinker)=>{
    console.log(`Enjoy your kahwa, ${drinker}`)
})("Avinash")