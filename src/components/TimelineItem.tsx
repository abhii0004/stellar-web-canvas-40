
import React from 'react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  period,
  description,
  isLast = false
}) => {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute top-0 left-0 h-full w-px bg-portfolio-accent/30"></div>
      )}
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-portfolio-dark border-2 border-portfolio-accent"></div>
      
      <div className="mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-2">
          <span className="text-portfolio-accent">{organization}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span className="text-gray-400">{period}</span>
        </div>
      </div>
      
      <ul className="list-disc list-inside text-gray-300">
        {description.map((item, index) => (
          <li key={index} className="mb-1 text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineItem;
