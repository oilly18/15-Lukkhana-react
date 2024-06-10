import React, { useState } from "react";
import Table from "./Table";

const AdminPage = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    const newEmployee = { name, lastname, position };
    setEmployees([...employees, newEmployee]);
    setName("");
    setLastname("");
    setPosition("");
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Create User Here</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={addEmployee}>Add</button>
      </div>
      <Table data={employees} onDelete={deleteEmployee} />
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => deleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};
export default AdminPage;
