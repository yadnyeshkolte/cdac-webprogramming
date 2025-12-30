//variableName : dataType = value;
const msg : string = "Hello world from TypeScript";
console.log(msg);//All the functions of JS is available in TS as TS is a superset of JS.
let username : string = "John Doe";
let age : number = 30;
let isAdmin : boolean = true;   

console.log("Username: " + username);
console.log("Age: " + age);
console.log("Is Admin: " + isAdmin);
//define a variable which can hold 2 or more types. 
let id : string | number = "12345"; //id can be string or number
console.log(typeof id);
id = 12345;
//id = true;//Error at compile time. 
console.log(typeof id);

//array of numbers
//variable : datatype[] = values;
let scores : number[] = [90, 85, 88, 92];

//Typescript supports tuples
let person : [string, number, boolean] = ["Alice", 25, false];//A tuple is like an array that can store multiple types in a fixed order.
console.log("Name: " + person[0]);
console.log("Age: " + person[1]);
console.log("Is Student: " + person[2]);

let skills :[string, number];
skills = ["TypeScript", 5];
console.log("Skill: " + skills[0]);
console.log("Experience: " + skills[1] + " years");

skills = ["JavaScript", 7];
console.log("Skill: " + skills[0]);
console.log("Experience: " + skills[1] + " years");
//using the skills tuple to store different values. 

