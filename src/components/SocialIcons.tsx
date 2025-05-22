
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className = '', 
  iconSize = 20 
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-portfolio-accent transition-colors"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-portfolio-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-portfolio-accent transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
