const executeGitCommand = require("./executeGitCommand");
const filelistFormatter = require("./filelistFormatter");

module.exports = function (commitHash) {
  let command = ['cat-file','-p', commitHash];
  return executeGitCommand(command)
    .then( res => {
      let commitRows = res.split('\n');
      let commitTree = commitRows[0].split(' ')[1];
      //console.log(commitTree);
      let treeCommand = ['cat-file','-p', commitTree];
      return executeGitCommand(treeCommand)
        .then(res => {
          return filelistFormatter(res);
        })
    });
};