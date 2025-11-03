import axios from 'axios'

const base_url = "http://localhost:1234/books" 

export const LibraryService = {
    getAll: async () => (await axios.get(base_url)).data,
    
    getById: async (book_id) => (await axios.get(`${base_url}/${book_id}`)).data,
    
    add: async (rec) => (await axios.post(base_url, rec)).data,
    
    update: async (rec) => (await axios.put(`${base_url}/${rec.book_id}`, rec)).data,
    
    delete: async (book_id) => (await axios.delete(`${base_url}/${book_id}`)).data,
};