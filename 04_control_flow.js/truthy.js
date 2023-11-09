// falsy values = false

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values = true
// "0", 'false', " ", [], {}, function(){}

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// way to check weather an array is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// way to check weather an object is empty or not
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// let value = value1 ?? value2
// if value1 is avaible then it will be assign to the variable otherwise second value will be assign, Or if both variable is empty then undefined will be assign to the main variable 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator
// short form of condition checking statement if condition is true then '? value :' this code will be executed, otherwise after ':' code is executed.

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
