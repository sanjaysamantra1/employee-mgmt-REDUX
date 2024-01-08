import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeState, fetchemployeeAsync } from "./employeeSlice";

export default function EmployeeList() {
  const employees = useSelector(employeeState);
  const dispatch = useDispatch();
  console.log(employees);

  return (
    <>
      <h1>Employee List</h1>
      <button
        onClick={() => {
          dispatch(fetchemployeeAsync());
        }}
      >
        Fetch Employees
      </button>

      <table className="table table-bordered table-striped">
        <tbody>
          {employees.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.firstName}</td>
                <td>{emp.email}</td>
                <td>{emp.sal}</td>
                <td>
                    <button>DEL</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
