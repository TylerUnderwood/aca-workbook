const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployeesByFirstName = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'first_name', req.params.first_name]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
    })
}

module.exports = { getEmployeesByFirstName };