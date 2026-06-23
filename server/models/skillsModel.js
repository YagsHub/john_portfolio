import pool from '../config/db.js';

export const getAllSkills = async () => {
  const result = await pool.query(
    'SELECT * FROM skills ORDER BY category, proficiency DESC'
  );
  return result.rows;
};

export const getSkillsByCategory = async () => {
  const skills = await getAllSkills();
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
};
