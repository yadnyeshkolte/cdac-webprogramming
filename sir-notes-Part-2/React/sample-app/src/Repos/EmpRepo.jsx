import { Employee } from '../models/employee'

//create an array with some initial data. 
let empList = [new Employee(123, "Phaniraj", "Bangalore", 56000), new Employee(124, "Rajesh", "Pune", 66000)];

//New React syntax for creating functional component
export const EmpRepo = {
    getAll: () => [...empList],//getAll Employees
    getById : (id) => empList.find(e =>e.id == id), //get by id
    add: (rec) => empList =  [...empList, rec], //add rec
    update : (rec)=> empList = empList.map(e => e.id == rec.id ? rec : e),//update
    delete : (id) => empList = empList.filter(e  =>e.id !== id)//delete
}