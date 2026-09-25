// arrays
// 1. create an array of your top 5 favorite movies and log it.
const myArray = ["a", "b", "c", "d", "e", "f"];
myArray.forEach(function (value) {
  console.log(value);
});

// 2. find and log the second element of an array.
const mySecondArray = ["ram", "shaym", "sonu", "monu"];
console.log(mySecondArray[1]);

// 3. Add two new elements to the start of an array using .unshift().
const myThirdArray = [1, 2, 3, 4, 5, 6, 7, 8];
myThirdArray.unshift(0);
myThirdArray.unshift(-1);
console.log(myThirdArray);

// 4. Remove the last element of an array and log the updated array.
var myFifthArray = [1, 2, 3, 4, 5, 6];
myFifthArray.pop();
console.log(myFifthArray);

// 5. use .slice() to extract the first three elements of an array.
var mySixthArray = [1, 2, 3, 4, 5, 6];
console.log(mySixthArray.slice(0, 3));

// 6. Find the index of a specific element  in an array using .indexOf().
var mySeventhArray = [1, 2, 3, 4, 6];
console.log(mySeventhArray.indexOf(3));

// 7. check if a value exists in an array using .includes().
var myEightArray = [1, 2, 3, 4, 5, 6];
console.log(myEightArray.includes(2));
