import * as certificationsModel from '../models/certificationsModel.js';

export const getCertifications = async (req, res, next) => {
  try {
    const certifications = await certificationsModel.getAllCertifications();
    res.json({ success: true, data: certifications });
  } catch (error) {
    next(error);
  }
};
