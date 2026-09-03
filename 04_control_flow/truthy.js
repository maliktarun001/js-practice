const userEmail = "user@gmail.com";
if (userEmail) {
    console.log("got user email")
} else {
    console.log("did't get user email")
}

// false values in javascript
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values inn javascript
//  true, "0", 'false', " ", [], {}, function(){}, 

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}

// false == 0
// true
// false == ''
// true
// 0 == ''
// true
// 0 == null
//  true

// terniary operator
// condition ? true : false

const iceteaPrice = 100;
iceteaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
