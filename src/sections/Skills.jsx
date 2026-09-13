const skillGroups = {
  "Game Development": ["Unity", "Netcode", "FMOD", "Steamworks"],
  "Front End": ["React", "Next.js", "Tailwind CSS"],
  "Back End": ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
  "Others": ["Photoshop", "Premier Pro", "Aseprite", "Git", "Docker", "Nginx", "CI/CD", "Piano..!?"],
  "Language": ["Vietnamese", "English"],
};

export default function Skills() {
  return <section className="mono-card mono-skills" aria-labelledby="skills-heading"><h2 id="skills-heading">Skills</h2><div className="skill-groups">{Object.entries(skillGroups).map(([name, skills]) => <section className="skill-group" key={name} aria-label={name}><h3>{name}</h3><div className="skill-chips">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>)}</div></section>;
}
