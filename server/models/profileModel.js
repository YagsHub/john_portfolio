import pool from '../config/db.js';

export const getProfile = async () => {
  const result = await pool.query('SELECT * FROM profile ORDER BY id LIMIT 1');
  return result.rows[0];
};
