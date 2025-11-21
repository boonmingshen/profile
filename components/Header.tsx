import React from 'react';
import { Terminal } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-900">
          <div className="p-1.5 bg-gray-900 rounded-lg text-white">
             <Terminal size={18} strokeWidth={3} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gray-900">Ming.dev</span>
        </div>
        <nav>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;