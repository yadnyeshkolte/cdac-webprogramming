import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './employeesSlice';

export const employeeStore = configureStore({
    reducer: {
        employees : employeesReducer,
    }
})