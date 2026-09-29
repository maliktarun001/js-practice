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

// 8. combine two arrays [1, 2] and [3,4] using .concat().
var myFirstArray = [1, 2, 3, 4, 5, 6];
var myNextArray = [7, 8, 9, 10];
console.log(myFifthArray.concat(myNextArray));

// 9. Sort an array of numbers [5, 2, 9, 1] in ascending order.
var arr = [11, 24, 36, 4, 5];
for (var j = 0; j < arr.length; j++) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
console.log(arr);

// 10. Write a program that creates a copy of an array without mutating the original.
var arr1 = [11, 24, 36, 4, 5];
var arr2 = [];
arr.forEach(function (value) {
  arr2.push(value);
});
arr2.pop();
console.log(arr, arr2);