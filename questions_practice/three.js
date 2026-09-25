// loops
// 1. write a for loop to print numbers from 1 to 50?

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 2. use a while loop to sum the numbers from 1 to 10.
let a = 1;
let sum = 0;
while (a < 11) {
  sum = sum + a;
  a++;
}
console.log(sum);

// 3. create a for...of loop to log each character of the string "javascript".
// of loop string pe lgta h
let str = "javascript";
for (let character of str) {
  console.log(character);
}

// 4. write a for loop that skips even numbers between 1 and 20.
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
  } else {
    console.log(i);
  }
}

// 5. Use a do...while loop to log numbers between 5 to 1.
var num = 5;
do {
  console.log(num);
  num--;
} while (num > 0);

// 6. create a for loop that calculates the factorial of 5.
// let square = 1;
// for (var i = 5; i > 0; i--) {
//   square = square * i;
// }
// console.log(square);

let factorial = 1;
for (let i = 5; i > 0; i--) {
  factorial = factorial * i;
}
console.log(factorial); // 120

// 7. Write a nested loop to print a 3*3 grid of numbers.
var hold = 1;
for (var i = 1; i < 4; i++) {
  var str1 = "";
  for (var j = 1; j < 4; j++) {
    str1 += `${hold} `;
    hold++;
  }
  console.log(str1);
}

// 8. Use a for loop to reverse an array [1, 2, 3, 4];
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  var temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - i - 1] = temp;
}
console.log(arr);

// 9. Write a while loop that logs numbers from 1 to 100 divisible by 5.
let number = 1;
while (number < 101) {
  if (number % 5 === 0);
  console.log(number);
  number++;
}

// 10. use a for...in loop to iterate over an object and log its keys.
var obj = {
  name: "a",
  email: "tarunmalik19@gmail.com",
  age: 19,
};
for(let key in obj){
    console.log(key)
}
