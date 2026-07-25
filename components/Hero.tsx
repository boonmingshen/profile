import React from 'react';
import { Github, Linkedin, FileText, Cpu, GitBranch, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-layout">
          
          {/* Text Content */}
          <div className="hero-text">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="role-badge">
                &gt;_ Senior Embedded Software Engineer
              </div>
              <h1 className="hero-title">
                Engineering the <br />
                <span className="text-highlight">Hardware-Software</span> <br />
                Interface.
              </h1>
              <p className="hero-description">
                I am <strong>Boon Ming Shen</strong>. I build robust real-time systems at <strong>MaxLinear</strong>, specializing in Zephyr RTOS, PTP integration, and high-performance embedded networking.
              </p>
              
              <div className="hero-actions">
                <a 
                  href="https://github.com/boonmingshen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ming-shen-boon-046a3a1b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-linkedin"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Apple Code Window Mock */}
          <div className="hero-visual">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="code-card-wrapper"
            >
              {/* Decorative glow behind card */}
              <div className="card-glow"></div>
              
              {/* Dark Theme Apple Terminal Window */}
              <div className="code-card">
                <div className="card-header">
                  <div className="window-controls">
                    <div className="control-dot dot-red"></div>
                    <div className="control-dot dot-yellow"></div>
                    <div className="control-dot dot-green"></div>
                  </div>
                  <div className="tab-active">
                    <Cpu size={14} />
                    <span>engineer_profile.c</span>
                  </div>
                </div>
                
                {/* C Code Snippet */}
                <div className="code-block">
                  <div className="line">
                    <span className="token-comment">// Initialize System Profile</span>
                  </div>
                  <div className="line">
                    <span className="token-keyword">#include</span>{' '}
                    <span className="token-string">&lt;zephyr/kernel.h&gt;</span>
                  </div>
                  <div className="spacer"></div>
                  <div className="line">
                    <span className="token-keyword">static struct</span>{' '}
                    <span className="token-type">engineer_t</span>{' '}
                    <span className="token-text">boon_ming_shen = &#123;</span>
                  </div>
                  <div className="line indent">
                    <span className="token-text">.company =</span>{' '}
                    <span className="token-string">"MaxLinear"</span>,
                  </div>
                  <div className="line indent">
                    <span className="token-text">.expertise = &#123;</span>{' '}
                    <span className="token-string">"Zephyr PTP"</span>,{' '}
                    <span className="token-string">"Linux Networking"</span>,{' '}
                    <span className="token-string">"DSA"</span> &#125;,
                  </div>
                  <div className="line indent">
                    <span className="token-text">.status =</span>{' '}
                    <span className="token-const">SYNCING_NETWORKS</span>
                  </div>
                  <div className="line">
                    <span className="token-text">&#125;;</span>
                  </div>
                </div>

                <div className="status-bar">
                  <div className="status-item">
                    <GitBranch size={12} />
                    <span>master</span>
                  </div>
                  <div className="status-item">
                    <Lock size={12} />
                    <span>/dev/root</span>
                  </div>
                  <div className="status-item success">
                    <CheckCircle2 size={12} />
                    <span>Build Passing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;