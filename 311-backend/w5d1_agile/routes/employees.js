const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/getEmployees');
const employeeByIdController = require('../controllers/getEmployeesById');
const employeeByNameController = require('../controllers/getEmployeesByFirstName');
const employeeByIdWithSalary = require('../controllers/employeeByIdWithSalary');
const employeeByIdWithDepartment = require('../controllers/employeeByIdWithDepartment');
const salaryByEmployeeId = require('../controllers/salaryByEmployeeId');
// const allDepartments = require('../controllers/allDepartments');
const allTitles = require('../controllers/allTitles');

router.get('/employees', employeeController.getEmployees);
router.get('/employees/:emp_no', employeeByIdController.getEmployeesById);
router.get('/employees/firstname/:first_name', employeeByNameController.getEmployeesByFirstName);
router.get('/salaries/employees/:id', employeeByIdWithSalary.getIdWithSalary);
router.get('/departments/employees/:id', employeeByIdWithDepartment.getIdWithDepartment);
router.get('/salaries/:empid', salaryByEmployeeId.getSalaryById);
// router.get('/departments', allDepartments.getAllDepartments);
router.get('/titles', allTitles.getAllTitles);

module.exports = router;