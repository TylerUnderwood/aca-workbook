const mysql = require('mysql')
const pool = require('../mysql/connection')

const getSalaryById = (req, res) => {
    let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?"
    let replacements = ['salary', 'from_date', 'salaries', 'emp_no', req.params.empid]
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send('something went wrong');
        return res.json(rows);
    })
}

module.exports = { getSalaryById }