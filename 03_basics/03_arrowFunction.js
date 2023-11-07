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

// if you check the context hold by this in global scope, it hold an emply object {} only in node,  
// console.log(this);












// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
