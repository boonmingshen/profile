import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Embedded Software Engineer",
      company: "MaxLinear",
      period: "Dec 2025 – Present",
      details: [
        "Lead development and integration of the Precision Time Protocol (PTP) module in Zephyr RTOS for high-precision clock synchronization.",
        "Design, implement, and debug PTP networking features and stack components within Zephyr, ensuring robust operation on supported hardware platforms.",
        "Pre-Silicon Chip Testing & Verification: Pre-silicon chip testing and validation for the Synopsys XGMAC IP, specifically validating IEEE 1588 Precision Time Protocol (PTP) hardware timestamping and network driver performance prior to tape-out.",
        "AI Cost-Optimization Infrastructure: Self-hosted and configured an on-premise local LLM instance (Ollama/vLLM) for the engineering organization, mitigating API token fees, enhancing data privacy, and accelerating internal development workflows."
      ]
    },
    {
      title: "Embedded Software Engineer",
      company: "Continental Automotive",
      period: "Feb 2023 – Nov 2025",
      details: [
        "Developed and optimized embedded Linux software for HPC cockpit systems.",
        "Implemented Linux Device Drivers for camera modules and framebuffer-based display outputs.",
        "Integrated and validated SurroundView Monitoring (SVM), RVC, and DMS systems.",
        "Customized Yocto-based Linux distributions and performed kernel tuning for boot time reduction.",
        "Designed Inter-Partition Communication (IPC) between Automotive Controller, Linux, and Android."
      ]
    },
    {
      title: "Manufacturing Process Engineer",
      company: "Celestica",
      period: "Internship",
      details: [
        "Managed and tracked Bill of Materials (BOM) for production processes.",
        "Collaborated with manufacturing teams to resolve material-related bottlenecks.",
        "Improved material handling systems to streamline operations efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="mono-prefix">01.</span> Experience
          </motion.h2>
          <div className="section-line"></div>
        </div>
        
        <div className="timeline">
          <div className="pcb-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card">
                <div className="card-top">
                  <div className="job-role">
                    <h3 className="job-title">{exp.title}</h3>
                    <span className="company-name">@ {exp.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className="date-badge">{exp.period}</span>
                  </div>
                </div>
                <ul className="job-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
