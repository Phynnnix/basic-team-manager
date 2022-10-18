import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import employeeList from './employeeList';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Footer from './Footer';

function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || employeeList);
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "teamC");
  function handleTeamSelectionChange(ev){
    console.log(ev.target.value);
    setTeam(ev.target.value);
  }

  function handleEmployeeCardClick(ev){
      const transformedEmployees = employees.map((employee) => {
          if(employee.id !== parseInt(ev.currentTarget.id)){
              return employee;
          }
          if(employee.teamName === selectedTeam) return {...employee, teamName:''}
          return {...employee, teamName:selectedTeam}
      });
      setEmployees(transformedEmployees);
  }

  useEffect(() => {localStorage.setItem('employees', JSON.stringify(employees))}, [employees]);
  useEffect(() => {localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))}, [selectedTeam]);

  return (
    <div>
      <Router>
        <Nav />
        <Header selectedTeam={selectedTeam}
                teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
                />
        <Routes>
          <Route path="/" element={
            <Employees employees={employees}
                      selectedTeam={selectedTeam}
                      handleEmployeeCardClick={handleEmployeeCardClick}
                      handleTeamSelectionChange={handleTeamSelectionChange}
                      />
          }></Route>
          <Route path="/GroupedTeamMembers" element={
            <GroupedTeamMembers employees={employees}
                                selectedTeam={selectedTeam}
                                setTeam={setTeam}
                      />
          }></Route>
          <Route path="*" element={
            <NotFound />
          }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
