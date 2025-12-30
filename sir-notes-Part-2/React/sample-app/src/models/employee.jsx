//U create an Entity class to represent real world Employee. 
//In typescript, U can create type or interface instead of class. interface in TS is used to create fields of custom type without any functions(Struct of C).  
export class Employee{
    constructor(id, name, address, salary) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary
    }
}