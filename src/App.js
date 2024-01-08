import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import EmployeeList from "./features/employee/EmployeeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        =================================================
        <EmployeeList />
      </header>
    </div>
  );
}

export default App;
