const process = require('child_process');

module.exports = function (command) {
  return new Promise(function (resolve, reject) {
    const git = process.spawn('git', command);
    let out = [];
    git.stdout.on('data', (data) => {
      out.push(data);
    });
    git.stderr.on('data', (data) => {
      out.push(data);
    });
    git.on('close', (code) => {
      if (code !== 0){
        return reject(`${out} child process exited with code ${code}`)
      }
      return resolve(out.toString());
    });
  });
};