const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ServerRouter = require('./ServerRouter');

const connection = mysql.createConnection({
  host: '37.59.55.185',
  user: '81lisJaB08',
  password: '5eI98MG8PP',
  database: '81lisJaB08'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(ServerRouter(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
