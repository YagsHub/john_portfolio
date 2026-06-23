const API_URL = import.meta.env.VITE_API_URL || '/api';

async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || 'Something went wrong');
    error.errors = data.errors;
    throw error;
  }

  return data;
}

export const api = {
  getProfile: () => fetchAPI('/profile'),
  getSkills: () => fetchAPI('/skills'),
  getProjects: () => fetchAPI('/projects'),
  getCertifications: () => fetchAPI('/certifications'),
  getExperience: () => fetchAPI('/experience'),
  submitContact: (formData) =>
    fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    }),
};
