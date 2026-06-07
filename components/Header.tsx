import React from 'react';
import { Terminal } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
               <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="logo-text">Ming.dev</span>
          </div>
          <nav className="nav">
            <a href="#experience" className="nav-link">
              <span className="nav-num">01.</span> Experience
            </a>
            <a href="#projects" className="nav-link">
              <span className="nav-num">02.</span> Projects
            </a>
            <a href="#skills" className="nav-link">
              <span className="nav-num">03.</span> Skills
            </a>
            <a href="#education" className="nav-link">
              <span className="nav-num">04.</span> Education
            </a>
            <a 
              href="https://github.com/boonmingshen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link highlight-link"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;