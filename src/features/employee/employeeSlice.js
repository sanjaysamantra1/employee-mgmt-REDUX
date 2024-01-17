import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEmployees, deleteEmployee } from "./employeeAPI";

const initialState = {
  employees: [],
};

export const fetchemployeeAsync = createAsyncThunk(
  "employees/fetchemployees",
  async () => {
    const response = await fetchEmployees();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteEmployeeAsync = createAsyncThunk(
  "employees/deleteEmployee",
  async (id) => {
    const response = await deleteEmployee(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchemployeeAsync.fulfilled, (state, action) => {
      state.employees.push(...action.payload);
    });
    builder.addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
      alert("deleted successfully");
      console.log(state, action);
      // state.employees.push(...action.payload);
    });
  },
});
export const employeeState = (state) => state.employees.employees;

export const { fetchemployees, addemployee, deleteemployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
