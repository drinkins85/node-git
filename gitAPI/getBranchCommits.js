const executeGitCommand = require("./executeGitCommand");

module.exports = function (branchName) {
  let command = ['log', '--pretty=format:%at|%H|%s'];
  return executeGitCommand(command)
    .then( res => {
      let commitsRow = res.split('\n');
      let commits = commitsRow.map(row => {
        let commit = {};
        let commitRowItems = row.split('|');
        commit.date = commitRowItems[0];
        commit.hash = commitRowItems[1];
        commit.subject = commitRowItems[2];
        return commit;
      });
      //console.log(commits);
      return commits
    });
};