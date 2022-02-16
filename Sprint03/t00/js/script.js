const superTeam = {
  title: prompt("The name of the team"),
  leader: prompt("The name of the teams leader"),
  member: prompt(
    "Names of the members of the team\nuse enter names separated by a comma!"
  ).split(","),
  memberCount: function () {
    let count = this.member.length + 1;
    return count;
  },
  agenda: String(prompt("Describing what are the goals and ideas of the team")),
  isEvil: String(prompt("Is the team evil or not\nEnter: true or false")),
};
alert(
  `Here's the team:\nname - ${superTeam.title}\nleader - ${
    superTeam.leader
  }\nmembers - ${
    superTeam.member
  }\nmemberCount - ${superTeam.memberCount()}\nagenda - ${
    superTeam.agenda
  }\nisEvil - ${superTeam.isEvil}`
);
