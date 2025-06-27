
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
<footer className="bg-dark-charcoal text-white py-8">
  <div className="container mx-auto px-6 text-center">
    <div className="border-t border-gray-600 pt-4">
      <p className="text-base sm:text-lg font-light text-gray-300 animate-brighten">
        © 2024 Renuka Wadetwar. Designed with passion and built with modern technologies.
      </p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Index;
