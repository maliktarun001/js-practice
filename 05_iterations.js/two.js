// let index = 0;
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 1

// }

let myArray = ["flash", "superman", "batman", "spiderman", "ironman"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 1
do {
console.log(`value is ${score}`);
score++
} while(score <= 10);

// for of loop
const array = [1,2,3,4,5,5]

for (const num of array) {
    console.log(num);
}

const greeting = "Hello World";
for (const greet of greeting) {
    console.log(greet);
}

// maps
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France')
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}