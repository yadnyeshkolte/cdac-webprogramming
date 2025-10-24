const emp = {
    id: 102,
    name: "John Doe",
    salary: 75000,
    address: "Bengaluru"
}

const emp1 = emp;
console.log(emp1);

const emp2 = emp1;
emp2.name = "Jane Smith";
emp2.address = "Mumbai";
console.log(emp2);

console.log(emp);

console.log("===================================");

const employee = function(id, name, salary, address){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.address = address;
}

const empA = new employee(201, "Alice Johnson", 85000, "Chennai");
const empB = new employee(202, "Bob Williams", 90000, "Pune");

console.log(empA);
console.log(empB);

console.log("===================================");

class Cars{
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const car1 = new Cars("Toyota", "Camry", 30000);
const car2 = new Cars("Honda", "Accord", 28000);

console.log(car1);
console.log(car2);