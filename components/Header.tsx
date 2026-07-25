import React, { useState } from 'react';
import { Terminal, Download, Menu, X } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            <Terminal size={20} strokeWidth={2.5} />
          </div>
          <span className="logo-text">Ming.dev</span>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#experience" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">01.</span> Experience
          </a>
          <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">02.</span> Projects
          </a>
          <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">03.</span> Skills
          </a>
          <a href="#education" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">04.</span> Education
          </a>
          <a 
            href={resumePdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link highlight-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;