array = ["car1","car2","car3","car4","car5"];
console.log(array);

for(let key in array){
    console.log(`key is ${key} || Value is ${array[key]}`);
}