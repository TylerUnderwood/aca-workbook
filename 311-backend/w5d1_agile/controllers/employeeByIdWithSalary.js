const mysql = require('mysql')
const pool = require('../mysql/connection')

const getIdWithSalary = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['salaries', 'emp_no', req.params.id]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
    })
}

module.exports = { getIdWithSalary }