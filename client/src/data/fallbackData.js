export const fallbackProfile = {
  name: "JOHN",
  title: "Full-Stack Developer",
  introduction:
    "I build modern, scalable web applications with clean code and exceptional user experiences.",
  about:
    "I am a passionate Full-Stack Developer with expertise in building responsive web applications. I enjoy solving complex problems and turning ideas into elegant digital solutions.",
  education:
    "Bachelor of Science in Information Technology — Cebu Eastern College (Expected 2026)",
  career_objectives:
    "To contribute to innovative technology projects while continuously growing as a developer.",
  email: "jvyagong01@gmail.com",
  location: "Cebu City, Philippines",
  resume_url: "/resume.pdf",
  profile_image_url: "/profile (1).JPG",
};

export const fallbackSkills = {
  frontend: [
    { id: 1, name: "HTML", proficiency: 95 },
    { id: 2, name: "CSS", proficiency: 90 },
    { id: 3, name: "JavaScript", proficiency: 88 },
    { id: 4, name: "React.js", proficiency: 85 },
    { id: 5, name: "Next.js", proficiency: 75 },
    { id: 6, name: "Tailwind CSS", proficiency: 90 },
  ],
  backend: [
    { id: 7, name: "Node.js", proficiency: 70 },
    { id: 8, name: "Express.js", proficiency: 70 },
    { id: 9, name: "PHP", proficiency: 50 },
  ],
  database: [
    { id: 10, name: "MySQL", proficiency: 78 },
    { id: 11, name: "PostgreSQL", proficiency: 80 },
  ],
  tools: [
    { id: 13, name: "Git", proficiency: 85 },
    { id: 14, name: "GitHub", proficiency: 88 },
    { id: 15, name: "Postman", proficiency: 82 },
    { id: 16, name: "VS Code", proficiency: 95 },
    { id: 16, name: "Cursor", proficiency: 90 },
  ],
};

export const fallbackProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing skills, projects, and experience with dark mode and smooth animations.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    github_url: "https://github.com/YagsHub/john_portfolio",
    live_url: "https://john-portfolio-sandy-three.vercel.app/",
    image_url: "/personalportfolio.png",
  },
  {
    id: 2,
    title: "Task Prioritization Tool for Students",
    description:
      "An intelligent task management application for students to prioritize assignments based on deadlines and importance.",
    technologies: ["React", "Python", "PostgreSQL"],
    github_url: "https://github.com/YagsHub/task-prioritization-tool-",
    live_url: "https://task-tool-demo.vercel.app",
    image_url: null,
  },
  {
    id: 3,
    title: "Secure Login and Registration System",
    description:
      "A secure authentication system with encrypted password storage, HTTPS enforcement, and session management.",
    technologies: ["PHP", "MySQL", "HTTPS", "OpenSSL"],
    github_url: "https://github.com/yourusername/secure-auth",
    live_url: null,
    image_url: null,
  },
  {
    id: 4,
    title: "Cockfighting Betting Management System",
    description:
      "A comprehensive betting management system with real-time tracking and thermal printer integration.",
    technologies: ["React", "Tailwind CSS", "Thermal Printer Integration"],
    github_url: "https://github.com/yourusername/betting-system",
    live_url: null,
    image_url: null,
  },
  {
    id: 5,
    title: "Student News and Events Immediate Access Using Web-based System",
    description:
      "A web-based system for students to access news and events immediately.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    github_url: "https://github.com/YagsHub/Capstone1.1",
    live_url: null,
    image_url: "/student-news-events.png",
  },
];

export const fallbackExperience = [
  {
    id: 1,
    title: "Full-Stack Developer Intern",
    company: "SouthSide IT Solutions",
    type: "internship",
    description:
      "Developed and maintained web applications using React and Node.js.",
    start_date: "2025-06-01",
    end_date: "2025-12-31",
    is_current: false,
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    type: "freelance",
    description:
      "Built custom websites and web applications for small businesses. Managed client relationships.",
    start_date: "2026-01-01",
    end_date: null,
    is_current: true,
  },
  {
    id: 3,
    title: "Capstone Project",
    company: "Cebu Eastern College",
    type: "academic",
    description:
      "Lead a team of 4 students in developing a Student News and Events Immediate Access Using Web-based System using agile methodology.",
    start_date: "2025",
    end_date: "2026",
    is_current: false,
  },
];

export const fallbackCertifications = [
  {
    id: 1,
    title: "Legacy Responsive Web Design Certification",
    issuer: "FreeCodeCamp",
    issue_date: "2024-04-17",
    description:
      "Comprehensive certification covering React, Node.js, and database design.",
    credential_url:
      "https://www.freecodecamp.org/certification/john_vincent_b_yagong/responsive-web-design",
  },
  {
    id: 2,
    title: "Full Stack Web Development Certification",
    issuer: "Udemy",
    issue_date: "2025-03-17",
    description: "Full Stack Web Development Certification",
    credential_url:
      "https://www.udemy.com/certificate/UC-72172626-tag-from-2025-03-17/",
  },
];

export const socialLinks = {
  github: "https://github.com/Yagshub",
  linkedin: "https://linkedin.com/in/john-vincent-b-yagong-314636304/",
  facebook: "https://facebook.com/johnvincent.yagong.3",
  email: "mailto:jvyagong01@gmail.com",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const skillCategoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
};

export const experienceTypeLabels = {
  internship: "Internship",
  freelance: "Freelance",
  academic: "Academic",
};

export const experienceTypeColors = {
  internship: "bg-blue-500",
  freelance: "bg-emerald-500",
  academic: "bg-purple-500",
};
