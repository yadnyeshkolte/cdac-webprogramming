class Employee{
    constructor(id, name, address, salary){
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
}

let empdata = [new Employee(1, "Yadnyesh", "Akola", 90000), new Employee(2, "Rushikesh", "San", 920000)]

export const EmployeeData = {


    add(emp) {
        empdata = [...empdata, emp];
    },
    getAll(){
        return empdata;
    },
    removeEmp(id){
        empdata = empdata.filter((e) => e.id!==id);
    },
    getById(id){
        return empdata.find((e) => e.id===id)
    },
    updateEmp(emp){
        empdata = empdata.map((e) => {
            if(e.id==emp.id){
                return emp;
            }
            return e;
        })
    }
}


/*
export class EmployeeData{
    empdata = [new Employee(1, "Yadnyesh", "Akola", 90000), new Employee(2, "Rushikesh", "San", 920000)]

    add(emp) {
        this.empdata = [...this.empdata, emp];
    }
    getAll(){
        return this.empdata;
    }
    removeEmp(id){
        this.empdata = this.empdata.filter((e) => e.id!==id);
    }
    getById(id){
        return this.empdata.find((e) => e.id===id)
    }
    updateEmp(emp){
        this.empdata = this.empdata.map((e) => {
            if(e.id==emp.id){
                return emp;
            }
            return e;
        })
    }
}
*/