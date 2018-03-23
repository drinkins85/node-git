const express = require('express');
const childProcess = require('child_process');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/git', (req, res) => {
  // const git = process.spawn('git', ['status']);
  const git = childProcess.spawn('ls');
  const out = [];
  git.stdout.on('data', (data) => {
    out.push(data);
  });
  git.stderr.on('data', (data) => {
    out.push(data);
  });
  git.on('close', (code) => {
    console.log(out.toString());
    res.send(`Hello, Git ${out.toString()}`);
  });
});

app.listen(port, host);

console.log(`App listen on port ${port}`);
