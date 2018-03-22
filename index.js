const express = require('express');

const app = express();
const port = 3001;
const host = '0.0.0.0';

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(port, host);

console.log(`App listen on ${port}`);
