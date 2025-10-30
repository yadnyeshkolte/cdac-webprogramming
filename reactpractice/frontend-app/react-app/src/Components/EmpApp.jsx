import React, { useEffect, useState } from "react";
import { EmployeeService } from "../Services/EmployeeService";

export default function EmpApp() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        EmployeeService.getAll().then(setRecords); //connect to backend and fetch the data to the records collection
    })
    return(
        <>
            <div>
                <table>
                    <thead>
                        <td>Emp: Id</td>
                        <td>Employee Name</td>
                        <td>Address</td>
                        <td>Salary</td>
                    </thead>
                    {
                        records.map((r) => {
                            return(
                                <tr>
                                    <td>{r.id}</td>
                                    <td>{r.name}</td>
                                    <td>{r.address}</td>
                                    <td>{r.salary}</td>
                                </tr>
                            )
                        })
                    }
                </table>

                <div
                    class="table-responsive"
                >
                    <table
                        class="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Column 1</th>
                                <th scope="col">Column 2</th>
                                <th scope="col">Column 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">R1C1</td>
                                <td>R1C2</td>
                                <td>R1C3</td>
                            </tr>
                            <tr class="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    ) 
}
