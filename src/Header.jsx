import getTeamNameByTag from './teamList';

let Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className="container bg-primary text-white">
            <div className="row justify-content-center mt-3 mb-4" >
                <div className="col-8">
                    <h1>Team Member Allocation</h1>
                    <h3>{getTeamNameByTag(selectedTeam)} has {teamMemberCount} {teamMemberCount === 1?"member":"members"}.</h3>
                </div>
            </div>
        </header>
    )
};
export default Header;