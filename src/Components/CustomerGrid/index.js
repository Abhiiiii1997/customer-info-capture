// src/components/CustomerGrid.js
import React from "react";

function CustomerGrid({ customers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Organization</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.name}</td>
            <td>{customer.phone}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.organization}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerGrid;
