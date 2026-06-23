import { Router } from 'express';
import { getSkills } from '../controllers/skillsController.js';

const router = Router();

router.get('/', getSkills);

export default router;
