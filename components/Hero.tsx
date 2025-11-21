import React from 'react';
import { Github, ArrowRight, Cpu, Terminal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-blob-1" />
      <div className="hero-bg-blob-2" />

      <div className="container">
        <div className="hero-layout">
          
          {/* Text Content */}
          <div className="hero-text">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="role-badge">
                Embedded Software Engineer
              </span>
              <h1 className="hero-title">
                Hello, <br />
                I'm Ming Shen.
              </h1>
              <p className="hero-description">
                I engineer robust systems at the hardware-software interface. Specializing in embedded Linux, kernel development, C, and C++ to power the devices of tomorrow.
              </p>
              
              <div className="hero-actions">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github className="mr-2" size={20} />
                  <span>Visit Github</span>
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <a 
                  href="mailto:your-email@example.com"
                  className="btn btn-secondary"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual/Abstract Art */}
          <div className="hero-visual">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="code-card-wrapper"
            >
              {/* Decorative glow behind card */}
              <div className="code-card-glow"></div>
              
              {/* Light Theme Code Card */}
              <div className="code-card">
                <div className="card-header">
                   <div className="window-controls">
                      <div className="control-dot dot-red"></div>
                      <div className="control-dot dot-yellow"></div>
                      <div className="control-dot dot-green"></div>
                   </div>
                   <div className="filename">system_core.c</div>
                   <div style={{width: '40px'}}></div> {/* Spacer for balance */}
                </div>
                   
                   {/* C Code Snippet */}
                   <div className="code-block">
                      <div className="line">
                        <span className="token-keyword">struct</span>
                        <span className="token-type">Engineer</span>
                        <span className="token-text">ming</span>
                        <span className="token-op">=</span>
                        <span className="token-text">{'{'}</span>
                      </div>
                      <div className="line indent">
                         <span className="token-text">.focus</span>
                         <span className="token-op">=</span>
                         <span className="token-string">"Linux Kernel"</span>,
                      </div>
                      <div className="line indent">
                         <span className="token-text">.stack</span>
                         <span className="token-op">=</span>
                         <span className="token-text">{'{'}</span>
                            <span className="token-string">"C"</span>,
                            <span className="token-string">"C++"</span>,
                            <span className="token-string">"Bash"</span>
                         <span className="token-text">{'}'}</span>,
                      </div>
                      <div className="line indent">
                         <span className="token-text">.mcu_target</span>
                         <span className="token-op">=</span>
                         <span className="token-string">"ARM64"</span>,
                      </div>
                      <div className="line indent">
                         <span className="token-text">.optimization</span>
                         <span className="token-op">=</span>
                         <span className="token-const">HIGH_PRIORITY</span>
                      </div>
                      <div className="line">
                        <span className="token-text">{'};'}</span>
                      </div>
                   </div>

                   <div className="features-grid">
                      <div className="feature-item">
                         <div className="feature-icon" style={{color: 'var(--syntax-type)'}}>
                            <Cpu size={18} />
                         </div>
                         <div className="feature-text-group">
                            <div className="feature-label">Systems</div>
                            <div className="feature-value">Embedded</div>
                         </div>
                      </div>
                      <div className="feature-item">
                         <div className="feature-icon" style={{color: 'var(--text-primary)'}}>
                            <Terminal size={18} />
                         </div>
                         <div className="feature-text-group">
                            <div className="feature-label">Platform</div>
                            <div className="feature-value">Linux</div>
                         </div>
                      </div>
                      <div className="feature-item full-width">
                         <div className="feature-icon" style={{color: 'var(--syntax-constant)'}}>
                            <Zap size={18} />
                         </div>
                         <div className="feature-text-group">
                            <div className="feature-label">Performance</div>
                            <div className="feature-value">Real-time Optimized</div>
                         </div>
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