const executeGitCommand = require("./executeGitCommand");
const filelistFormatter = require("./filelistFormatter");

module.exports = function (branchName) {
  let command = ['cat-file','-p', branchName+'^{tree}'];
  return executeGitCommand(command)
    .then( res => {
        return filelistFormatter(res);
    });
};