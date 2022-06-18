const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployeesById = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'emp_no', req.params.emp_no]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
    })
}

module.exports = { getEmployeesById }