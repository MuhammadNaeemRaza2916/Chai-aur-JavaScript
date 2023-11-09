// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// Comparision Operators
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if code is one line that dont use '{}' 
// if (balance > 500) console.log("test");

// you can also write code in this form by seperating them ',' but this is not a good practise, code will not me readable

// if (balance > 500) console.log("test"),console.log("test2");

// different conditional statements

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// multiple conditional statements

// if you use '&&' then all condition will be check 
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// if you use '||' then conditions checking one by one but if at any point conditions true then other condition will never check  

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}