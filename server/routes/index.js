const express = require('express');
const router = express.Router();
const pg = require("pg");
const path = require("path");
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/polleg';

const basePath = "/api/v1";

const pool = new pg.Pool({
    database: 'polleg',
});
pool.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(basePath + '/authors', async (req, res, next) => {
    const result = await pool.query("SELECT * FROM authors WHERE active = true");
    res.send(result.rows);
});

router.get(basePath + "/blob/last", async (req, res, next) => {
    const result = await pool.query("SELECT * FROM blob ORDER BY date DESC LIMIT 1");
    res.send(result.rows[0]);
});

module.exports = router;
