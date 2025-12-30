//This service shall perform CRUD operations on UR back end server
import axios from 'axios'//npm install axios
const API_URL = "http://localhost:3000/employees"

//Axios is framework for making API calls in React. It is installed using npm. 
//Service layer is a design pattern where we separate the API Call functions from the Components in an Application. The Components make calls to the APIs using the service. This is common among all the technologies. 
export const EmployeeService = {
    //U R Creating Functions that shall be called by the Components for each of its operations.  
    getAll : async () =>{
        const res = await axios.get(API_URL);//all functions of axios return Promise
        return res.data;
     },
     getById : async (id) =>{
        const rec = await axios.get(`${API_URL}/${id}`);
        return rec.data;
     },
     add : async (rec) =>{
        const res = await axios.post(API_URL, rec);
        return res.data;
     },
     update  :async (rec) =>{
        const res = await axios.put(`${API_URL}/${rec.id}`, rec)
        return res.data;

     },
     delete : async (id) =>{
        const res = await axios.delete(`${API_URL}/${id}`)
        return res.data;
     }     
}
