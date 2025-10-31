import React, { useEffect, useState } from "react";
import { EmployeeService } from "../Services/EmployeeService";

export default function EmpApp() {
    const [records, setRecords] = useState([]);
    const [emp, setEmp] = useState({ id: 0, name: "guest", address: "none", salary: 0 });
    useEffect(() => {
        EmployeeService.getAll().then(setRecords); //connect to backend and fetch the data to the records collection
    }, [])
    function handleOnChangeAdd() {

        EmployeeService.addRec(emp);
        setTimeout(() => {
             EmployeeService.getAll().then(setRecords)
        }, 100)
       
    }
    function handleOnChangeDelete(id){
        EmployeeService.deleteRec(id).then(() => {EmployeeService.getAll().then(setRecords)})
        //for refreshing we are doing it 
        // (() => {EmployeeService.getAll().then(setRecords)})
        // if I dont have written that it will work but i have to refresh the page always
    }
    return (
        <>
            <div style={{ width: "50dvw" }}>
                <div className="mb-1">
                    <button
                        type="button"
                        className="btn btn-warning mx-1"
                        onClick={handleOnChangeAdd}
                    >
                        Add
                    </button>
                </div>
                <div>

                    <div className="mb-1">
                        <input
                            type="text"
                            value={emp.id}
                            onChange={(e) => setEmp({ ...emp, id: Number(e.target.value) })}
                            className="form-control"
                            placeholder="Enter the id"
                        />
                    </div>
                    <div className="mb-1">
                        <input
                            type="text"
                            value={emp.name}
                            onChange={(e) => setEmp({ ...emp, name: e.target.value })}
                            className="form-control"
                            placeholder="Enter the Name"
                        />
                    </div>
                    <div className="mb-1">
                        <input
                            type="text"
                            value={emp.address}
                            onChange={(e) => setEmp({ ...emp, address: e.target.value })}
                            className="form-control"
                            placeholder="Enter the Address"
                        />
                    </div>
                    <div className="mb-1">
                        <input
                            type="text"
                            value={emp.salary}
                            onChange={(e) => setEmp({ ...emp, salary: Number(e.target.value) })}
                            className="form-control"
                            placeholder="Enter the Salary"
                        />
                    </div>

                </div>
            </div>
            <div>
                <table className="table table-primary table-responsive" style={{ width: "50dvw" }}>
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                        <th>Emp: Id</th>
                        <th>Employee Name</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th style={{ backgroundColor: "yellow" }}>Edit</th>
                        <th style={{ backgroundColor: "#FF474C" }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        records.map((r) => {
                            return (
                                <tr key={r.id} style={{ textAlign: "center" }}>
                                    <td>{r.id}</td>
                                    <td>{r.name}</td>
                                    <td>{r.address}</td>
                                    <td>{r.salary}</td>
                                    <td>
                                        <button>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {handleOnChangeDelete(r.id)}}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div>
                
            </div>
        </>
    )
}
