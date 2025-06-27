import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Sparkles, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
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
    <section id="about" className="py-24 bg-gradient-to-br from-yellow-50 via-amber-25 to-stone-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-100/20 to-amber-100/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-stone-100/20 to-yellow-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-50/10 to-yellow-50/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated, Elegant Heading */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-6">
            <h2 className="text-4xl md:text-4xl font-serif text-stone-800 tracking-wide relative inline-block">
              <span className="font-normal text-stone-800">About</span>
              <span className="font-light text-stone-600 ml-3">Me</span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 animate-expand-underline"></div>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left content: Bio (Enhanced with floating animations) */}
          <div className={`lg:col-span-3 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Floating quote mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-yellow-200 font-serif opacity-40 animate-float">"</div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group hover:bg-white/70">
                <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-serif tracking-wide mb-6 group-hover:text-stone-800 transition-colors duration-300">
                  I'm Renuka Wadetwar, a Computer Science Engineering student at Symbiosis Institute of Technology, Nagpur, driven by a passion for continuous learning, problem-solving, and meaningful innovation. I enjoy exploring new ideas, taking on challenges, and working on projects that push me to grow both technically and creatively. Along the way, I've gained valuable experience through internships, academic projects, and participation in research and hackathon events.
                </p>
                <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-serif tracking-wide group-hover:text-stone-800 transition-colors duration-300">
                  With a curious mindset and a strong commitment to personal development, I thrive in collaborative environments where ideas evolve into impactful solutions. I'm always eager to take on new opportunities that allow me to learn, contribute, and make a positive difference through technology and teamwork.
                </p>
                
                {/* Decorative elements */}
                <div className="flex justify-end mt-6 space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content: Education (Shifted right with enhanced styling) */}
          <div className={`lg:col-span-2 lg:ml-8 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-serif text-stone-800 flex items-center justify-center lg:justify-start space-x-3 mb-8 tracking-wide">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-stone-800">Education</span>
              </h3>
            </div>

            <div className="space-y-6">
              {/* B.Tech */}
              <Card className="group p-6 rounded-2xl border border-stone-200 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white/80 to-yellow-50/60 hover:from-yellow-50/80 hover:to-amber-50/60 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-20 h-15 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-bl-full"></div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-yellow-700 mt-1 group-hover:animate-bounce" />
                  <div className="flex-1">
                    <h4 className="font-bold text-stone-800 mb-2 text-lg tracking-wide group-hover:text-yellow-800 transition-colors">
                      B.Tech in Computer Science and Engineering
                    </h4>
                    <p className="text-stone-600 font-medium mb-2">Symbiosis Institute of Technology, Nagpur</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-stone-500 font-light text-sm">2022 – 2026</p>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <p className="text-yellow-700 font-semibold text-sm">CGPA: 8.9</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 12th Grade */}
              <Card className="group p-6 rounded-2xl border border-stone-200 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white/80 to-amber-50/60 hover:from-amber-50/80 hover:to-yellow-50/60 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100/30 to-transparent rounded-bl-full"></div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-amber-700 mt-1 group-hover:animate-bounce" />
                  <div className="flex-1">
                    <h4 className="font-bold text-stone-800 mb-2 text-lg tracking-wide group-hover:text-amber-800 transition-colors">
                      Class XII – CBSE
                    </h4>
                    <p className="text-stone-600 font-medium mb-2">Science Stream</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-stone-500 font-light text-sm">2021 – 2022</p>
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <p className="text-amber-700 font-semibold text-sm">Percentage: 88.2%</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 10th Grade */}
              <Card className="group p-6 rounded-2xl border border-stone-200 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white/80 to-yellow-50/60 hover:from-yellow-50/80 hover:to-amber-50/60 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-bl-full"></div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-700 mt-1 group-hover:animate-bounce" />
                  <div className="flex-1">
                    <h4 className="font-bold text-stone-800 mb-2 text-lg tracking-wide group-hover:text-yellow-800 transition-colors">
                      Class X – CBSE
                    </h4>
                    <div className="flex items-center space-x-2 mt-3">
                      <p className="text-stone-500 font-light text-sm">2019 – 2020</p>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <p className="text-yellow-700 font-semibold text-sm">Percentage: 96.2%</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
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

export default AboutSection;