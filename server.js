const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ alter: true }).then(() => { // Use alter to ensure changes are reflected
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
