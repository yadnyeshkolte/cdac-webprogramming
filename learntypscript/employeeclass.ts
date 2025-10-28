
class Employee{
    id: number;
    name: string;
    dept: string;
    salary: number;

    constructor(id: number, name: string, dept: string, salary: number) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }
}

// remember to add export
//export 
class employeeData{
    empdata: Employee[] = [];

    addEmployee(emp: Employee): void{
        this.empdata = [...this.empdata, emp];
        console.log("Employee added SuccessFully");
    }
    getAllEmployee(): Employee[] {
        return this.empdata;
    }
    updateEmployee(emp: Employee): void{
        this.empdata = this.empdata.map((e) => {
            if(e.id==emp.id){
                console.log("Data updated Succussfully");
                return emp;
            }
            else{
                console.log("Data is not altered");
                return e;
            }
        })
    }
    removeEmployeeById(id: number): void{
        this.empdata = this.empdata.filter((e) => e.id!==id);
    }
    getTheEmployeeById(id: number): Employee | null{
        let returnEmp: Employee | null;
        returnEmp = this.empdata.find((e) => {
            if(e.id==id){
                return e;
            }
            return null;
        });
        return returnEmp;
    }
}

let emprepo: employeeData = new employeeData();

emprepo.addEmployee(new Employee(3, "Yadnyesh", "EEE", 50000));
emprepo.addEmployee(new Employee(4, "Madhur", "CSE", 60000));
emprepo.addEmployee(new Employee(5, "Deepak", "CSA", 50000));
emprepo.addEmployee(new Employee(6, "Rushikesh", "MECH", 60000));
emprepo.addEmployee(new Employee(7, "Aavdut", "BCA", 50000));
emprepo.addEmployee(new Employee(8, "Aaman", "CSE", 60000));


let displayemp = emprepo.getAllEmployee();

console.log(displayemp);

console.log("--------------------------------------");

let emp1 = emprepo.getTheEmployeeById(3);

console.log(emp1);

console.log("--------------------------------------");

emprepo.updateEmployee(new Employee(3, "Yadnyesh","DAC",534642));

displayemp = emprepo.getAllEmployee();

console.log(displayemp);

console.log("--------------------------------------");

emprepo.removeEmployeeById(8);

displayemp = emprepo.getAllEmployee();

console.log(displayemp);
