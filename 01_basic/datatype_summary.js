//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // dataType: number
const scoreValue = 100.3 // dataType: number

const isLoggedIn = false // dataType: bolean
const outsideTemp = null // dataType: object
let userEmail; // dataType: undefined

const id = Symbol('123') // dataType: symbol
const anotherId = Symbol('123') // dataType: symbol 

// console.log(id === anotherId); // dataType: (both are different)

const bigNumber = 3456543576654356754n // dataType: bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // dataType: object

let myObj = { // dataType: object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ // dataType: function
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3