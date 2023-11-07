// Scopes are two types, global and block scope, if you create a variable inside any block {} like block of function, block of if, or for statement, then the scope of this variable only exits inside this block 

// NOTE: 1-block scope variables can create using let and const key word
//       2-scope of global variables can be at any place also inside any    blocks


var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    c = 5
    // console.log("INNER: ", a); // Output => 10 (because this variable create using let keyword and it is inside block of if statement)
    
}

// console.log(a); // Output => 300 (because this is a global variable and its value never cresh with any inside block variable whose name is same)

// console.log(b); // Output => error because b is block scope variable of if statement
// console.log(c); // Output => 5, because c is a global scope variable variable so, its scope is also inside the block scope of if statement then the value of c 300 will be overwrite by the value of inside block variable value 5

// nested functions and its scope

function one(){
    const username = "hitesh"

    // nested function
    function two(){
        const website = "youtube"
        console.log(username); // Output => hitesh, because username is a global variable for this nested fucntion because this nested function is inside the block of main function
    }
    // console.log(website);// Output => error because the scope of website variale is inside the block of nested function

    two()
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // Output Error due to block scope
}

// console.log(username); // Output Error due to block scope


// ++++++++++++++++++ interesting ++++++++++++++++++
// there are two ways in old method to create function
// 1-create function using name, and call it with given function name
// 2-create anonymouse function, and then store it in a variable, then call this funcntion using that variable name

console.log(addone(5)) // call function before initialization, no error

function addone(num){
    return num + 1
}



addTwo(5) // call function before initialization, error (Cannot access 'addTwo' before initialization)

const addTwo = function(num){
    return num + 2
}

// more study in next video