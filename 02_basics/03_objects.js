// there are two ways to create object, literals and constructor
// note one things when we create object using constructor, the object will be singleton object

// =======singleton======
// object constructors
// Object.create (study in later)

// create symbol data type variable for using in object
const mySym = Symbol("key1")

// =======Non-singleton====
// object literals

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser)

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());