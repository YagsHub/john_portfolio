import pool from '../config/db.js';

export const createContact = async ({ full_name, email, subject, message }) => {
  const result = await pool.query(
    `INSERT INTO contacts (full_name, email, subject, message)
     VALUES ($1, $2, $3, $4)
     RETURNING id, full_name, email, subject, created_at`,
    [full_name, email, subject, message]
  );
  return result.rows[0];
};
