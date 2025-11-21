import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="mailto:your-email@example.com" className="social-icon"><Mail size={20} /></a>
        </div>
        <p className="copyright">© {currentYear} Ming Shen.</p>
        <p className="credits">Built with React & Vanilla CSS</p>
      </div>
    </footer>
  );
};

export default Footer;