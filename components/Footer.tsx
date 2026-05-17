import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
            <a href="https://github.com/boonmingshen" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/ming-shen-boon-046a3a1b9/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
            <a href="mailto:boonmingshen@gmail.com" className="social-icon"><Mail size={20} /></a>
        </div>
        <p className="copyright">© {currentYear} Boon Ming Shen. Built for performance.</p>
        <p className="credits">Built with React & Vanilla CSS</p>
      </div>
    </footer>
  );
};

export default Footer;