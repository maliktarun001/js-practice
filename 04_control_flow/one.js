const score = 200;
if (score > 300) {
    const power = 'super';
    console.log(`user power is ${power}`)
}
//  console.log(`user power is ${power}`)

const balance = 1000;
if (balance > 500) {
    console.log("user balance is grater than 500");
} else if (balance < 900) {
    console.log("user balance is less than 900");
} else {
    console.log("user balance is less than 2000")
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard && 2==4) {
    console.log("user is logged in and has a debit card");
}
if(userLoggedIn || debitCard || loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in successfully")
}

// Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)