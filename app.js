require('./src/databases');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const testRoutes = require('./src/routes');
const userRoutes = require('./src/routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

testRoutes(app);
userRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
