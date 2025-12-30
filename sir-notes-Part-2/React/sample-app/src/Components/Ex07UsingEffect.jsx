//useEffect hook is used to perform async calls inside UR React App. It is typically used to fetech data from REST End points, subcribing events in DOM, updating UR DOM and setting up timer events inside UR app. 
//useEffect hook shall execute after the component is rendered to the DOM. Executed once, but can be reloaded depending on UR logic. 
//Why? => Set the Initial Data after the rendering is completed. Without useEffect, the call shall be synchronous and User experience might not be good. The UI hangs till the data is rendered. U may have to explicitly call the re-population Function for every change that happens in the data. (Add/Update/Delete)

//TODO: An App created using React to connect to back end using effect Hook and get the data. 
import React, { useEffect, useState } from 'react'
import { EmployeeService } from '../services/empService';

export default function Ex07UsingEffect() {
    //useState objects to be included...
    const [ employees, setEmployees ] = useState([]);//Initial State shall be blank
    const [ form, setForm ] = useState({id : 0, name : "", address : "", salary : 0})//record shall be blank.
    //Above it implement the logic and functions
    //map the handlers to the UI elements. 
    useEffect(()=>{
        EmployeeService.getAll().then(data => setEmployees(data));
    }, []);//[] is dependencies that might be required, not in this case. 
    //handler for onChange Event. 
    const onChange = (e) => setForm({ ...form, [e.target.name] : e.target.value})
    
    
    //////////////////////////////////////CRUD Operations//////////////////////////////////////////
    const handleAdd = async () =>{
        if(!form.name || !form.address){
            alert("Details not set")
            return
        }
        const newRec = await EmployeeService.add(form);
        setEmployees([...employees, newRec])//Only to update locally..
        setForm({id : 0, name  : "", address : "", salary : 0});
        alert("Employee added successfully")
    }

    const handleUpdate = async () =>{
        if(!form.name || !form.address){
            alert("Details not set")
            return
        }
        const updatedRec = await EmployeeService.update(form);
        setEmployees(employees.map(emp => emp.id == updatedRec.id ? updatedRec : emp))//Only to update locally..
        setForm({id : 0, name  : "", address : "", salary : 0});
        alert("Employee updated successfully")
    }

    const handleEdit = (rec) =>{
        debugger;
        setForm(rec);
    }

    const handleDelete = async(rec) =>{
        const deleted = await EmployeeService.delete(rec.id);
        setEmployees(employees.filter(r => r.id != rec.id))
        alert("Record deleted")
    }

    //Create the UI
    return (
        <>
        <div className="container">
            <div className="row">
            <div className='col-md-6'>
                <table className='table table-bordered table-stripped'>
                    <thead>
                    <tr>
                        <th>Emp ID</th>    
                        <th>Emp Name</th>    
                        <th>Emp Address</th>    
                        <th>Emp Salary</th>
                        <th>Options</th>    
                    </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                (rec, _) =>(
                                <tr key={rec.id}>
                                    <td>{rec.id}</td>
                                    <td>{rec.name}</td>
                                    <td>{rec.address}</td>
                                    <td>{rec.salary}</td>
                                    <td>
                                        <button onClick={() => handleEdit(rec)} className='btn btn-info m-2'>Edit</button>
                                        <button onClick = {() => handleDelete(rec)}className='btn btn-info m-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>    
                </table>    
            </div>    
            <div className='col-md-4 m-3'>
                <h1>Employee Management Software</h1>
                <hr />
                <div>
                    <input type="text" value={form.id} className='form-control m-3' name='id' placeholder='Enter the Id' onChange={(e) => onChange(e)} />
                    <input type="text" value={form.name} name='name' className='form-control m-3' placeholder='Enter the name' onChange={(e) => onChange(e)} />
                    <input type="text" name='address'value={form.address} placeholder='Enter the address'  className='form-control m-3' onChange={(e) => onChange(e)} />
                    <input type="text"  className='form-control m-3' value={form.salary} name='salary' placeholder='Enter the salary' onChange={(e) => onChange(e)} />
                    <div>
                        <button className='btn btn-primary m-3' onClick={handleAdd}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button className='btn btn-secondary m-3'onClick={handleUpdate}>
                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
