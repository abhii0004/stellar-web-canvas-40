
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink
}) => {
  return (
    <div className="bg-portfolio-dark-secondary rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-black/30 rounded text-portfolio-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          <Button asChild size="sm" className="flex-1">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
