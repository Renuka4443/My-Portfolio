import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Users, 
  BookOpen, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Database,
  Shield,
  FileText,
  Monitor,
  Palette,
  Camera
} from 'lucide-react';

const experiences = [
  {
    title: "Web Development Intern",
    company: "VS Tech Horizon Pvt. Ltd.",
    location: "Remote",
    period: "Mar 2025 – Jun 2025",
    icon: Code,
    achievements: [
      "Built full-stack web applications using React.js, HTML5, CSS3, and JavaScript",
      "Developed backend APIs with Node.js and MongoDB for enhanced performance",
      "Participated in agile development with code reviews and sprint planning"
    ]
  },
  {
    title: "Social Media & Content Intern",
    company: "Agresar Foundation (ESTREE Program)",
    location: "Nagpur, MH, IN",
    period: "Jan 2024 – May 2024",
    icon: Palette,
    achievements: [
      "Designed impactful social media posts and reels promoting women empowerment",
      "Created digital magazine highlighting program initiatives and community impact",
      "Showcased handmade jute bags to raise awareness on social platforms"
    ]
  }
];

const individualPublications = [
  {
    title: "Credit Risk Analysis using Machine Learning",
    conference: "8th International Conference on Computing Communication Control & Automation (ICCUBEA-2024)",
    achievement: "Compared KNN and Logistic Regression models, achieving 77.2% accuracy with Logistic Regression and 75.4% with KNN.",
    link: "https://ieeexplore.ieee.org/document/10774950",
    icon: Database
  },
  {
    title: "IoT-Integrated Door Sensor Solution for Enhancing Smart Home Security",
    conference: "4th International Conference on Technological Advancements in Computational Sciences (ICTACS-2024)",
    achievement: "Proposed a cost-effective IoT door sensor integrating motion, contact, and camera modules, reducing costs by 25% and enhancing threat detection by 20%.",
    link: "https://www.researchgate.net/publication/388264596_IoT-Integrated_Door_Sensor_Solution_for_Enhancing_Smart_Home_Security",
    icon: Shield
  },
  {
    title: "Comprehensive Review on AI's Role in Women Empowerment",
    conference: "Global Conference on Cognitive Computing and Communication Technology (GC4T-2025)",
    achievement: "Paper accepted for publication.",
    icon: Users
  }
];

const groupedArticles = [
  {
    title: "How to create the tabular layout using CSS Property ?",
    link: "https://www.geeksforgeeks.org/css/how-to-create-the-tabular-layout-using-css-property/"
  },
  {
    title: "How to center elements in a div along a baseline without a container in CSS ?",
    link: "https://www.geeksforgeeks.org/html/how-to-center-elements-in-a-div-along-a-baseline-without-a-container-in-css/"
  }
];

const ExperienceSection = () => {
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
    <section id="experience" className="py-24 bg-gradient-to-br from-stone-50 via-yellow-25 to-amber-50 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-yellow-100/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-stone-100/20 to-amber-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-50/10 to-stone-50/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-6">
            <h2 className="text-4xl md:text-4xl font-serif text-stone-800 tracking-wide relative inline-block">
              <span className="font-normal text-stone-800">Experience</span>
              <span className="font-light text-stone-600 ml-3">&amp; Publications</span>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 animate-expand-underline"></div>
            </h2>
          </div>
          <p className="text-lg text-stone-600 font-serif tracking-wide max-w-2xl mx-auto leading-relaxed">
            Professional journey and research contributions in technology
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-serif text-stone-800 mb-2 flex items-center justify-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg shadow-md">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span>Professional Experience</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <Card className="h-full group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/80 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-bl-full"></div>
                    
                    <CardHeader className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-stone-800 text-xl font-serif mb-3 group-hover:text-yellow-800 transition-colors duration-300 tracking-wide">
                            {exp.title}
                          </CardTitle>
                          <div className="space-y-2">
                            <p className="text-stone-800 font-semibold text-lg">{exp.company}</p>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-2 lg:space-y-0 text-stone-600">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-yellow-500" />
                                <span className="font-serif">{exp.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-amber-500" />
                                <span className="font-serif">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-8 pb-8">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2.5 flex-shrink-0"></div>
                            <p className="text-stone-600 leading-relaxed font-serif tracking-wide group-hover:text-stone-700 transition-colors duration-300 text-sm">
                              {achievement}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-serif text-stone-800 mb-2 flex items-center justify-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg shadow-md">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span>Research Publications</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Individual publications */}
            {individualPublications.map((pub, index) => {
              const IconComponent = pub.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${900 + index * 150}ms` }}
                >
                  <Card className="h-full group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/80 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100/30 to-transparent rounded-bl-full"></div>
                    
                    <CardHeader className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-stone-800 text-lg font-serif leading-tight group-hover:text-amber-800 transition-colors duration-300 tracking-wide mb-2">
                            {pub.title}
                          </CardTitle>
                          <p className="text-stone-600 font-medium font-serif text-sm">{pub.conference}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 pt-0 space-y-4">
                      <p className="text-stone-600 leading-relaxed font-serif tracking-wide group-hover:text-stone-700 transition-colors duration-300">
                        {pub.achievement}
                      </p>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-amber-600 transition-colors duration-300 hover:underline"
                        >
                          <span>View Publication</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Grouped articles */}
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${900 + individualPublications.length * 150}ms` }}
            >
              <Card className="h-full group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-bl-full"></div>
                
                <CardHeader className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-stone-800 text-lg font-serif group-hover:text-yellow-800 transition-colors duration-300 tracking-wide">
                      Articles on GeeksforGeeks
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0 space-y-6">
                  <a
                    href="https://www.geeksforgeeks.org/user/renukawadetwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-stone-600 font-medium hover:text-yellow-600 transition-colors duration-300 hover:underline font-serif"
                  >
                    <span>@renukawadetwar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {groupedArticles.map((article, index) => (
                    <div key={index} className="group/article">
                      <h4 className="font-medium text-stone-800 mb-2 font-serif group-hover:text-stone-900 transition-colors duration-300">
                        {article.title}
                      </h4>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-amber-600 transition-colors duration-300 hover:underline"
                      >
                        <span>View Article</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {index < groupedArticles.length - 1 && (
                        <hr className="my-4 border-stone-200 group-hover:border-stone-300 transition-colors duration-300" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;