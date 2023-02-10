import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('select * from employee')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Sometingh goes wrong'
    })
  }
}

export const getEmployee = async (req, res) => {
  try {
    const [row] = await pool.query('select * from employee where id = ?', [req.params.id])

    if (row.length == 0)
      return res.status(404).json({
        message: 'Employee not found'
      })
    res.json(row)
  } catch (error) {
    return res.status(500).json({
      message: "Sometingh goes wrong"
    })
  }
}

export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
      id: rows.insertId,
      name,
      salary,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Sometingh goes wrong'
    })
  }
}

export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params
    const { name, salary } = req.body
    const [affectedRows] = await pool.query('unpdate amployee set name = ifnull(?), salary = ifnull(?) qhere id = ?', [name, salary, id])
    if (affectedRows == 0)
      return res.status(404).json({
        message: 'Update error'
      })
    const [row] = await pool.query('select * from employee where id = ?', [req.params.id])

    if (row.length == 0)
      return res.status(404).json({
        message: 'Employee not found'
      })
    res.json(row)
  } catch (error) {
    return res.status(500).json({
      message: 'Sometingh goes wrong'
    })
  }
}

export const deleteEmployees = async (req, res) => {
  try {
    const [affectedRows] = await pool.query('delete from employee where id = ?', [req.params.id])
    if (affectedRows == 0) return res.status(404).json({
      message: 'Employee deleted'
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({
      message: 'Sometingh goes wrong'
    })
  }
}