import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      school: "Monash University Malaysia",
      year: "2018 - 2022",
      degree: "B.Eng Electrical & Computer Systems (Hons)",
      grade: "First Class Honours",
      icon: <GraduationCap size={24} />
    },
    {
      school: "Sunway College Johor Bahru",
      year: "2017 - 2018",
      degree: "Cambridge GCE A-Level",
      grade: "Math Gold Medal",
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="mono-prefix">03.</span> Education
          </motion.h2>
          <div className="section-line"></div>
        </div>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="edu-card"
            >
              <div className="edu-icon">
                {edu.icon}
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="school">{edu.school}</h3>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <div className="degree">{edu.degree}</div>
                <div className="grade-badge">{edu.grade}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
