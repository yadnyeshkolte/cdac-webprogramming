import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from './employeesSlice';
export default function EmployeeManager() {

    const dispatch = useDispatch();
    const { list, loading, error } = useSelector(state => state.employees);
    useEffect(()=>{
        dispatch(fetchEmployees())
    }, [dispatch])
    if(loading) return <p>Loading EmpList....</p>
    if(error) return <p>Something wrong happened: {error}</p>

    return (
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
                            list.map(
                                (rec, _) =>(
                                <tr key={rec.id}>
                                    <td>{rec.id}</td>
                                    <td>{rec.name}</td>
                                    <td>{rec.address}</td>
                                    <td>{rec.salary}</td>
                                    {/* <td>
                                        <button onClick={() => handleEdit(rec)} className='btn btn-info m-2'>Edit</button>
                                        <button onClick = {() => handleDelete(rec)}className='btn btn-info m-2'>Delete</button>
                                    </td> */}
                                </tr>
                            ))
                        }
                    </tbody>    
                </table>    
            </div>    
        </div>
        </div>
  )
}
