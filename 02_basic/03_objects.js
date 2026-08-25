const tinderUser = {}
tinderUser.id = "12345"
tinderUser.name = "sneha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ram@gmail.com",
    fullName: {
        userFullName: "Ram",
        lastName: "Shyam"
    }
}
console.log(regularUser.fullName)

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "f",
    5: "g"
}
// const obj3 = {
//     obj1,
//     obj2
// }
const obj3 = Object.assign(obj1, obj2)
console.log(obj3)