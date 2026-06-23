import pool from '../config/db.js';

export const getAllExperience = async () => {
  const result = await pool.query(
    'SELECT * FROM experience ORDER BY sort_order ASC, start_date DESC'
  );
  return result.rows;
};
