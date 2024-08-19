// src/components/CustomerForm.js
import React, { useState } from "react";

function CustomerForm({ onSubmit }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    organization: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
    setCustomer({
      name: "",
      phone: "",
      email: "",
      address: "",
      organization: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={customer.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={customer.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={customer.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization"
        value={customer.organization}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerForm;
