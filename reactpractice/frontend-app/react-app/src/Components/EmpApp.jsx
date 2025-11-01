import React, { useEffect, useState } from "react";
import { EmployeeService } from "../Services/EmployeeService";

export default function EmpApp() {
  const [records, setRecords] = useState([]);
  const [emp, setEmp] = useState({
    id: 0,
    name: "guest",
    address: "none",
    salary: 0,
  });
  /*
    emp - This is the state variable that holds the current value
    setEmp - This is the function you use to update the state
  */
  useEffect(() => {
    EmployeeService.getAll().then(setRecords); //connect to backend and fetch the data to the records collection
  }, []);

  function handleOnChangeAdd() {
    const empdata = {...emp, salary: Number(emp.salary)}
    EmployeeService.addRec(empdata);
    setTimeout(() => {
      EmployeeService.getAll().then(setRecords);
    }, 100);
  }

  function handleOnChangeDelete(id) {
    EmployeeService.deleteRec(id).then(() => {
      EmployeeService.getAll().then(setRecords);
    });
    //for refreshing we are doing it
    // (() => {EmployeeService.getAll().then(setRecords)})
    // if I dont have written that it will work but i have to refresh the page always
  }

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };


  function handleOnChangeEdit() {

    EmployeeService.updateRec(emp).then(() => {
      EmployeeService.getAll().then(setRecords);
   });
  }

  const handleChangeEdit = function (e) {
      console.log(e)
      console.log(e.name)
      setEmp({
        id: e.id,
        name: e.name,
        address: e.address,
        salary: e.salary
      })
  };
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
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleOnChangeEdit}
          >
            Update
          </button>
        </div>
        <div>
          <div className="mb-1">
            <input
              type="text"
              value={emp.id}
              name="id"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter the id"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={emp.name}
              name="name"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter the Name"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={emp.address}
              name="address"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter the Address"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={emp.salary}
              name="salary"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter the Salary"
            />
          </div>
        </div>
      </div>
      <div>
        <table
          className="table table-primary table-responsive"
          style={{ width: "50dvw" }}
        >
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
            {records.map((r) => {
              return (
                <tr key={r.id} style={{ textAlign: "center" }}>
                  <td>{r.id}</td>
                  <td>{r.name}</td>
                  <td>{r.address}</td>
                  <td>{r.salary}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleChangeEdit(r)
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleOnChangeDelete(r.id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div></div>
    </>
  );
}
