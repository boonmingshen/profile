import React from 'react';
import { Github, ArrowRight, Cpu, Terminal, Zap, Linkedin } from 'lucide-react';
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
                Senior Embedded Software Engineer
              </span>
              <h1 className="hero-title">
                Hello, <br />
                I'm Ming Shen.
              </h1>
              <p className="hero-description">
                I engineer robust real-time systems at the hardware-software interface. Currently at <strong>MaxLinear</strong> leading PTP integration for Zephyr RTOS and specializing in Linux networking stacks.
              </p>
              
              <div className="hero-actions">
                <a 
                  href="https://github.com/boonmingshen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github className="mr-2" size={20} />
                  <span>GitHub</span>
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ming-shen-boon-046a3a1b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-linkedin"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
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
                        <span className="token-type">WorkProfile</span>
                        <span className="token-text">senior_dev</span>
                        <span className="token-op">=</span>
                        <span className="token-text">{'{'}</span>
                      </div>
                      <div className="line indent">
                         <span className="token-text">.company</span>
                         <span className="token-op">=</span>
                         <span className="token-string">"MaxLinear"</span>,
                      </div>
                      <div className="line indent">
                         <span className="token-text">.project</span>
                         <span className="token-op">=</span>
                         <span className="token-string">"Zephyr PTP Setup"</span>,
                      </div>
                      <div className="line indent">
                         <span className="token-text">.focus</span>
                         <span className="token-op">=</span>
                         <span className="token-string">"Time Sync stacks"</span>,
                      </div>
                      <div className="line indent">
                         <span className="token-text">.status</span>
                         <span className="token-op">=</span>
                         <span className="token-const">READY_TO_SYNC</span>
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