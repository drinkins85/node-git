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
  const git = childProcess.spawn('git', ['status']);
  // const git = childProcess.spawn('ls');
  const out = [];
  git.stdout.on('data', (data) => {
    out.push(data);
  });
  git.stderr.on('data', (data) => {
    out.push(data);
  });
  git.on('close', (code) => {
    console.log(out.toString());
    res.send(`${out.toString()}`);
  });
});

app.get('/gitcwd', (req, res) => {
  const cwd = req.query.cwd;
  const git = childProcess.spawn('git', ['status'], { cwd });
  // const git = childProcess.spawn('ls');
  const out = [];
  git.stdout.on('data', (data) => {
    out.push(data);
  });
  git.stderr.on('data', (data) => {
    out.push(data);
  });
  git.on('close', (code) => {
    console.log(out.toString());
    res.send(`${out.toString()}`);
  });
});

app.get('/gitclone', (req, res) => {
  const git = childProcess.spawn('git', ['clone', 'https://github.com/drinkins85/node-git.git', 'n--rep']);
  // const git = childProcess.spawn('ls');
  const out = [];
  git.stdout.on('data', (data) => {
    out.push(data);
  });
  git.stderr.on('data', (data) => {
    out.push(data);
  });
  git.on('close', (code) => {
    console.log(out.toString());
    res.send(`res: ${out.toString()}`);
  });
});

app.get('/ls', (req, res) => {
  const git = childProcess.spawn('ls');
  // const git = childProcess.spawn('ls');
  const out = [];
  git.stdout.on('data', (data) => {
    out.push(data);
  });
  git.stderr.on('data', (data) => {
    out.push(data);
  });
  git.on('close', (code) => {
    console.log(out.toString());
    res.send(`${out.toString()}`);
  });
});


app.listen(port, host);

console.log(`App listen on port ${port}`);
