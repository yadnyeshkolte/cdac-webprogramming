import React, { PureComponent, useState } from 'react';
import { EmployeeData } from '../Classes/EmployeeData';
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  Home2Outlined,
  CloudBolt1Bulk,
  CloudBolt1Outlined,
  CloudBolt1Duotone,
  CloudBolt1Solid,
  
} from "@lineiconshq/free-icons";

function EmployeeCURD(){
    const [employees, setemmployees] = useState(EmployeeData.getAll());

    return(
        <>
        <h3>Employee Management System</h3>
        <hr />
        <table>
            <thead>
                <td> Id. no </td> <td> Employee Name </td> <td> Address </td> <td> Salary </td>
                <td style={{color:"aqua"}}> Edit </td> 
                <td style={{color: "red"}}> Delete</td>
            </thead>
            {employees.map(e => {
                return(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.address}</td>
                    <td>{e.salary}</td>
                    <td><button> <Lineicons icon={Home2Outlined} size={24} color="blue" strokeWidth={1.5} /></button></td>
                    <td><button> <Lineicons icon={CloudBolt1Outlined} size={24} color="blue" strokeWidth={1.5} /></button></td>
                    
                </tr>
                )
            })}
        </table>
        </>
    )
}

export default EmployeeCURD;