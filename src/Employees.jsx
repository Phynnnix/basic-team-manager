import femaleProfile from './Images/female.png';
import maleProfile from './Images/male.png';
import otherProfile from './Images/other.png';
import getTeamNameByTag from './teamList';

let Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="teamA">{getTeamNameByTag("teamA")}</option>
                        <option value="teamB">{getTeamNameByTag("teamB")}</option>
                        <option value="teamC">{getTeamNameByTag("teamC")}</option>
                    </select>
                </div>
                <div className="col-8">
                    <div className="card-collection">
                    {
                        employees.map((employee) => { return (
                            <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam)?"card m-2 standout":"card m-2"} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                                {(employee.gender === "other")?<div className="card-img-top card-profile-surrounding"><div className="card-profile-frame" style={{backgroundImage: `url(${otherProfile})`}}></div></div>:null}
                                {(employee.gender === "female")?<div className="card-img-top card-profile-surrounding"><div className="card-profile-frame" style={{backgroundImage: `url(${femaleProfile})`}}></div></div>:null}
                                {(employee.gender === "male")?<div className="card-img-top card-profile-surrounding"><div className="card-profile-frame" style={{backgroundImage: `url(${maleProfile})`}}></div></div>:null}
                                <div className="card-body">
                                    <h5 className="card-title">Full name: <br/>{employee.fullName}</h5>
                                    <p className="card-text"><b>Designation: </b><br/>{employee.designation}</p>
                                </div>
                            </div>
                        )})
                    }
                    </div>
                </div>
            </div>
        </main>
    )
};
export default Employees;