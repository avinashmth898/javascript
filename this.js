const user={
    username: "Avinash",
    email: "avinash@email.com",
    userLogininfo: function () {
        console.log(`${this.username}, logged in just a moment ago`)
    }

}

// console.log(user.userLogininfo("Avinia"))

// we"ll often use this operator in the case of objects only
// as 

function fun() {
    const game= "Cricket"
    const score= 275    
    console.log(`India has ${score} in ${game}`)
}

fun(this.game)
console.log(this)

// we'll see few more use in the file arrow_function