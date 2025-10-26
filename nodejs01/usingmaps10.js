console.log("This is using maps in node js");

const array = ["yadnyesh","rushikesh","amol","vaibhav","prasad","sanket","deepak"];

/* this will not work as expected
for(ele of array){
    ele = ele.charAt(0).toUpperCase() + ele.slice(1);
}*/

for(index in array){
    array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1);
}
/*
for(let i=0;i<array.length;i++){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
}*/
console.log(array);
// with using maps 

const lowerarray = array.map(ele => ele.charAt(0).toLowerCase() + ele.slice(1));
console.log(lowerarray);


array.map(ele => console.log(ele));