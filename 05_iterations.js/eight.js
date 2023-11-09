const myNums = [1, 2, 3]

// reduce is also loop, for iterating on array, it has more feature, it required two parameters accumulator and currentValue, accumulator is the variable which holds the output of the operation which you perform and return it, then you can easily use last updated ouput on your 2nd iteration operations, and after {}, you need to give initial value for accumulator which is normally 0.

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);