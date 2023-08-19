// Write a function that takes an object with name, price and quantity properties and
// returns a string with the product information using template strings.
function printObj(obj){
    return `name =${obj.name} has price Rs${obj.price} has quantity ${obj.quantity}`
}
const obj={
    name:"lemo pani",
    price:200,
    quantity:2 
}
let Result=printObj(obj);
console.log(Result);