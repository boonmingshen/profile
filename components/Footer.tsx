import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-100 bg-gray-50 text-center text-gray-500 text-sm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
            <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-gray-900 transition-colors"><Mail size={20} /></a>
        </div>
        <p className="font-medium text-gray-600">© {currentYear} Ming Shen.</p>
        <p className="mt-2 text-xs text-gray-400">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;