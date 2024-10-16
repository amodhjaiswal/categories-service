const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3002;

const db = mysql.createConnection({
  host: 'demo-rds.cf8c86acigsq.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Amodh1234',
  database: 'performance_schema'
});

db.connect();

app.get('/categories', (req, res) => {
  db.query('SELECT * FROM categories', (error, results) => {
    if (error) return res.status(500).send(error);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Categories service running on port ${PORT}`);
});

