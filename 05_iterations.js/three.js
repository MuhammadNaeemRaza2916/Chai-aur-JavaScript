// Array Specific loops
// 1-'for of'

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
// in the above loop, num variable holds each value of arr, and in this loop we will not mention the lenght of array

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// it is also a type of object

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// NOTE: for of loop will never iterate on a normal object

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }