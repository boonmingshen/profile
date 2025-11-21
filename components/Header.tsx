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
          <nav>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
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