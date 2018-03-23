const executeGitCommand = require("./executeGitCommand");

module.exports = function (fileHash) {
  let command = ['show', fileHash];
  return executeGitCommand(command);
};