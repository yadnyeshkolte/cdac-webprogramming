
import axios from "axios"
const API_URL = "http://localhost:3000/employees"

export const EmployeeService = {
    getAll: async () => {
        const res = await axios.get(API_URL);
        return res.data;
    },
    getById: async (id) => {
         //http://localhost:3000/employees --> API_URL   /  3  --> id
        const res = await axios.get(`${API_URL}/${id}`)
        return res.data;
    },
    addRec: async (rec) => {
        const res = await axios.post(API_URL, rec)
        return res.data;
    },
    updateRec: async (rec) => {
        const res = await axios.put(`${API_URL}/${rec.id}`, rec)
        return res.data;
    },
    deleteRec: async (id) => {
        const res = await axios.delete(`${API_URL}/${id}`)
        return res.data;
    }
}
