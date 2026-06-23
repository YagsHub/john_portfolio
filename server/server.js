import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import profileRoutes from './routes/profileRoutes.js';
import skillsRoutes from './routes/skillsRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import certificationsRoutes from './routes/certificationsRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running', timestamp: new Date().toISOString() });
});

app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/contact', contactRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
