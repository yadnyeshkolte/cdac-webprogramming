//3 ways to create functions in JS
function addFunc(v1, v2){ //using function keyword
    return (v1 + v2)
}
console.log(addFunc(123,23))

//anonymous functions
const subFunc = function(v1, v2){
    return v1 - v2;
}

console.log(subFunc(123,23))

//More improvised and handy way of creating functions is Arrow Functions or Lambda Functions
const mulFunc = (v1, v2) => v1 - v2;

console.log(mulFunc(13,2))