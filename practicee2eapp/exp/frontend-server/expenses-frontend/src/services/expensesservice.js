import axios from 'axios'

const base_url = "http://localhost:1234/expenses";

export const ExpensesServices = {
    getAll: async() => (await axios.get(base_url)).data,

    getbyid: async() => (await axios.get(`${base_url}/${id}`)).data,

    insert: async(rec) => (await axios.post(base_url, rec)).data,

    update: async(rec) => (await axios.put(`${base_url}/${rec.id}`, rec)).data,

    delete: async(id) => (await axios.delete(`${base_url}/${id}`)).data
    

}