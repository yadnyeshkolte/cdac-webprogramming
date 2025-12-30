import React, { useEffect, useState } from 'react'
import { CustomerService } from '../services/customerservice';

export default function Customers() {
   //create UR States:
   const [ customers, setCustomers ] = useState([]);//Initially blank array..
   const [form, setForm] = useState({ id : 0, fullName : "" , phoneNo : 0, emailAddress : "" })

   //useEffect to fetch the records..
   useEffect(() => {
     CustomerService.getAll().then((data)=> setCustomers(data));
   }, [])
   
   ///////////////////UI related Operations//////////////////////////
   const handleChange =  (e) =>{
    setForm({...form, [e.target.name] : e.target.value})
   }
   const handleAdd = async () =>{
    if(!form.fullName || !form.emailAddress || !form.phoneNo){
        alert("Details not set, validation failed");
        return;
    }
    const newRec = await CustomerService.add(form);
    setCustomers([...customers, newRec]);
   }
   //rest do it URself....
    return (
        <>
        <h1 className='h1 text-danger'>Customer Management Sofware</h1><hr />
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="container">
                        <div className="row">
                            {
                                customers.map(cst =>{
                                    return(
                                        <div key={cst.id} className='col-md-6'>
                                            <div className="card">
                                                <div className="card-title text-primary text-center" >{cst.fullName}</div>
                                                <hr />
                                                <div className="card-body">
                                                    <p>Contact No: {cst.phoneNo}</p>    
                                                    <p>Contact No: {cst.emailAddress}</p>    
                                                </div>    
                                            </div>   
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>New Record Adding</h2>
                    <hr />
                    <input className='form-control m-3' name='fullName' value={form.fullName} onChange={handleChange} placeholder='FullName'/>
                    <input className='form-control m-3' name='phoneNo' value={form.phoneNo} onChange={handleChange} placeholder='phoneNo'/>
                    <input className='form-control m-3' name='emailAddress' value={form.emailAddress} onChange={handleChange} placeholder='emailAddress'/>
                    <button onClick={handleAdd} className='btn btn-danger'>Add record</button>
                </div>
            </div>
        </div>
        </>
  )
}
