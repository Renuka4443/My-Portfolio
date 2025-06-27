import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Lightbulb, Cpu, Leaf } from 'lucide-react';

const projects = [
  {
    title: 'Nex Hub: Revealing Hidden Profile Information & Job Ranking Using Graph Analysis',
    description: 'Nex Hub is a smart campus recruitment platform that uses Neo4j graph analysis to connect skills, experience, certifications, and academics—revealing hidden insights and enabling better job matching for recruiters and personalized opportunities for students.',
    achievements: [
      'Graph-based matching using Neo4j.',
      'Smart candidate and job recommendations.',
      'Unified dashboard for tracking and management.',
    ],
    technologies: ['React.js', 'Node.js', 'Python', 'Neo4j', 'MongoDB', 'Flask'],
    category: 'Full Stack Development',
    icon: Lightbulb,
    githubLink: 'https://github.com/Renuka4443/NEX_HUB',
  },
  {
    title: 'IoT Smart Dustbin with Automated Lid',
    description: 'An IoT-enabled smart dustbin that automatically opens its lid when it detects an object nearby using an ultrasonic sensor and a servo motor to promote hygiene by enabling touchless waste disposal.',
    achievements: [
      'Touchless lid operation using motion detection',
      'Automatic servo-based lid control',
      'Simple, low-power IoT setup for everyday use'
    ],
    technologies: ['Arduino IDE', 'Ultrasonic Sensors', 'Servo Motors', 'Tinkercad', 'Arduino UNO'],
    category: 'IoT Development',
    icon: Cpu,
    githubLink: 'https://github.com/Renuka4443/IOT_BASED_SMART_DUSTBIN',
  },
  {
    title: 'AgriFusion: Crop Intelligence System',
    description: 'AI-powered agricultural platform that provides soil fertility analysis, crop prediction, and fertilizer recommendations to optimize farming decisions and promote sustainable agriculture.',
    achievements: [
      'Evaluates soil health using N, P, K nutrient data and environmental factors',
      'Recommends optimal crops to grow',
      'Suggests eco-friendly fertilizers',
    ],
    technologies: [
      'Python',
      'AI/ML',
      'Streamlit',
      'Power BI',
    ],
    category: 'AI/ML Development',
    icon: Leaf,
    githubLink: 'https://github.com/Renuka4443/AgriFusion',
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-stone-50 via-yellow-25 to-amber-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-yellow-100/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-stone-100/20 to-amber-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-50/10 to-stone-50/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Heading */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-6">
            <h2 className="text-4xl md:text-4xl font-serif text-stone-800 tracking-wide relative inline-block">
              <span className="font-normal text-stone-800">Featured</span>
              <span className="font-light text-stone-600 ml-3">Projects</span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 animate-expand-underline"></div>
            </h2>
          </div>
          <p className="text-lg text-stone-600 font-serif tracking-wide max-w-2xl mx-auto leading-relaxed">
            Innovative solutions showcasing technical expertise and real-world impact
          </p>
        </div>
        
        {/* Broader Grid Layout - Changed from 3 columns to 2 for wider cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/80 relative overflow-hidden">
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-15 h-15 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-bl-full"></div>
                
                <CardHeader className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm text-stone-600 font-medium bg-stone-100/80 px-4 py-2 rounded-full border border-stone-200/50">
                        {project.category}
                      </span>
                    </div>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="border-stone-200 bg-white/60 hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 backdrop-blur-sm w-12 h-12"
                      >
                        <Github className="w-4 h-4 text-stone-600 group-hover:text-yellow-700" />
                      </Button>
                    </a>
                  </div>
                  <CardTitle className="text-stone-800 text-1xl font-serif leading-tight group-hover:text-yellow-800 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8 pt-0 space-y-6 flex-grow">
                  <p className="text-stone-700 leading-relaxed font-serif tracking-wide group-hover:text-stone-800 transition-colors duration-300 text-small">
                    {project.description}
                  </p>
                  
                  {/* Two-column layout for features and technologies */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-serif font-semibold text-stone-800 text-lg flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span>Key Features</span>
                      </h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-stone-600 leading-relaxed font-serif tracking-wide text-sm">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-serif font-semibold text-stone-800 text-lg flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span>Technologies</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1.5 bg-stone-100/80 text-stone-700 text-sm font-medium rounded-full border border-stone-200/50 hover:bg-yellow-100/80 hover:border-yellow-300/50 transition-all duration-300 shadow-sm backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="flex justify-end mt-6 space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes expand-underline {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-expand-underline {
          animation: expand-underline 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
