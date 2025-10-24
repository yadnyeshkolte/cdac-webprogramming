console.log("Running moduleCatch04.js");

const shopcart = require("./moduleFetch03.js");

shopcart.additems({id:101, name:"HP", price:60000})
shopcart.additems({id:102, name:"Dell", price:55000})
shopcart.additems({id:103, name:"Apple", price:120000})
shopcart.additems({id:104, name:"Asus", price:45000})
shopcart.additems({id:105, name:"Acer", price:40000})
shopcart.additems({id:106, name:"Lenovo", price:50000})
shopcart.additems({id:107, name:"Microsoft", price:130000})
shopcart.additems({id:108, name:"Samsung", price:70000})
shopcart.additems({id:109, name:"LG", price:65000})

//const shopitems = shopcart.viewitems();

shopcart.removefirstitem();
shopcart.viewitems();

shopcart.removeitem({id:105, name:"Acer", price:40000})

shopcart.viewitems();

console.log("===================================");