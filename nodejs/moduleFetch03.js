console.log("Out");

module.exports = (function(){
    const cart = [];
    function additems(item){
        cart.push(item);
    }
    function viewitems(){
        console.log(cart);
        return cart;
    }
    function removefirstitem(){
        cart.shift();
    }
    function removeitem(item){
        const index = cart.findIndex(e => e.id === item.id);
        console.log("Index to remove:", index);
        cart.splice(index, 1);
    }
    return{
        additems, viewitems, removefirstitem, removeitem
    }
})()