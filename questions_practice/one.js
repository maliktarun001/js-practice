// basic console usages (10 questions)
// 1. Log your name and favorite hobby to the console.
console.log("my name is Tarun.", "My hobbies are reading book, learning new things and listning music");

// 2. Perform and log the result of 45 * 2 - 10.
console.log(45 * 2 - 10)

// 3. Use console.log() to display the current year
const date = new Date();
console.log(date.getFullYear())

// 4. Create two variables for first and last name. Concatenate and log them.
var firstName = "Tarun"
var lastName = "Malik"
// console.log(firstName + " " + lastName)
console.log(`${firstName} ${lastName}`)

// 5. Track the value of a variable by logging it before and after updating.
var a = 12;
console.log(a);
a = 32;
console.log(a)

// 6. use console.error() to simulate an error message.
console.error("this is your error")

// 7. Log the square of the number 12 to the console.
console.log(12 * 12);

// 8. Print the type of a variable holding the value true.
const findType = true;
console.log(typeof findType);

// 9. Create a variables holding your age and log whether it's greater than 18.
 var myAge = 20;
if(myAge > 20){
    console.log("your age is greater then 20");
} else{
    console.log("your age is less then 20")
}

// 10. Log the result of 100/0 and observe the output.
console.log(100/0)