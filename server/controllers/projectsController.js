import * as projectsModel from '../models/projectsModel.js';

export const getProjects = async (req, res, next) => {
  try {
    const projects = await projectsModel.getAllProjects();
    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await projectsModel.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};
