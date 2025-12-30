//3 ways to create objects in JS
//////////////////////////////singleton objects///////////////////////////////////////////////
const emp = {
    id  : 123,
    name  : "Phaniraj",
    address  : "Bangalore"
}

const emp2 = emp;
emp2.address = "Pune"

console.log(emp)
//////////////////////////Using Function type////////////////////////////////////////////////
const empRec =  function(id, name, address){
    this.empId  =  id;
    this.empName = name;
    this.empAddress = address;
}

const obj1 = new empRec(123, "Phaniraj", "Bangalore")
const obj2 = new empRec(124, "Jaydip", "Calcutta")
obj2.empAddress =  "Mysore"
console.log(obj2)
console.log(obj1)

/////////////////////Using ES6 syntax////////////////////////////////////
class Customer{
    constructor(id, name, address){
        this.id = id;
        this.name = name;
        this.address = address;       
    }
}
const temp = new Customer(123, "Suresh", "Chennai")
//Similar to function type, but more readable with keyword class introduced in ES6 version of JS