array = ["car1","car2","car3","car4","car5","car6","car7","car8","car9","car10"];

console.log(array);

console.log("===================================");

console.log("For 1")
for(let i=0;i<array.length;i++){
    console.log(array[i])
}

console.log("===================================");
console.log("For 2")
for(let key in array){
    console.log(`Key is ${key} || value is ${array[key]}`);
}

console.log("===================================");
console.log("For 3")
for(let item of array){
    console.log(item);
}

console.log("===================================");
console.log("For 4")

array.forEach((value, key) => {
    console.log(`Key is ${key} || value is ${value}`);
})

console.log("Ended")
