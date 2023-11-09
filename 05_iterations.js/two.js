// there are two more types of loop, while and do while loop
// while loop is same as of for loop but just a small thing is differ that variable declearation and initialization and increasment code change its place

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// in do while loop, loop will be execute atleast at once, although condition will never meets.

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);