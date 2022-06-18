const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
	// SELECT ALL USERS
	pool.query("SELECT * FROM users", (err, rows) => {
		if (err) return handleSQLError(res, err)
		return res.json(rows);
	})
}

const getUserById = (req, res) => {
	// SELECT USERS WHERE ID = <REQ PARAMS ID>
	let sql = "SELECT * FROM ?? WHERE ?? = ?"
	let replacements = [ 'users', 'id', req.params.id ]
	sql = mysql.format(sql, replacements)

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err)
		return res.json(rows);
	})
}

const createUser = (req, res) => {
	// INSERT INTO USERS FIRST AND LAST NAME 
	let sql = "INSERT INTO users ( ??, ?? ) VALUES ( ?, ? )"
	let replacements = [ 'first_name', 'last_name', 'bogus', 'user' ]
	sql = mysql.format( sql, replacements )

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err)
		return res.json({ newId: results.insertId });
	})
}

const updateUserById = (req, res) => {
	// UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
	let sql = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?"
	let replacements = [ 'users', 'first_name', 'bogus', 'last_name', 'user', 'id', req.params.id ]
	sql = mysql.format( sql, replacements )

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err)
		return res.status(204).json();
	})
}

const deleteUserByFirstName = (req, res) => {
	// DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
	let sql = "DELETE FROM ?? WHERE ?? = ?"
	let replacements = [ 'users', 'first_name', req.params.first_name ];
	sql = mysql.format( sql, replacements )

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err)
		return res.json({ message: `Deleted ${req.params.first_name} user(s)` });
	})
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUserById,
	deleteUserByFirstName
}