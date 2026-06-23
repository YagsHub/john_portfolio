import * as experienceModel from '../models/experienceModel.js';

export const getExperience = async (req, res, next) => {
  try {
    const experience = await experienceModel.getAllExperience();
    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
};
