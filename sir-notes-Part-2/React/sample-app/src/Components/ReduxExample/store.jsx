import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

//configureStore is used to create a store in React. 
export const store = configureStore({
    reducer:{
        user : userReducer
    },
})