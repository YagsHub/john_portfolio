-- Seed data for Personal Portfolio (synced with client/src/data/fallbackData.js)

INSERT INTO profile (name, title, introduction, about, education, career_objectives, email, location, resume_url, profile_image_url)
VALUES (
    'JOHN',
    'Full-Stack Developer',
    'I build modern, scalable web applications with clean code and exceptional user experiences.',
    'I am a passionate Full-Stack Developer with expertise in building responsive web applications. I enjoy solving complex problems and turning ideas into elegant digital solutions.',
    'Bachelor of Science in Information Technology — Cebu Eastern College (Expected 2026)',
    'To contribute to innovative technology projects while continuously growing as a developer.',
    'jvyagong01@gmail.com',
    'Cebu City, Philippines',
    '/resume.pdf',
    '/profile (1).JPG'
);

INSERT INTO skills (name, category, proficiency) VALUES
('HTML', 'frontend', 95),
('CSS', 'frontend', 90),
('JavaScript', 'frontend', 88),
('React.js', 'frontend', 85),
('Next.js', 'frontend', 75),
('Tailwind CSS', 'frontend', 90),
('Node.js', 'backend', 70),
('Express.js', 'backend', 70),
('PHP', 'backend', 50),
('MySQL', 'database', 78),
('PostgreSQL', 'database', 80),
('Git', 'tools', 85),
('GitHub', 'tools', 88),
('Postman', 'tools', 82),
('VS Code', 'tools', 95),
('Cursor', 'tools', 90);

INSERT INTO projects (title, description, image_url, technologies, github_url, live_url, featured, sort_order) VALUES
(
    'Personal Portfolio Website',
    'A modern, responsive portfolio website showcasing skills, projects, and experience with dark mode and smooth animations.',
    NULL,
    ARRAY['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    'https://github.com/YagsHub/john_portfolio',
    'https://john-portfolio-sandy-three.vercel.app/',
    true, 1
),
(
    'Task Prioritization Tool for Students',
    'An intelligent task management application for students to prioritize assignments based on deadlines and importance.',
    NULL,
    ARRAY['React', 'Python', 'PostgreSQL'],
    'https://github.com/yourusername/task-prioritization',
    'https://task-tool-demo.vercel.app',
    true, 2
),
(
    'Secure Login and Registration System',
    'A secure authentication system with encrypted password storage, HTTPS enforcement, and session management.',
    NULL,
    ARRAY['PHP', 'MySQL', 'HTTPS', 'OpenSSL'],
    'https://github.com/yourusername/secure-auth',
    NULL,
    true, 3
),
(
    'Cockfighting Betting Management System',
    'A comprehensive betting management system with real-time tracking and thermal printer integration.',
    NULL,
    ARRAY['React', 'Tailwind CSS', 'Thermal Printer Integration'],
    'https://github.com/yourusername/betting-system',
    NULL,
    true, 4
);

INSERT INTO certifications (title, issuer, issue_date, credential_url, description) VALUES
(
    'Legacy Responsive Web Design Certification',
    'FreeCodeCamp',
    '2024-04-17',
    'https://www.freecodecamp.org/certification/john_vincent_b_yagong/responsive-web-design',
    'Comprehensive certification covering React, Node.js, and database design.'
),
(
    'Full Stack Web Development Certification',
    'Udemy',
    '2025-03-17',
    'https://www.udemy.com/certificate/UC-72172626-tag-from-2025-03-17/',
    'Full Stack Web Development Certification'
);

INSERT INTO experience (title, company, type, description, start_date, end_date, is_current, sort_order) VALUES
(
    'Full-Stack Developer Intern',
    'SouthSide IT Solutions',
    'internship',
    'Developed and maintained web applications using React and Node.js.',
    '2025-06-01', '2025-12-31', false, 1
),
(
    'Freelance Web Developer',
    'Self-Employed',
    'freelance',
    'Built custom websites and web applications for small businesses. Managed client relationships.',
    '2024-01-01', NULL, true, 2
),
(
    'Capstone Project',
    'University CS Department',
    'academic',
    'Led a team of 4 students in developing a Student News and Events Immediate Access Using Web-based System using agile methodology.',
    '2025-01-01', '2026-12-31', false, 3
);
