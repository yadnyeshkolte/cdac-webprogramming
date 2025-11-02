import React, { useEffect, useState } from "react";
import { CustomerService } from "../services/customerservice";
export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const [cus, setCus] = useState();

  useEffect(() => {
    CustomerService.getAll().then(setCustomer);
  }, []);

  function handleAdd(){

    if (!cus?.fullName || !cus?.phoneNo || !cus?.emailAddress) {
        alert("Enter all the fields")
        return;
    }

    CustomerService.add(cus).then(() => {
        CustomerService.getAll().then(setCustomer);
    })
    setCus({})
  }

  function handleDelete(id){
    CustomerService.delete(id).then(() => {
      CustomerService.getAll().then(setCustomer);
    });
  };


  const handleChange = (e) => {
    setCus({...cus, [e.target.name]: e.target.value})
  }
  const handleClear = () => {
    setCus({})
  }

  function handleEdit(){
    console.log(cus)
    if (!cus?.fullName || !cus?.phoneNo || !cus?.emailAddress) {
        alert("You fucking dumb! Just edit what is given")
        return;
    }
    CustomerService.update(cus).then(() => {
        CustomerService.getAll().then(setCustomer);
    })
  }
  const onChangeEdit= (e) => {
    setCus({
        id: e.id,  
        fullName: e.fullName,
        phoneNo: e.phoneNo,
        emailAddress: e.emailAddress

    })
  }
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-8">
            {" "}
            {/*remember to remove it */}
            <div className="container row ">
              {customer.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="card text-start col-md-3 mx-4 mb-2 bg-warning-subtle"
                  >
                    <div className="card-body">
                      <button className="btn btn-link position-absolute top-0 end-0 text-danger p-2"
                      onClick={() => {handleDelete(c.id)}}
                      >
                        <i className="fa-solid fa-trash"></i> {/*delete One */}
                      </button>

                      <button className="btn btn-link position-absolute top-40 end-0 text-info p-2 mt-3"
                        onClick={() => {onChangeEdit(c)}}
                      >
                        <i className="fa-solid fa-pen"></i>    {/*Update One */}
                      </button>

                      <h4 className="card-title">{c.fullName}</h4> 
                      <div className=" card-body p-md-0">
                        <p>
                          <b>Ph: </b>
                          {c.phoneNo}
                        </p>
                        <p>
                          <b>Email: </b>
                          {c.emailAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            {/*remember to remove it */}
            <div className="container mt-2">
            <h3 className="">Add/Update Customers</h3>
            <hr />
              <div className="mb-3">
                <input
                  value={cus?.fullName || ""}
                  type="text"
                  className="form-control"
                  name="fullName"
                  aria-describedby="helpId"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  value={cus?.phoneNo || ""}
                  type="number"
                  className="form-control"
                  name="phoneNo"
                  aria-describedby="helpId"
                  placeholder="Enter your Phone No"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  value={cus?.emailAddress || ""}
                  type="email"
                  className="form-control"
                  name="emailAddress"
                  aria-describedby="emailHelpId"
                  placeholder="abc@mail.com"
                  onChange={handleChange}
                />
              </div>

              <button type="button" className="btn btn-warning mx-2"
                onClick={handleAdd}
                >
                Add
              </button>

              <button type="button" className="btn btn-primary mx-2"
                    onClick={handleEdit}
                >

                Update
              </button>

                <button type="button" className="btn btn-success mx-2"
                onClick={handleClear}
                >

                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
