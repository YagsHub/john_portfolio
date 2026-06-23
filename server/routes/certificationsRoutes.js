import { Router } from 'express';
import { getCertifications } from '../controllers/certificationsController.js';

const router = Router();

router.get('/', getCertifications);

export default router;
