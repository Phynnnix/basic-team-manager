
import {teamList} from './teamList';

const Teams = ({selectedTeam, handleTeamSelectionChange}) => {

    return (
        
    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
        {
            teamList.map((team) => {return (
                <option key={team.tag} value={team.tag}>{team.name}</option>
            )})
        }
    </select>

    )
}

export default Teams;