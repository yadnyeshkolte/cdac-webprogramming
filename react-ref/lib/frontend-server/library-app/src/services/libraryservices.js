import axios from 'axios'

const base_url = "http://localhost:1234/books" 

export const LibraryService = {
    getAll: async () => (await axios.get(base_url)).data,
    
    getById: async (id) => (await axios.get(`${base_url}/${id}`)).data,
    
    add: async (rec) => (await axios.post(base_url, rec)).data,
    
    update: async (rec) => (await axios.put(`${base_url}/${rec.id}`, rec)).data,
    
    delete: async (id) => (await axios.delete(`${base_url}/${id}`)).data,
};