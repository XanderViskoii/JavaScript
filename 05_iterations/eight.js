const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0  )
console.log(myTotal);

const ShoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Android Course",
        price: 5999
    },
    {
        itemName: "DataScience Course",
        price: 12999
    }
]

const TotalBill = ShoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(TotalBill);