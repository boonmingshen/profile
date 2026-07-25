import React from 'react';
import { Globe, ClipboardCheck, Crown, Binary, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Web Profile",
      subtitle: "Live Project | Developer",
      link: "https://boonmingshen.github.io/profile/",
      description: "Built and deployed a responsive personal profile website to showcase professional background, technical skills, projects, and contact information.",
      tags: ["React", "TypeScript", "Vite", "Framer Motion", "Tailwind CSS"],
      icon: <Globe size={22} />,
    },
    {
      title: "Room Rental Checklist Web Application",
      subtitle: "Live Project | Developer",
      link: "https://boonmingshen.github.io/Room-Rental-Checklist/",
      description: "Built a lightweight client-side productivity tool to streamline housing and rental inspection workflows. Used AI-assisted development to implement UI features, manage state, and deploy directly to GitHub Pages.",
      tags: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Responsive UI"],
      icon: <ClipboardCheck size={22} />,
    },
    {
      title: "Chess Challenge Game",
      subtitle: "Live Project | Developer",
      link: "https://boonmingshen.github.io/Chess-Challenge/",
      description: "Designed and built an interactive browser-based chess application using HTML, CSS, and JavaScript. Focused on clean UI design, game-state handling, rule logic, and smooth web execution.",
      tags: ["JavaScript", "HTML5 Canvas", "Chess Engine Logic", "CSS Grid"],
      icon: <Crown size={22} />,
    },
    {
      title: "Bit Converter Web Application",
      subtitle: "Live Project | Developer",
      link: "https://boonmingshen.github.io/Bit-Converter-/",
      description: "Designed and deployed a specialized developer tool for real-time bit manipulation, binary-hexadecimal-decimal conversions, and visual bit field inspection.",
      tags: ["JavaScript", "Bitwise Ops", "Binary / Hex", "HTML5 / CSS3"],
      icon: <Binary size={22} />,
    },
  ];

  return (
    <section id="projects" className="section bg-offset">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="mono-prefix">02.</span> Projects
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-card-top">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-action">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink size={14} className="link-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
