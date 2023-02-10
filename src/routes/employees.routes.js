import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controllers.js";

const router = Router()

// Relizar una consulta
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)

// Ingresar un nuevo registro
router.post('/employees', createEmployees)

// Modificar un registro
router.put('/employees', updateEmployees)

// Para modificar una parte del objeto
router.patch('/employees', updateEmployees)

// Elimino un registro
router.delete('/employees', deleteEmployees )

export default router