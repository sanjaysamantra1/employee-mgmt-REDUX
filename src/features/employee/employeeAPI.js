import axios from "axios";

export function fetchEmployees() {
  return axios.get("http://localhost:4000/employees");
}
export function deleteEmployee(id) {
  return axios.delete(`http://localhost:4000/employees/${id}`);
}
