const executeGitCommand = require("./executeGitCommand");

module.exports = function (branchName) {
  let command = ['checkout', branchName];
  return executeGitCommand(command)
    .then(res => branchName)
    .catch( err => {
      console.log("err", err);
    });
};

