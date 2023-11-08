// Immediately Invoked Function Expressions (IIFE)
// to rap any function inside '()' and call it Immediately after the function declaration block
// two types of IIFE, named and unnamed

// there are two reason to use IIFE, 
// 1-to execute function Immediately
// 2-to prevent the polution of globals variables with same name inside any function that may change the value of inside function variable

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
