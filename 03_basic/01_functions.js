// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
// addTwoNumbers(3, 4)
// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2
//     // return result
//     return number1 + number2

// }
// const result = addTwoNumbers(3 + 4)
// console.log("result", result)

function loginUserMessage(username) {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
// console.log(loginUserMessage("Tarun"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 500, 2000, 4000, 700))


const myNewArray = [100, 200, 300, 400]

function returnArray(getArray) {
    return getArray[2]
}
console.log(returnArray(myNewArray))