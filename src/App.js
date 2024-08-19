// src/App.js
import React, { useState, useEffect } from "react";
import CustomerForm from "./Components/CustomerForm";
import CustomerGrid from "./Components/CustomerGrid";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  const handleCustomerSubmit = (customer) => {
    fetch("/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then(() => {
        setCustomers([...customers, customer]);
      });
  };

  return (
    <div>
      <h1>Customer CRM Application</h1>
      <CustomerForm onSubmit={handleCustomerSubmit} />
      <CustomerGrid customers={customers} />
    </div>
  );
}

export default App;
