// singleton

// object literals

const mySym =  Symbol("key1")
const jsUser = {
    name: "Tarun",
    age: 20,
    [mySym]:"mySym1",
    location:"Hisar",
    gmail:"maliktarun2005@gamil.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.gmail)
console.log(jsUser[mySym])
jsUser.gmail = "user@gamil.com"
Object.freeze(jsUser)
jsUser.gmail = "softwareuser@gamil.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}
jsUser.greetingTwo = function(){
    console.log(`hello js user is, ${this.name}`)
}
console.log(jsUser.greeting())