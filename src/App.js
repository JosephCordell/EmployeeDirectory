import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFiltersEmployees] = useState([]);
  const [sortState, setSortState] = useState(true);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = employees.filter((employee) => {
        return (
          employee.name.first.toLowerCase().startsWith(keyword.toLowerCase()) ||
          employee.name.last.toLowerCase().startsWith(keyword.toLowerCase())
        );
      });
      setFiltersEmployees(results);
    } else {
      setFiltersEmployees(employees);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://randomuser.me/api/?results=25');
      setEmployees(request.data.results);
      setFiltersEmployees(request.data.results);
    }

    fetchData();
  }, []);

  const sort = (column) => {
    const columnArray = column.split('.');
    const current =
      filteredEmployees.length > 0 ? filteredEmployees : employees;
    const updateSort = current.sort((a, b) => {
      const nameA =
        columnArray.length === 1
          ? a[column]
          : a[columnArray[0]][columnArray[1]];
      const nameB =
        columnArray.length === 1
          ? b[column]
          : b[columnArray[0]][columnArray[1]];
      if (nameA < nameB) {
        return sortState ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortState ? 1 : -1;
      }
      return 0;
    });

    setFiltersEmployees(updateSort);
    setSortState(!sortState);
  };

  return (
    <div>
      <Header filter={filter} />
      <Table employees={filteredEmployees} sort={sort} />
    </div>
  );
}

export default App;
