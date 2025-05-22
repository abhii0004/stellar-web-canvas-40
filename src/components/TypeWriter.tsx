
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === texts[currentIndex]) {
      // Text fully typed, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && displayText === '') {
      // Text fully deleted, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Type or delete characters
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      
      timeout = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return texts[currentIndex].slice(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return <span className="typewriter">{displayText}</span>;
};

export default TypeWriter;
