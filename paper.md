# Narayana Hospital - Outpatient Management System

## Project Requirement

Narayana Hospital wants to maintain a digital record of all patients visiting the hospital as Outpatients. Each patient's visit information must be stored with details such as Patient Name, Address, Contact Number, Date of Visit, and Doctor Name. 

You are required to develop a **React frontend** that communicates with an **Express.js REST API backend**, with patient data stored in a **MySQL database**. 

## Required Features

The application should provide the following features:

1. **Add a New Outpatient**
2. **Display All Outpatients Assigned to a Specific Doctor**

## Database Setup

Use the following queries to create the database:

```sql
-- Create Database & Table
CREATE DATABASE narayana_hospital;
USE narayana_hospital;

CREATE TABLE outpatient_info (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    contact_no VARCHAR(15) NOT NULL,
    date_of_visit DATE NOT NULL,
    doctor_name VARCHAR(100) NOT NULL
);

-- Insert Sample Data
INSERT INTO outpatient_info (patient_name, address, contact_no, date_of_visit, doctor_name) 
VALUES 
    ('Rahul Sharma', 'BTM Layout, Bangalore', '9876543210', '2025-03-01', 'Dr. Arjun Rao'),
    ('Priya Nair', 'Indiranagar, Bangalore', '9123456780', '2025-03-01', 'Dr. Arjun Rao'),
    ('Vikram Singh', 'JP Nagar, Bangalore', '9988776655', '2025-03-02', 'Dr. Sana Mirza');
```

---
