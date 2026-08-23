// arrays
const myArrays = [1, 2, 4, 5, 7, 9];
const nameArrays = ["ram", "shyam", "hari", "gita"];
const myArr2 = new Array(1, 4, 6, 7, 8, 9)


// console.log(myArrays[3]);

//======== array methos =======
// myArrays.push(6);
// myArrays.pop();
// pop removes the last element from an array and returns that element. This method changes the length of the array.
// myArrays.unshift(7);
// unshift adds one or more elements to the beginning of an array and returns the new length of the array.
// myArrays.shift();

// const newArr = myArrays.join();
// console.log(myArrays);
// console.log(typeof newArr);

//========== slice, splice========
console.log("A", myArrays);
const myNewArr = myArrays.slice(1, 4);
console.log(myNewArr);
console.log("B", myArrays);
// 
const myn2 = myArrays.splice(1, 3, 10, 11, 12);
console.log("C", myArrays);
console.log(myn2);

// 
const marvel_heros = ["ironman", "spiderman", "thor", "hulk", "captain america"];
const dc_heros = ["batman", "superman", "flash", "wonder woman", "aquaman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// const allHeros =marvel_heros.concat(dc_heros);
// console.log(allHeros)
const all_news_heros = [...marvel_heros, ...dc_heros];
console.log(all_news_heros);

// 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


// important method
console.log(Array.isArray("Tarun"))
console.log(Array.from("Tarun"))
console.log(Array.from({name:"Tarun", age: 23}))

// questions
// what is shallo copy and deep copy in javascript?