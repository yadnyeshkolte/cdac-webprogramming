import { useState, useEffect } from "react";
import React from "react";
import { ExpensesServices } from "../services/expensesservice";
export default function Expenses(){

    const [expen, setExpen] = useState([])

    const [exp, setExp] = useState({id:0, amount:"", category:"", edesc:"", edate: ""})

    useEffect(() => {
        ExpensesServices.getAll().then(setExpen)
    })

    const handleChange = (e) => {
        setExp({...exp, [e.target.name]: e.target.value})
    }
    
    function handleAdd(){
        if(!exp?.amount || !exp?.category || !exp?.edesc || !exp?.edate){
            alert("Fill Full Form")
            return
        }
        ExpensesServices.insert(exp).then(() => {
            ExpensesServices.getAll().then(setExpen)
        })
    }
    function handleDelete(e){
        ExpensesServices.delete(e).then(() => {ExpensesServices.getAll().then(setExpen)})
    }

    function handleEdit(){
        if(!exp?.amount || !exp?.category || !exp?.edesc || !exp?.edate){
            alert("Fill Full Form")
            return
        }
        ExpensesServices.update(exp).then(() => {ExpensesServices.getAll().then(setExpen)})
    }
    function OnChangeEdit(e){
        setExp({
            id : e.id,
            amount: e.amount,
            category: e.category,
            edesc: e.edesc,
            edate: e.edate
        })
    }
    function handleClear(){
        setExp({})
    }
    return(
        <>
            <div className="constainer row">
                <div className="col-md-8 row" >
                    {
                        expen.map((e) => {
                            return(
                            <div key={e.id} className="col-md-3 mx-2 mt-3 bg-info-subtle p-3" style={{borderRadius:"40px"}}>
                                <div className="card-title">
                                    <h3>{e.amount}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{e.category}</p>
                                    <p>{e.edesc}</p>
                                    <p>{e.edate}</p>
                                </div>
                                <button className="btn btn-danger position-relative top-0 end-0"
                                    onClick={()=>{handleDelete(e.id)}} >X</button>
                                <button onClick={()=>{OnChangeEdit(e)}}
                                className="btn btn-warning position-relative top-20 end-0">E</button>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="col-md-4 bg-warning-subtle mt-2">
                    <h3 className="mt-4">Add/Update Expenses</h3>
                    <hr />
                    <div className="">
                        <input 
                            className="form-control" 
                            type="number" 
                            placeholder="Enter the amount here"
                            value={exp?.amount || ""}
                            name="amount"
                            onChange={handleChange}
                        />
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Enter the category here"
                            value={exp?.category || ""}
                            name="category"
                            onChange={handleChange}
                        />
                        <input 
                            className="form-control" 
                            type="textarea" 
                            placeholder="Enter the Description here"
                            value={exp?.edesc || ""}
                            name="edesc"
                            onChange={handleChange}
                        />
                        <input 
                            className="form-control" 
                            type="date" 
                            placeholder="Enter the amount here"
                            value={exp?.edate || ""}
                            name="edate"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={handleAdd}>Add</button>
                    <button className="btn btn-warning"onClick={handleEdit}>Update</button>
                    <button className="btn btn-success" onClick={handleClear} >Clear</button>
                </div>
            </div>
        </>
    )

}