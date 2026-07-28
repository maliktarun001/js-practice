const name = "tarun"
const repoCount = 60
// console.log(name + repoCount + "value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('tarun')
console.log(gameName[1])
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('r'))

const newStrings = gameName.substring(0, 4)
console.log(newStrings)
const Name = "hitesh";

console.log(Name.slice(-2));    // "sh"
console.log(Name.slice(0, 4));  // "hite"


const newStringOne = "    hello   hey    "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim = used to remove space

const url = "https://maliktarun.com/frontend%20developer";
console.log(url.replace('%20','-'));
// replace = agr ko letter remove krna ho ya update krna ho toh we can use replace

console.log(url.includes('sunder'))
// includes = check value present or not in a variable