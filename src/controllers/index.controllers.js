import { pool } from '../db.js'

export const getPong = async (req, res) => {
  const result = await pool.query('SELECT "Pong" As result')
  res.json(result[0])
}