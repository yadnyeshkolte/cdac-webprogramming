

// idiot we cant able to use import statement directly in nodejs file without using module.exports or es6 module
const types5 = require('./typesClasses05.js');

const car11 = new types5.Car("BMW", "X5", 2022);
const car22 = new types5.Car("Audi", "Q7", 2021);
console.log(car11);
console.log(car22);

const emp1 = new types5.Employee(101, "Yadnyesh", 25000);
const emp2 = new types5.Employee(102, "Ankita", 27000);
console.log(emp1);
console.log(emp2);