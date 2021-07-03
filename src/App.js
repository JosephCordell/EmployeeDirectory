import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFiltersEmployees] = useState([]);
  const [search, setSearch] = useState();
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
      setSearch(keyword.length);
    } else {
      setFiltersEmployees([]);
      setSearch(keyword.length);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://randomuser.me/api/?results=25');
      setEmployees(request.data.results);
    }

    fetchData();
  }, []);

  const sort = (column) => {
    const current =
      filteredEmployees.length > 0 ? filteredEmployees : employees;
    const updateSort = sortState
      ? current.sort((a, b) => {
          const nameA = a.name.first;
          const nameB = b.name.first;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        })
      : current.sort((a, b) => {
          const nameA = a.name.first;
          const nameB = b.name.first;
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          return 0;
        });

    setFiltersEmployees(updateSort);
    setSortState(!sortState);
  };

  return (
    <div>
      <Header filter={filter} />
      <Table
        employees={
          filteredEmployees.length > 0 || search > 0
            ? filteredEmployees
            : employees
        }
        sort={sort}
      />
    </div>
  );
}

export default App;
