const executeGitCommand = require("./executeGitCommand");
const filelistFormatter = require("./filelistFormatter");

module.exports = function (treeHash) {
  let command = ['cat-file','-p', treeHash];
  return executeGitCommand(command)
    .then( res => {
      return filelistFormatter(res);
    });
};