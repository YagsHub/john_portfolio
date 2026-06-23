import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import { validateContact, handleValidation } from '../middleware/validate.js';
import rateLimit from 'express-rate-limit';

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many contact requests. Please try again later.' },
});

const router = Router();

router.post('/', contactLimiter, validateContact, handleValidation, submitContact);

export default router;
