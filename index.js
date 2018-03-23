const express = require('express');
const process = require('child_process');

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/git', (req, res) => {
  const git = process.spawn('git', 'status');
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

app.listen(PORT, HOST);

console.log(`App listen on port ${PORT}`);
