import React from 'react';
import './App.css';
import JsonSchemaForm from "./JsonSchemaForm";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
        <h1>Dashboard</h1>
        <Dashboard />
      <JsonSchemaForm />
    </div>
  );
}

export default App;
