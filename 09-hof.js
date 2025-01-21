const array = [
    { name: 'iphone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1001, quantity: 5 },
];

//Método .find
const find = array.find((product) => product.price > 1000);

console.log({find});


//Método .findIndex 
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');

console.log({ findIndex });
console.log('produto:', array[findIndex]);


//Método .some 
const some = array.some((product) => product.price < 1000);
console.log({ some });


//Método .every 
const every = array.every((product) => product.price > 1000);
console.log({ every });


//Método .map
const map = array.map((product) => {
    return {
        ...product,
        subtotal: product.quantity * product.price,
    };
});
console.log({ map });


//Método .filter
const filter = array.filter((product) => product.quantity < 2);
console.log({ filter });


//Método .reduce
const reduce = array.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
}, 0);

console.log({ reduce });