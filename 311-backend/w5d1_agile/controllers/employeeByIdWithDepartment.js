const mysql = require('mysql')
const pool = require('../mysql/connection')

const getIdWithDepartment = (req, res) => {
	let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['dept_emp', 'emp_no', req.params.id]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
    })
}

module.exports = { getIdWithDepartment }