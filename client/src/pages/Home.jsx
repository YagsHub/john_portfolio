import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import { PageLoader } from '../layouts/MainLayout';
import { api } from '../services/api';
import {
  fallbackProfile,
  fallbackSkills,
  fallbackProjects,
  fallbackExperience,
  fallbackCertifications,
} from '../data/fallbackData';

export default function Home() {
  const [data, setData] = useState({
    profile: fallbackProfile,
    skills: fallbackSkills,
    projects: fallbackProjects,
    experience: fallbackExperience,
    certifications: fallbackCertifications,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, skillsRes, projectsRes, experienceRes, certsRes] =
          await Promise.allSettled([
            api.getProfile(),
            api.getSkills(),
            api.getProjects(),
            api.getExperience(),
            api.getCertifications(),
          ]);

        setData({
          profile: profileRes.status === 'fulfilled' ? profileRes.value.data : fallbackProfile,
          skills: skillsRes.status === 'fulfilled' ? skillsRes.value.data : fallbackSkills,
          projects: projectsRes.status === 'fulfilled' ? projectsRes.value.data : fallbackProjects,
          experience: experienceRes.status === 'fulfilled' ? experienceRes.value.data : fallbackExperience,
          certifications: certsRes.status === 'fulfilled' ? certsRes.value.data : fallbackCertifications,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const { name, title } = data.profile;
    if (name && title) {
      document.title = `${name} | ${title}`;
    }
  }, [data.profile]);

  if (loading) return <PageLoader />;

  return (
    <>
      <Hero profile={data.profile} />
      <About profile={data.profile} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
      <Certifications certifications={data.certifications} />
      <Contact profile={data.profile} />
    </>
  );
}
