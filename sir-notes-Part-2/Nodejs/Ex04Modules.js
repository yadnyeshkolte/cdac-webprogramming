//Modules are self contained components that contain functions, variables and other forms of data that are exported and imported at the other end and consumed. Modules are based on Common.js features. 
module.exports = (function(){
    ///////////Module can have functions, fields in it. 
    const cart = []

    function addItem(item){
        cart.push(item)
    }

    function getAll(){
        return cart;
    }

    //assumption: an item has an attribute called price in it. 
    function billAmount(){
        let bill = 0.0
        for(const item of cart){
            bill += item.price
        }
        return bill
    }

    return{
        addItem, getAll, billAmount
    }
})()//IFFE(Immediately Invoked Function Expressions)