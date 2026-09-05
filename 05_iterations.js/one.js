// // for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`)
        // console.log(i+'*' + j + '=' + i*6)
        
    }
    
}

let myArray = ["flash", "superman", "batman", "spiderman", "ironman"];
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

// keyword break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`value of index is ${index}`)
    
// }
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of index is ${index}`)
    
}