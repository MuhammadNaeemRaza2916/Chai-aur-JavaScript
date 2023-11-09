const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// map loop is used for iterating on array and it will return value and you can also extract the result by cheacking different conditions, and also perform different operations to get your desired output on your result variable.
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);