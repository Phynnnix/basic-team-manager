import { useState } from "react";

import {teamList} from './teamList';
import getTeamNameByTag from './teamList';

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
        return teamList.map((team) => {
            return {
                teamTag: team.tag,
                teamMembers: employees.filter((employee) => {
                    return employee.teamName === team.tag;
                }),
                collapsed: team.tag === selectedTeam ? false : true
            }
        });
    }

    function handleTeamClick(ev){
        var transformedGroupedEmployees = groupedEmployees.map((group) => {
            return (group.teamTag === ev.currentTarget.id)?{...group, collapsed: !group.collapsed}:group;
        });
        setGroupedData(transformedGroupedEmployees);
        setTeam(ev.currentTarget.id);
    }

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <h1>Team Members grouped by Team</h1>
                    {
                        groupedEmployees.map((group) =>{
                            return (
                                <div key={group.teamTag} className="card mt-2" style={{cursor: "pointer"}}>
                                    <h4 id={group.teamTag} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                        Team Name: {getTeamNameByTag(group.teamTag)}
                                    </h4>
                                    <div id={"collapse_" + group.teamTag} className={group.collapsed === true?"collapse":""}>
                                    <hr/>
                                    {
                                        group.teamMembers.map((employee) => {
                                            return (
                                                <div key={employee.id} className="mt-2">
                                                    <h5 className="card-title mt-2">
                                                        <span className="text-dark">Full Name: {employee.fullName}</span>
                                                    </h5>
                                                    <p>Designation: {employee.designation}</p>
                                                </div>
                                            );
                                        })
                                    }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default GroupedTeamMembers;