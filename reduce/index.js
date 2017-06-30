const orders = [
    {amount: 250},
    {amount: 100},
    {amount: 200},
    {amount: 225},
    {amount: 350},
    {amount: 50},
];

let totalOrder = orders.reduce(function(sum, order) {
    return sum + order.amount;
}, 0)

console.log(totalOrder);

let _totalOrder = orders.reduce((sum, order) => {sum + order.amount}, 0)

