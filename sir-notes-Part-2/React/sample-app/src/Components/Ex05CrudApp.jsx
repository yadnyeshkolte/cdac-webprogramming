import React, { useState } from "react";
import { Employee } from "../models/employee";
import { EmpRepo } from "../Repos/EmpRepo";

// const component : React.FC = (){
//Create for TSX Files. 
// }
export function Ex05CrudApp(){
    //apply the useState to store the Records. 
    const [employees, setEmployees] = useState(EmpRepo.getAll());//get the current list of employees
    const [form, setForm] = useState({id : 0, name : "", address : "", salary : 0})//For storing the state of the Form Elements
    const [flag, setFlag] = useState(true)
    const handleChange = (e) => setForm({ ...form, [e.target.name] : e.target.value})
    //Dynamically update the input fields to the form collection. One Common function for all change events.
    
    ////////////////////////////CRUD Operations///////////////////////////////
    const handleAdd = () =>{
        debugger;
        EmpRepo.add(form);//add the values of the form
        setForm({id :0, name : "", address  : "", salary : 0})//Clear the inputs after adding. 
        setEmployees(EmpRepo.getAll())//reset it with new list of data using getAll Function. 
    }

    const handleUpdate = ()=>{
        EmpRepo.update(form);
        setFlag(true)
        setForm({id :0, name : "", address  : "", salary : 0})//Clear the inputs after update. 
        setEmployees(EmpRepo.getAll())//reset it with new list of data using getAll Function. 
    }

    const handleDelete = (id)=>{
        debugger;
        EmpRepo.delete(id);
        setForm({id :0, name : "", address  : "", salary : 0})//Clear the inputs after update. 
        setEmployees(EmpRepo.getAll())//reset it with new list of data using getAll Function. 
    }
    const handleEdit = (rec)=>{
        setFlag(false)
        setForm(rec)
    }
    /////////////////////////UI Elements//////////////////////////////////////
    return(
        <>
            <h1>Employee Management software</h1>
            <hr />
            <div>
                <ul>
                    {employees.map(e => (
                       <li key={e.id}>
                          EmpId : {e.id}, 
                          EmpName : {e.name}
                          Address : {e.address}
                          Salary : {e.salary}
                          <button className="btn btn-danger m-3" onClick={()=>handleDelete(e.id)}>Delete</button>
                          <button className="btn btn-info m-3" onClick={()=>handleEdit(e)}>Edit Employee</button>
                       </li>    
                    ))}
                </ul>
            </div>
            <div>
                <input type="number" name="id" value = {form.id} onChange={handleChange} placeholder="ID please!" />
                <input type="text" name="name" value = {form.name} onChange={handleChange} placeholder="Name please!" />
                <input type="text" name="address" value = {form.address} onChange={handleChange} placeholder="Address please!" />
                <input type="number" name="salary" value = {form.salary} onChange={handleChange} placeholder="Salary please!" />
            </div>
            <div>
                <button disabled={flag} className="btn btn-secondary m-3" onClick={handleAdd}>Add Employee</button>
                <button disabled={flag} onClick={handleUpdate} className="btn btn-primary m-3">Update Employee</button>
            </div>
        </>
    )
}