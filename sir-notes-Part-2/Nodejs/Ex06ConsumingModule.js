const shoppingCart  = require("./Ex04Modules")

shoppingCart.addItem({id : 123, name : "iPhone 16 Pro", price : 87000})
shoppingCart.addItem({id : 124, name : "Apple", price : 87000})
shoppingCart.addItem({id : 125, name : "Mango", price : 87000})
shoppingCart.addItem({id : 126, name : "Orange", price : 87000})
shoppingCart.addItem({id : 127, name : "Pines", price : 87000})

const bill = shoppingCart.billAmount();
console.log(`The total bill is ${bill}`)
const items = shoppingCart.getAll();
for(const item of items){
    console.log(item.name)
}