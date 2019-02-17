const express = require('express');
const router = express.Router();
const pg = require("pg");
const path = require("path");
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/polleg';

const basePath = "/api/v1";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(basePath + '/authors', async (req, res, next) => {
    const pool = new pg.Pool({
        database: 'polleg',
    });
    await pool.connect();

    const result = await pool.query("SELECT * FROM authors WHERE active = true");

    res.send(result.rows);
});

module.exports = router;
