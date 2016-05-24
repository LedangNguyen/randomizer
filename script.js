
var teams;
var members;
createTeams(2, 4);
getMyTeam();

function createTeams(team_count, members_count) {
    if (team_count > members_count) return 'Error: More teams, than humans.';
    teams = new Array(team_count);

    members = [];
    for (var i = 0; i < members_count; i++) {
        members.push(i);
    }

    var members_per_team = Math.floor(members_count / team_count);
    for (var i = 0; i < team_count; i++) {
        teams[i] = [];
        for (var j = 0; j < members_per_team; j++) {
            var random_member_index = Math.floor(Math.random() * members.length);
            var random_member = members[random_member_index];
            members.splice(random_member_index, 1);
            teams[i].push(random_member);
        }
    }
    var i = 0;
    while (members.length != 0) {
        teams[i];
        var random_member_index = Math.floor(Math.random() * members.length);
        var random_member = members[random_member_index];
        members.splice(random_member_index, 1);
        teams[i].push(random_member);
        i++;
    }
}

function getMyTeam(member_number) {
    for (var i = 0; i < teams.length; i++) {
        if (teams[i].indexOf(member_number) != -1) {
            alert("Ваша команда - №" + i);
            return;
        }
    }
    alert("Вы не входите не в одну из команд!");
}
