import * as skillsModel from '../models/skillsModel.js';

export const getSkills = async (req, res, next) => {
  try {
    const skills = await skillsModel.getSkillsByCategory();
    res.json({ success: true, data: skills });
  } catch (error) {
    next(error);
  }
};
