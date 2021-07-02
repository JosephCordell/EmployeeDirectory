import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Header from './components/Header';



function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFiltersEmployees] = useState([])
  const [search, setSearch ] = useState()

  const filter = (e) => {
        const keyword = (e.target.value)
        if (keyword !== '') {
          const results = employees.filter((employee) => {
             return employee.name.first.toLowerCase().startsWith(keyword.toLowerCase()) || employee.name.last.toLowerCase().startsWith(keyword.toLowerCase())
          })
          setFiltersEmployees(results)
          setSearch(keyword.length)
        } else {
          setFiltersEmployees([])
          setSearch(keyword.length)
        }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://randomuser.me/api/?results=10');
      setEmployees(request.data.results);
    }

    fetchData();
  }, []);





  return (
    <div >
      <Header filter={filter} /> 
      <Table employees={((filteredEmployees.length > 0  || search > 0 ) ? filteredEmployees : employees)} />

    </div>
  );
}

export default App;
