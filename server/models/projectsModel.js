import pool from '../config/db.js';

export const getAllProjects = async () => {
  const result = await pool.query(
    'SELECT * FROM projects ORDER BY sort_order ASC, created_at DESC'
  );
  return result.rows;
};

export const getProjectById = async (id) => {
  const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
  return result.rows[0];
};
