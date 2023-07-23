export const makeTeams = (members: string[], teamMemberSize: number) => {
  const teams: string[][] = [];

  members.map((member) => {
    const lastTeam = teams[teams.length - 1];

    if (lastTeam && lastTeam.length < teamMemberSize) {
      lastTeam.push(member);
      return;
    }

    teams.push([member]);
  });

  return teams;
};
