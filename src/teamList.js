export const teamList = [
    {
        tag: "teamA",
        name: "Team Create"
    },
    {
        tag: "teamB",
        name: "Team Transport"
    },
    {
        tag: "teamC",
        name: "Team Destroy"
    },
    {
        tag: "teamD",
        name: "Team Rebuild"
    },
];

const getTeamNameByTag = (tag) => {return teamList.filter((team) => team.tag === tag)[0].name};

export default getTeamNameByTag;