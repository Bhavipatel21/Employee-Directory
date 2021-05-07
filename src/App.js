import React from "react";
import AppHeader from "./components/Header";
import SearchBar from "./components/SearchEmployee";
import EmployeeTable from "./components/EmployeeTable";
import './App.css';

function App() {
  return (
     <div>
    <AppHeader />
    <SearchBar />
    <EmployeeTable />
    
    </div>
    
  );
}

export default App;
