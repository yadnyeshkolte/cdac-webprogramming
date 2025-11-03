Customer.jsx
```js
import React, { useEffect, useState } from 'react';
import { CustomerService } from '../services/customerservice';

// Initial form state - centralized for reusability
const INITIAL_FORM_STATE = {
  id: 0,
  fullName: '',
  phoneNo: '',
  emailAddress: ''
};

export default function Customers() {
  // State management
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch customers on component mount
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await CustomerService.getAll();
        setCustomers(data);
      } catch (error) {
        console.error('Failed to fetch customers:', error);
        alert('Failed to load customers');
      }
    };
    
    fetchCustomers();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Validate form inputs
  const validateForm = () => {
    if (!form.fullName.trim() || !form.emailAddress.trim() || !form.phoneNo) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  };

  // Add new customer
  const handleAdd = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const newCustomer = await CustomerService.add(form);
      setCustomers(prev => [...prev, newCustomer]);
      setForm(INITIAL_FORM_STATE); // Reset form after successful add
      alert('Customer added successfully!');
    } catch (error) {
      console.error('Failed to add customer:', error);
      alert('Failed to add customer');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      
      <div className="container">
        <div className="row">
          {/* Customer List Section */}
          <div className="col-md-8">
            <div className="container">
              <div className="row">
                {customers.length === 0 ? (
                  <p className="text-muted">No customers found. Add your first customer!</p>
                ) : (
                  customers.map(customer => (
                    <div key={customer.id} className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-title text-primary text-center pt-3">
                          {customer.fullName}
                        </div>
                        <hr />
                        <div className="card-body">
                          <p><strong>Phone:</strong> {customer.phoneNo}</p>
                          <p><strong>Email:</strong> {customer.emailAddress}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Add Customer Form Section */}
          <div className="col-md-4">
            <h2>Add New Customer</h2>
            <hr />
            
            <input
              className="form-control mb-3"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              disabled={isLoading}
            />
            
            <input
              className="form-control mb-3"
              name="phoneNo"
              type="tel"
              value={form.phoneNo}
              onChange={handleChange}
              placeholder="Phone Number"
              disabled={isLoading}
            />
            
            <input
              className="form-control mb-3"
              name="emailAddress"
              type="email"
              value={form.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              disabled={isLoading}
            />
            
            <button
              onClick={handleAdd}
              className="btn btn-danger"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add Customer'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
```