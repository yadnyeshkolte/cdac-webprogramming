const moviedata = require('./moviesdata.json')
for(let data of moviedata){
    console.log(`Title is ${data.Title} || Rating is ${data.Rating}`);
}

console.log("===================================");

function addNumber(num1, num2){
    return num1+num2;
}
console.log(addNumber(10,20));

let subs = function(num1, num2){
    return num1 - num2;
}
console.log(subs(50,30));
console.log(subs(20,90));

let multiply = (num1, num2) => {
    return num1*num2;
}
console.log(multiply(5,6));

let divide = (num1, num2) => {
    return num1/num2;
}