import React from "react";

import { StudentServices } from "../services/studentservices";
import { useState, useEffect } from "react";

export default function Student(){
    const [students, studentsSet] = useState([]);
    const [stu, setStu] = useState({id:0, name:"", dob:"", mobileNo:"", email:"", course_id:""})
    useEffect(() => {
        StudentServices.getAll().then(studentsSet)
    }, [handleAdd, handleDelete, handleUpdate])

    const handlechange = (e) => {
        setStu({...stu, [e.target.name]: e.target.value})
    }
    function handleAdd(){
        if(!stu?.name || !stu?.dob || !stu?.mobileNo || !stu?.email || !stu?.course_id){
            alert("Fill whole form")
            return
        }
        StudentServices.insert(stu).then(() => {
            StudentServices.getAll().then(studentsSet);
        })
    }
    function handleDelete(eid){
        StudentServices.deleteit(eid).then(() => {
            StudentServices.getAll().then(studentsSet)
        })
    }
    function handleUpdate(){
        StudentServices.update(stu).then(() => {
            StudentServices.getAll().then(studentsSet)
        })
    }
    function handleEdit(e){
        const formDate = e.dob ? e.dob.split('T')[0] : "";
        setStu({
            id: e.id,
            name: e.name,
            dob: formDate,
            mobileNo: e.mobileNo,
            email: e.email,
            course_id: e.course_id
        })
    } 
    function handleClear(){
        setStu({})
    }
    return(
        <>
        <div className="container row">
            <div className="col-md-8">

                <div className="container row">
                        <table className="table table-primary">
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Dob</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                                <th>Course Id</th>
                                <th>Edit</th>
                                <th className="">Delete</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((e) => {
                                        return(
                                            <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{new Date(e.dob).toLocaleDateString().split('T')[0]}</td>
                                            <td>{e.mobileNo}</td>
                                            <td>{e.email}</td>
                                            <td>{e.course_id}</td>
                                            <td>
                                                <button onClick={() => handleEdit(e)}>Edit</button>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(e.id)}>Delete</button>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                </div>
            </div>

            <div className="col-md-4">
                <input type="text" className="form-control" value={stu?.name || ""} name="name" placeholder="Enter the name"
                onChange={handlechange}/>
                <input type="date" className="form-control" value={stu?.dob || ""} name="dob" placeholder="Enter Date"
                onChange={handlechange}/>
                <input type="number" className="form-control" value={stu?.mobileNo || ""} name="mobileNo" placeholder="Enter Mobile No"
                onChange={handlechange}/>
                <input type="email" className="form-control" value={stu?.email || ""} name="email" placeholder="Enter Email"
                onChange={handlechange}/>
                <input type="number" className="form-control" value={stu?.course_id || ""} name="course_id" placeholder="Enter course id"
                onChange={handlechange}/>

                <div className="container row ">
                    <button className="btn btn-primary mx-2 col-md-3"
                        onClick={handleAdd}
                    > Add</button>
                    <button className="btn btn-warning mx-2 col-md-3"
                        onClick={handleUpdate}
                    > Update</button>
                    <button className="btn btn-success mx-2 col-md-3"
                        onClick={handleClear}
                    > Clear</button>
                </div>
            </div>
            

        </div>
        </>
    )
}