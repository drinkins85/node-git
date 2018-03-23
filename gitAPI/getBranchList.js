const executeGitCommand = require("./executeGitCommand");

module.exports = function () {
    let command = ['branch'];
    return executeGitCommand(command)
      .then( res => {
        let branches = res.split(/\n\s*/).filter((brName) => brName !== '');
        let current;

        for (let i=0; i< branches.length; i++){
          if (branches[i][0] === '*'){
            branches[i] = branches[i].slice(2);
            current = i;
            break;
          }
        }

        return {
          list: branches,
          current: current
        }
      });
};