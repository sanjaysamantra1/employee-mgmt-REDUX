import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import employeesReducer from "../features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    employees: employeesReducer,
  },
});
