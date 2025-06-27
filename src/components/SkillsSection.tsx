import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, Trophy, Code2, Database, Monitor, Settings, Sparkles } from 'lucide-react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      title: 'Web Development',
      icon: Monitor,
      skills: [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Neo4j', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: [
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Power BI', logo: 'https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png' },
        { name: 'Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'ServiceNow Certified System Administrator (CSA)',
      provider: 'ServiceNow',
      logo: 'https://tse3.mm.bing.net/th?id=OIP.6fuT3Zw-7PnTI4Pja2qo2AHaGn&pid=Api&P=0&h=180'
    },
    {
      title: 'ServiceNow Certified Application Developer (CAD)',
      provider: 'ServiceNow',
      logo: 'https://tse3.mm.bing.net/th?id=OIP.6fuT3Zw-7PnTI4Pja2qo2AHaGn&pid=Api&P=0&h=180'
    },
    {
      title: 'The Joy of Computing using Python: ELITE distinction',
      provider: 'NPTEL',
      logo: 'https://tse2.mm.bing.net/th?id=OIP.okNGdUNajQwZKGXx_EBvKwHaHa&pid=Api&P=0&h=180'
    },
    {
      title: 'Database Foundations',
      provider: 'Oracle Academy',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'
    },
    {
      title: 'Red Hat System Administration I (RH124)',
      provider: 'Red Hat',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg'
    },
    {
      title: 'Google Cloud Computing Foundations Certification',
      provider: 'Google Cloud',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-br from-yellow-50 via-amber-25 to-stone-50 min-h-screen relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-100/30 to-orange-100/20 rounded-full blur-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 animate-float' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-amber-100/20 to-yellow-100/15 rounded-full blur-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 animate-float-delayed' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-stone-100/25 to-amber-100/15 rounded-full blur-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Animated Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className={`w-6 h-6 text-amber-600 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
            <h2 className="text-4xl md:text-4xl font-light text-gray-800 leading-tight">
              Skills & Expertise
            </h2>
            <Sparkles className={`w-6 h-6 text-amber-600 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
          </div>
          <p className="text-l text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise and professional achievements
          </p>
        </div>
        
        {/* Skills Grid with scroll animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 hover:scale-105' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${300 + index * 150}ms`
                }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-yellow-100/50 hover:border-orange-200/70 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl h-full hover:bg-white/90">
                  <CardHeader className="text-center pb-4 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-yellow-200/50 group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="w-8 h-8 text-amber-700" />
                    </div>
                    <CardTitle className="text-gray-800 text-lg font-semibold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`bg-gradient-to-r from-white/90 to-cream-50/90 backdrop-blur-sm px-4 py-3 rounded-xl text-center font-medium text-gray-800 hover:from-white hover:to-amber-50/50 hover:shadow-lg transition-all duration-500 border border-yellow-100/60 flex items-center justify-center space-x-3 group/skill cursor-pointer transform ${
                            isVisible 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 translate-x-8'
                          }`}
                          style={{
                            transitionDelay: `${800 + index * 100 + skillIndex * 100}ms`
                          }}
                        >
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-6 h-6 group-hover/skill:scale-125 transition-transform duration-300 drop-shadow-sm"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <span className="text-sm font-semibold">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        {/* Certifications with scroll animations */}
        <div>
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className={`w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '1400ms' }}></div>
              <Trophy className={`w-6 h-6 text-amber-600 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ transitionDelay: '1500ms' }} />
              <h3 className="text-3xl md:text-3xl font-light text-gray-800">
                Professional Certifications
              </h3>
              <Trophy className={`w-6 h-6 text-amber-600 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ transitionDelay: '1600ms' }} />
              <div className={`w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '1700ms' }}></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 hover:scale-105' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${1800 + index * 150}ms`
                }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-yellow-100/50 hover:border-orange-200/70 hover:shadow-2xl transition-all duration-500 group overflow-hidden rounded-3xl h-full hover:bg-white/90">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-yellow-200/50 group-hover:scale-110 group-hover:rotate-3">
                        {cert.logo ? (
                          <img 
                            src={cert.logo} 
                            alt={cert.provider}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.target.outerHTML = '<div class="w-6 h-6 text-amber-700"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>';
                            }}
                          />
                        ) : (
                          <Award className="w-7 h-7 text-amber-700" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-3 leading-tight text-base">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-1.5 rounded-full inline-block border border-yellow-200/50">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* "And Many More" Card */}
            <div
              className={`group transform transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 hover:scale-105' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${1800 + certifications.length * 150}ms`
              }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-2 border-yellow-100/70 hover:border-orange-200/70 hover:shadow-2xl transition-all duration-500 group overflow-hidden rounded-3xl h-full border-dashed hover:bg-white/80">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-yellow-200/50 group-hover:scale-110 group-hover:rotate-12">
                      <Star className={`w-7 h-7 text-amber-600 ${isVisible ? 'animate-pulse' : ''}`} />
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-base">
                      And Many More...
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-90deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;