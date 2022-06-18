const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployees = (req, res) => {
    let sql = "SELECT * FROM ?? LIMIT ?";
    let replacements = [ 'employees', 50 ];
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send('something went wrong');
        return res.json(rows);
    })
}

module.exports = { getEmployees }