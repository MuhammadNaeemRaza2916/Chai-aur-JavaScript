// (this) it is a keyword which hold the context (data or values) of a block

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
//output =>
// hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// NOTE: (this) holds all data of user object

// user.username = "sam" // changing username to sam
// user.welcomeMessage()
//output =>
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// if you check the context hold by this in global scope, it hold an emply object {} only in node, and in browser console it holds hole window object of html file.

// console.log(this);

// this key word is just just for object context

// 1st way to create functions
function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai() // => Output : undefined

// 2nd way to create functions

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// 3rd way to create functions

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// NOTE: if your code will be in only one line never use {}, for short syntax, and if you use {}, then you have to write return keyword

// const addTwo = (num1, num2) =>  num1 + num2

// if your code is short so you can also use '()' insteed of '{ return }'

// const addTwo = (num1, num2) => ( num1 + num2 )


// in the bellow example you see '({})' because '{}' is for the object block
const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()