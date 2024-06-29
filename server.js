const express = require('express');
const app = express();
const port = 2070;

app.get('/', (req, res) => {
  res.send('Server Running ...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

