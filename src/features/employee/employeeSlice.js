import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from "./employeeAPI";

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
  "employees/fetchemployees",
  async () => {
    const response = await fetchEmployees();
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
  },
});
export const employeeState = (state) => state.employees.employees;

export const { fetchemployees, addemployee, deleteemployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
