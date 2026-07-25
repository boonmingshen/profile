import React from 'react';
import { Cpu, Terminal, Zap, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Embedded Linux",
      icon: <Cpu size={24} />,
      skills: ["Kernel Programming", "Device Drivers", "Yocto Project", "U-Boot", "SOME/IP", "System Optimization", "Boot Time"]
    },
    {
      title: "Networking & RTOS",
      icon: <Zap size={24} />,
      skills: ["Zephyr RTOS", "PTP (IEEE 1588)", "Synopsys XGMAC IP", "Pre-Silicon Verification", "Linux PTP / DSA"],
      highlight: "Zephyr RTOS"
    },
    {
      title: "AI & Infrastructure",
      icon: <Bot size={24} />,
      skills: ["Local LLM Hosting", "Ollama / vLLM", "AI-Assisted Prototyping", "Prompt Engineering"],
      highlight: "Local LLM Hosting"
    },
    {
      title: "Languages & Tools",
      icon: <Terminal size={24} />,
      skills: ["C / C++", "Python", "Shell / Bash", "Git", "GDB", "Bitbake", "MATLAB"],
      highlight: "C / C++"
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="mono-prefix">03.</span> Technical Stack
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="card-decoration"></div>
              <div className="skill-header">
                <div className="skill-icon-box">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-body">
                {category.skills.map((skill, i) => (
                  <div key={i} className={`tech-tag ${skill === category.highlight ? 'highlight' : ''}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
