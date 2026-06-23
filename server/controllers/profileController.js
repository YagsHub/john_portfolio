import * as profileModel from '../models/profileModel.js';

export const getProfile = async (req, res, next) => {
  try {
    const profile = await profileModel.getProfile();
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    res.json({ success: true, data: profile });
  } catch (error) {
    next(error);
  }
};
