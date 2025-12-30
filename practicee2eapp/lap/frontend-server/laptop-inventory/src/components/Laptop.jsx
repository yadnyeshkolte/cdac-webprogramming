import React from "react";
import { useState, useEffect } from "react";
import { LaptopServices } from "../services/laptopservices";

export default function Laptop(){
    const [laptops, setLaptops] = useState([])
    const [lap, setLap] = useState({})

    useEffect(() => {
        LaptopServices.getAll().then(setLaptops)
    })

    const onEdit = (e) => {
        setLap({...lap, [e.target.name]: e.target.value})
    }
    const clear = () => {
        setLap({});
    }

    function handleAdd(){
        if(!lap.brand_name ||){

        }
        LaptopServices.add(lap).then(() => {LaptopServices.getAll().then(setLaptops)})
    }
    return(
        <>
        <div>
            <div className="row">
                <div className="col-md-8" style={{backgroundColor:"red"}}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID no.</th>
                                <th>Brand Name</th>
                                <th>Model Name</th>
                                <th>Serial No.</th>
                                <th>Peripherals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                laptops.map((e) => {
                                    return(
                                        <tr key={e.id}>
                                            <td>{e.laptop_id}</td>
                                            <td>{e.brand_name}</td>
                                            <td>{e.model_name}</td>
                                            <td>{e.serial_no}</td>
                                            <td>{e.peripherals}</td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4" style={{backgroundColor:"yellow"}}>
                    <h3>Add / Update Form</h3>
                    <input className="form-control mb-2" type="text" name="brand_name" value={lap?.brand_name || ""} placeholder="Enter brand name" onChange={onEdit}/>
                    <input className="form-control mb-2" type="text" name="model_name" value={lap?.model_name || ""} placeholder="Enter model name" onChange={onEdit}/>
                    <input className="form-control mb-2" type="text" name="serial_no" value={lap?.serial_no || ""} placeholder="Enter serial number" onChange={onEdit} />
                    <input className="form-control mb-2" type="text" name="peripherals" value={lap?.peripherals || ""} placeholder="Enter peripherals" onChange={onEdit} />
                    <div>
                        <button className="btn btn-primary mx-2" onClick={handleAdd}>Add</button>
                        <button className="btn btn-warning mx-2">Update</button>
                        <button className="btn btn-success mx-2" onClick={clear}>Clear</button>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        </>

    )
}