import {useState} from 'react';
import employeeList from './employeeList';
import femaleProfile from './Images/female.png';
import maleProfile from './Images/male.png';
import otherProfile from './Images/other.png';

let Employees = () => {
    const [employees, setEmployees] = useState(employeeList);
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    {
                        employees.map((employee) => (
                            <div id={employee.id} className="card">
                                <img src={femaleProfile} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Full name: {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation:</b>{employee.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
};
export default Employees;