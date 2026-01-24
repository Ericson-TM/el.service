export const skillCategories = [
  {
    id: 'languages',
    title: 'Programmiersprachen',
    description: 'Sprachen, die ich für Backend, Scripting und Datenanalyse einsetze',
    skills: [
      { id: 1, name: 'Python', icon: '🐍' },
      { id: 2, name: 'Java', icon: '☕' },
      { id: 3, name: 'JavaScript', icon: '⚡' },
      { id: 4, name: 'TypeScript', icon: '📘' },
      { id: 5, name: 'PHP', icon: '🐘' },
      { id: 6, name: 'R', icon: '📊' }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    description: 'Moderne Tools für Web- und Softwareentwicklung',
    skills: [
      { id: 7, name: 'React', icon: '⚛️' },
      { id: 8, name: 'Vue.js', icon: '💚' },
      { id: 9, name: 'Spring Boot', icon: '🍃' },
      { id: 10, name: 'Vite', icon: '⚡' }
    ]
  },
  {
    id: 'databases',
    title: 'Datenbanken',
    description: 'Relationale und NoSQL-Datenbanksysteme',
    skills: [
      { id: 11, name: 'SQL', icon: '🗄️' },
      { id: 12, name: 'MongoDB', icon: '🍃' }
    ]
  }
];

export const learningSkills = [
  {
    id: 1,
    name: 'Power BI',
    category: 'Visualisierung',
    icon: '📉'
  },
  {
    id: 2,
    name: 'Prozessautomatisierung',
    category: 'Automatisierung',
    icon: '⚙️'
  }
];

// Legacy export for backwards compatibility
export const skills = skillCategories.flatMap(cat => cat.skills);
