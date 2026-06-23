import pool from '../config/db.js';

export const getAllCertifications = async () => {
  const result = await pool.query(
    'SELECT * FROM certifications ORDER BY issue_date DESC'
  );
  return result.rows;
};
