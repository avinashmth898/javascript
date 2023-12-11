// we can derive object as 2 different
// Object Literals definition

// Object.create
const mySym= Symbol("key1")
const js_user={
    name :"Aviansh",
    "full name" : "Avinash Kumar",
    age: 21,
    // for symbol we use sq bracket for varible name
    [mySym]: "key1",
    location: "Bihar",
    email: "avinash.kumar@subex.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday "]


}

console.log(js_user.email)
console.log(js_user["email"])
console.log(js_user["full name"]);
console.log(js_user[mySym])

js_user.email ="avinashmth898@gmail.com"

console.log(js_user.email)

// Use freeze to freeze the object

// Object.freeze(js_user)

js_user.email ="avinash10418@gmail.com"

console.log(js_user.email);
console.log(js_user);

js_user.greeting = function(){
    console.log("Just declered our method");
}
console.log(js_user.greeting())
js_user.greeting2 = function(){
    console.log(`hello JS user we'll use our own variables , ${this.email}`)
}
console.log(js_user.greeting2())