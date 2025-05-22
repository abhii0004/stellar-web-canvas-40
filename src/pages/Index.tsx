
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import TypeWriter from '@/components/TypeWriter';
import SocialIcons from '@/components/SocialIcons';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import TimelineItem from '@/components/TimelineItem';
import ContactForm from '@/components/ContactForm';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Intersection Observer for scroll animations
  const animatedItemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedItemsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      animatedItemsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Add reference to an element that should animate on scroll
  const addAnimationRef = (el: HTMLElement | null, index: number) => {
    if (el) {
      el.classList.add('opacity-0');
      animatedItemsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-portfolio-dark to-portfolio-dark/95"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <p className="text-portfolio-accent mb-3">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Name</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
            I'm a <TypeWriter texts={["Frontend Developer", "UI/UX Designer", "Web Enthusiast"]} />
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            I build sleek, functional websites that leave a mark.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <SocialIcons className="justify-center" />
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-portfolio-dark-secondary">
        <div className="container mx-auto">
          <h2 className="section-title" ref={el => addAnimationRef(el, 0)}>About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className="rounded-lg overflow-hidden" 
              ref={el => addAnimationRef(el, 1)}
            >
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Profile" 
                className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div ref={el => addAnimationRef(el, 2)}>
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate frontend developer with a keen eye for design and a love for creating responsive, user-friendly web experiences. With a background in design and programming, I bring a unique perspective to every project.
              </p>
              <p className="text-gray-300 mb-4">
                My journey began in graphic design, which evolved into UI/UX design, and ultimately led me to frontend development where I found my true passion: bringing designs to life with code.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or hiking in the great outdoors.
              </p>
              
              <a 
                href="/resume.pdf" 
                className="btn btn-outline inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <path d="M12 17V3M12 17l-5-5M12 17l5-5" />
                  <path d="M19 21H5a2 2 0 0 1-2-2V8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container mx-auto">
          <h2 className="section-title" ref={el => addAnimationRef(el, 3)}>My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div ref={el => addAnimationRef(el, 4)}>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              
              <div>
                <SkillBar name="HTML & CSS" percentage={95} />
                <SkillBar name="JavaScript" percentage={90} />
                <SkillBar name="React" percentage={85} />
                <SkillBar name="TypeScript" percentage={80} />
                <SkillBar name="UI/UX Design" percentage={75} />
                <SkillBar name="Python" percentage={65} />
              </div>
            </div>
            
            <div ref={el => addAnimationRef(el, 5)}>
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Problem Solving",
                  "Communication",
                  "Team Collaboration",
                  "Time Management",
                  "Adaptability",
                  "Attention to Detail",
                  "Project Management",
                  "Critical Thinking"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-portfolio-dark-secondary p-4 rounded-lg border border-gray-800"
                  >
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-portfolio-dark-secondary">
        <div className="container mx-auto">
          <h2 className="section-title" ref={el => addAnimationRef(el, 6)}>Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div ref={el => addAnimationRef(el, 7)}>
              <ProjectCard
                title="E-commerce Dashboard"
                description="A modern dashboard for e-commerce data visualization with real-time analytics and sales reporting."
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                technologies={["React", "TypeScript", "Recharts", "Tailwind"]}
                demoLink="https://demo-link.com"
                githubLink="https://github.com/yourusername/project"
              />
            </div>
            
            <div ref={el => addAnimationRef(el, 8)}>
              <ProjectCard
                title="Weather App"
                description="A responsive weather application with location detection, forecasts, and interactive maps."
                image="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                technologies={["React", "APIs", "Geolocation", "CSS"]}
                demoLink="https://demo-link.com"
                githubLink="https://github.com/yourusername/project"
              />
            </div>
            
            <div ref={el => addAnimationRef(el, 9)}>
              <ProjectCard
                title="Task Manager"
                description="A full-featured task management system with drag-and-drop interfaces and team collaboration tools."
                image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                technologies={["React", "Redux", "Firebase", "Material UI"]}
                demoLink="https://demo-link.com"
                githubLink="https://github.com/yourusername/project"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container mx-auto">
          <h2 className="section-title" ref={el => addAnimationRef(el, 10)}>Experience & Education</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={el => addAnimationRef(el, 11)}>
              <h3 className="text-2xl font-semibold mb-8">Work Experience</h3>
              
              <div className="space-y-4">
                <TimelineItem
                  title="Senior Frontend Developer"
                  organization="Tech Solutions Inc."
                  period="Jan 2022 - Present"
                  description={[
                    "Led the frontend development of the company's flagship product",
                    "Improved application performance by 40% through code optimization",
                    "Mentored junior developers and conducted code reviews"
                  ]}
                />
                
                <TimelineItem
                  title="UI/UX Developer"
                  organization="Creative Agency"
                  period="Mar 2020 - Dec 2021"
                  description={[
                    "Designed and developed responsive interfaces for various clients",
                    "Collaborated with design and backend teams to implement features",
                    "Created interactive prototypes and conducted usability testing"
                  ]}
                />
                
                <TimelineItem
                  title="Web Developer Intern"
                  organization="Startup Hub"
                  period="Jun 2019 - Feb 2020"
                  description={[
                    "Assisted in building websites for small businesses",
                    "Learned modern frontend frameworks and best practices",
                    "Participated in daily stand-ups and sprint planning"
                  ]}
                  isLast={true}
                />
              </div>
            </div>
            
            <div ref={el => addAnimationRef(el, 12)}>
              <h3 className="text-2xl font-semibold mb-8">Education</h3>
              
              <div className="space-y-4">
                <TimelineItem
                  title="Master of Science in Computer Science"
                  organization="Tech University"
                  period="2018 - 2020"
                  description={[
                    "Specialized in Human-Computer Interaction",
                    "GPA: 3.8/4.0",
                    "Relevant courses: Advanced Web Development, UX Research Methods"
                  ]}
                />
                
                <TimelineItem
                  title="Bachelor of Science in Web Design"
                  organization="Design College"
                  period="2014 - 2018"
                  description={[
                    "Graduated with honors",
                    "GPA: 3.7/4.0",
                    "Senior project: Interactive Learning Platform"
                  ]}
                  isLast={true}
                />
              </div>
              
              <h3 className="text-2xl font-semibold mt-16 mb-8">Certifications</h3>
              <ul className="space-y-4">
                <li className="bg-portfolio-dark-secondary p-4 rounded-lg border border-gray-800">
                  <p className="font-semibold">Full Stack Web Development</p>
                  <p className="text-sm text-gray-400">Udemy (2021)</p>
                </li>
                <li className="bg-portfolio-dark-secondary p-4 rounded-lg border border-gray-800">
                  <p className="font-semibold">UI/UX Design Specialization</p>
                  <p className="text-sm text-gray-400">Coursera (2020)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-portfolio-dark-secondary">
        <div className="container mx-auto">
          <h2 className="section-title" ref={el => addAnimationRef(el, 13)}>Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={el => addAnimationRef(el, 14)}>
              <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind or just want to chat? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-portfolio-accent mb-1">Email</p>
                  <p className="font-medium">yourname@example.com</p>
                </div>
                
                <div>
                  <p className="text-sm text-portfolio-accent mb-1">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                
                <div>
                  <p className="text-sm text-portfolio-accent mb-1">Connect</p>
                  <SocialIcons iconSize={24} />
                </div>
              </div>
            </div>
            
            <div ref={el => addAnimationRef(el, 15)}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
