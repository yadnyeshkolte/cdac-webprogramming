class Employee{
    //members of the class
    id : number;
    name : string;
    email : string;
    salary : string;

    //constructor is the function that is invoked when an object of the class is created.
    constructor(id : number, name : string, email : string, salary : string){
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.id = id;
    }

}

class EmpRepo{
    empData : Employee[] = [];

    //Functions for this EmpRepo
    addEmployee(emp : Employee) : void {
        this.empData = [...this.empData, emp];
    }

    getAllEmployees() : Employee[] {
        return this.empData;
    }

    //Function that gets the Employee, if not found returns null. 
    getEmployeeById(id : number) : Employee | null { //This function either returns an Employee or null if the Employee is not found.
        return this.empData.find((emp) => emp.id == id) || null;
    }

    removeEmployeeById(id : number) : void {
        this.empData = this.empData.filter((emp) => emp.id !== id);
    }

    updateEmployee(emp : Employee) : void {
        this.empData = this.empData.map((e) => {
            if(e.id === emp.id){
                return emp; //return the updated employee
            }
            return e; //return the existing employee
        });
    }
}

const emp1 :Employee = new Employee(123, "Alice","alice@example.com","50000");
const repo : EmpRepo = new EmpRepo();
repo.addEmployee(emp1);
repo.addEmployee(new Employee(124, "Bob","bob@example.com","60000"));
repo.addEmployee(new Employee(125, "Charlie","charlie@example.com","70000"));
//added 3 employees.

const allEmps : Employee[] = repo.getAllEmployees();
console.log("All Employees: ");
allEmps.forEach(emp => {
    console.log("ID: " + emp.id);
    console.log("Name: " + emp.name);
    console.log("Email: " + emp.email);
    console.log("Salary: " + emp.salary);
});

// console.log("Employee 1 Details:");
// console.log("Name: " + emp1.name);
// console.log("Email: " + emp1.email);
// console.log("Salary: " + emp1.salary);