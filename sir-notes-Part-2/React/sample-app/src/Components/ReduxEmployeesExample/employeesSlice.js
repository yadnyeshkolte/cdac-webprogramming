import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EmployeeService } from "../../services/empService"

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => await EmployeeService.getAll())

export const addEmployee = createAsyncThunk('employees/addEmp', async (emp)=> await EmployeeService.add(emp));

export const updateEmployee = createAsyncThunk('employees/updateEmp', async (emp) => await EmployeeService.update(emp));

export const deleteEmployee = createAsyncThunk('employees/deleteEmp', async (id) => await EmployeeService.delete(id));

const employeesSlice = createSlice({
    name : 'employees', 
    initialState : {
        list : [], loading: false, error: null
    },
    reducers:  {},
    extraReducers :  builder =>{
    builder
      .addCase(fetchEmployees.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {//when add is operated
        state.loading = false;
        state.list = action.payload;//U shall add the added data
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => { //data is added
        state.list.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => { //updating
        const index = state.list.findIndex(u => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.list = state.list.filter(u => u.id !== action.payload);
      });
    },
})

export default employeesSlice.reducer;