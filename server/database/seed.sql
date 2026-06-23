-- Seed data for Personal Portfolio

INSERT INTO profile (name, title, introduction, about, education, career_objectives, email, location, resume_url, profile_image_url)
VALUES (
    'Your Name',
    'Full-Stack Developer',
    'I build modern, scalable web applications with clean code and exceptional user experiences.',
    'I am a passionate Full-Stack Developer with expertise in building responsive web applications. I enjoy solving complex problems and turning ideas into elegant digital solutions. My approach combines technical excellence with user-centered design principles.',
    'Bachelor of Science in Computer Science — University Name (Expected 2026)',
    'To contribute to innovative technology projects while continuously growing as a developer, specializing in full-stack web development and cloud technologies.',
    'your.email@example.com',
    'Your City, Country',
    '/resume.pdf',
    '/profile.JPG'
);

INSERT INTO skills (name, category, proficiency) VALUES
('HTML', 'frontend', 95),
('CSS', 'frontend', 90),
('JavaScript', 'frontend', 88),
('React.js', 'frontend', 85),
('Next.js', 'frontend', 75),
('Tailwind CSS', 'frontend', 90),
('Node.js', 'backend', 82),
('Express.js', 'backend', 80),
('PHP', 'backend', 70),
('MySQL', 'database', 78),
('PostgreSQL', 'database', 80),
('MongoDB', 'database', 75),
('Git', 'tools', 85),
('GitHub', 'tools', 88),
('Postman', 'tools', 82),
('VS Code', 'tools', 95);

INSERT INTO projects (title, description, image_url, technologies, github_url, live_url, featured, sort_order) VALUES
(
    'Personal Portfolio Website',
    'A modern, responsive portfolio website showcasing my skills, projects, and experience. Features dark mode, smooth animations, and a contact form with backend integration.',
    '/projects/portfolio.jpg',
    ARRAY['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    'https://github.com/yourusername/portfolio',
    'https://yourportfolio.vercel.app',
    true, 1
),
(
    'Task Prioritization Tool for Students',
    'An intelligent task management application designed for students to prioritize assignments based on deadlines, difficulty, and importance using smart algorithms.',
    '/projects/task-tool.jpg',
    ARRAY['React', 'Python', 'MongoDB'],
    'https://github.com/yourusername/task-prioritization',
    'https://task-tool-demo.vercel.app',
    true, 2
),
(
    'Secure Login and Registration System',
    'A secure authentication system with encrypted password storage, HTTPS enforcement, and session management using industry-standard security practices.',
    '/projects/auth-system.jpg',
    ARRAY['PHP', 'MySQL', 'HTTPS', 'OpenSSL'],
    'https://github.com/yourusername/secure-auth',
  NULL,
    true, 3
),
(
    'Cockfighting Betting Management System',
    'A comprehensive betting management system with real-time tracking, thermal printer integration for receipts, and an intuitive admin dashboard.',
    '/projects/betting-system.jpg',
    ARRAY['React', 'Tailwind CSS', 'Thermal Printer Integration'],
    'https://github.com/yourusername/betting-system',
    NULL,
    true, 4
);

INSERT INTO certifications (title, issuer, issue_date, credential_url, description) VALUES
('Full-Stack Web Development', 'Online Learning Platform', '2025-06-01', 'https://example.com/cert/1', 'Comprehensive certification covering React, Node.js, and database design.'),
('JavaScript Algorithms and Data Structures', 'Coding Platform', '2025-03-15', 'https://example.com/cert/2', 'Advanced JavaScript programming and problem-solving techniques.'),
('Responsive Web Design', 'Online Learning Platform', '2024-11-20', 'https://example.com/cert/3', 'Mobile-first responsive design principles and implementation.');

INSERT INTO experience (title, company, type, description, start_date, end_date, is_current, sort_order) VALUES
(
    'Full-Stack Developer Intern',
    'Tech Company Inc.',
    'internship',
    'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on schedule.',
    '2025-06-01', '2025-12-31', false, 1
),
(
    'Freelance Web Developer',
    'Self-Employed',
    'freelance',
    'Built custom websites and web applications for small businesses. Managed client relationships and delivered projects within budget and timeline.',
    '2024-01-01', NULL, true, 2
),
(
    'Academic Project Lead',
    'University CS Department',
    'academic',
    'Led a team of 4 students in developing a task prioritization tool. Implemented agile methodology and presented findings at university symposium.',
    '2024-09-01', '2025-05-31', false, 3
);
