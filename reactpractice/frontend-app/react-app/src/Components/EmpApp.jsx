import React, { useEffect, useState } from "react";
import { EmployeeService } from "../Services/EmployeeService";

export default function EmpApp() {
    const [records, setRecords] = useState([]);
    const [emp, setEmp] = useState({ id: 0, name: "guest", address: "none", salary: 0 });
    useEffect(() => {
        EmployeeService.getAll().then(setRecords); //connect to backend and fetch the data to the records collection
    })
    function handleOnChangeAdd() {

    }
    return (
        <>
            <div style={{ width: "50dvw" }}>
                <div className="mb-1">
                    <button
                        type="button"
                        class="btn btn-warning mx-1"
                    >
                        Add
                    </button>
                </div>
                <div>

                    <div class="mb-1">
                        <input
                            type="text"
                            value={emp.id}
                            onChange={(e) => setEmp({ ...emp, id: e.target.value })}
                            class="form-control"
                            placeholder="Enter the id"
                        />
                    </div>
                    <div class="mb-1">
                        <input
                            type="text"
                            value={emp.name}
                            onChange={(e) => setEmp({ ...emp, name: e.target.value })}
                            class="form-control"
                            placeholder="Enter the Name"
                        />
                    </div>
                    <div class="mb-1">
                        <input
                            type="text"
                            value={emp.address}
                            onChange={(e) => setEmp({ ...emp, address: e.target.value })}
                            class="form-control"
                            placeholder="Enter the Address"
                        />
                    </div>
                    <div class="mb-1">
                        <input
                            type="text"
                            value={emp.salary}
                            onChange={(e) => setEmp({ ...emp, salary: e.target.value })}
                            class="form-control"
                            placeholder="Enter the Salary"
                        />
                    </div>

                </div>
            </div>
            <div>
                <table className="table table-primary table-responsive" style={{ width: "50dvw" }}>
                    <thead style={{ backgroundColor: "aqua", textAlign: "center" }}>
                        <td>Emp: Id</td>
                        <td>Employee Name</td>
                        <td>Address</td>
                        <td>Salary</td>
                        <td style={{ backgroundColor: "yellow" }}>Edit</td>
                        <td style={{ backgroundColor: "#FF474C" }}>Delete</td>

                    </thead>
                    {
                        records.map((r) => {
                            return (
                                <tr style={{ textAlign: "center" }}>
                                    <td>{r.id}</td>
                                    <td>{r.name}</td>
                                    <td>{r.address}</td>
                                    <td>{r.salary}</td>
                                    <td>
                                        <button>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button>
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>



        </>
    )
}
