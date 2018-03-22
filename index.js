const express = require('express');

const app = express();
const port = process.env.PORT || 3003;
const host = '0.0.0.0';

const getBtanchList = require('./gitAPI/getBranchList');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/git', (req, res) => {
  getBtanchList().then((branches) => {
    res.send(`Hello, Git ${branches}`);
  });
});


app.listen(port, host);

console.log(`App listen on port ${port}`);
