import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail, Download, Phone, MapPin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/renukawadetwar28', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com/renuka4443', label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: Phone, href: 'tel:+919922490409', label: 'Phone', color: 'hover:text-green-600', info: '+91 9922490409' },
    { icon: Mail, href: 'mailto:renukawadetwar@gmail.com', label: 'Email', color: 'hover:text-red-600', info: 'renukawadetwar@gmail.com' },
  ];

  const ringStyle = {
    position: 'absolute',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  };

  // Typewriter effect for name
  const [displayName, setDisplayName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Renuka Wadetwar';
  const typingDelay = 100;
  const nameRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayName(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingDelay);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-25 to-stone-50 flex items-center relative overflow-hidden" style={{ minHeight: '100vh', minHeight: '100dvh' }}>
      {/* Thin dark beige line below navbar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#E6E6C7]" />
      
      {/* Subtle decorative elements - adjusted for mobile */}
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-100/30 to-orange-100/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-16 left-4 sm:bottom-32 sm:left-16 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-100/20 to-yellow-100/15 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-auto">
          
          {/* Profile Image - Mobile First (shows at top on mobile) */}
          <div className="flex justify-center order-1 lg:order-2 animate-fade-in-right flex-shrink-0">
            <div className="relative flex items-center justify-center" style={{ 
              width: '240px', 
              height: '240px'
            }}>
              {/* Main image container - responsive sizing */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden elegant-card p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/profile_img.jpg"
                    alt="Renuka Wadetwar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Rotating rings - responsive sizing */}
              <div
                style={{
                  ...ringStyle,
                  width: '220px',
                  height: '220px',
                  border: '2px solid rgba(234, 216, 191, 0.3)',
                  borderTop: '2px solid #ba8e46',
                  animation: 'rotate 10s linear infinite',
                }}
                className="sm:!w-72 sm:!h-72 md:!w-80 md:!h-80 lg:!w-96 lg:!h-96"
              ></div>

              <div
                style={{
                  ...ringStyle,
                  width: '240px',
                  height: '240px',
                  border: '1px solid rgba(210, 190, 165, 0.2)',
                  borderBottom: '1px solid #c9b89c',
                  animation: 'rotate 15s linear infinite reverse',
                }}
                className="sm:!w-80 sm:!h-80 md:!w-88 md:!h-88 lg:!w-104 lg:!h-104"
              ></div>

              <div
                style={{
                  ...ringStyle,
                  width: '260px',
                  height: '260px',
                  border: '1px solid rgba(200, 180, 150, 0.2)',
                  borderTop: '1px solid #bca45a',
                  animation: 'rotate 20s linear infinite',
                }}
                className="hidden sm:block sm:!w-88 sm:!h-88 md:!w-96 md:!h-96 lg:!w-112 lg:!h-112"
              ></div>
            </div>
          </div>

          {/* Left content - Mobile responsive */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left order-2 lg:order-1 text-center lg:text-left px-2 sm:px-4 lg:pl-6 xl:pl-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-muted-brown">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide animate-pulse text-[#5A3921]">
                  Hello, I'm
                </p>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-dark-charcoal leading-tight">
                <span className="font-normal" ref={nameRef}>
                  {displayName}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="text-lg sm:text-xl text-dark-charcoal font-light">
                  Computer Science Student
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-brown">
                  <span className="cream-bg-secondary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium border border-cream">
                    Full Stack Developer
                  </span>
                  <span className="hidden sm:block w-1.5 h-1.5 bg-muted-brown rounded-full"></span>
                  <span className="cream-bg-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium border border-cream">
                    Data Analyst
                  </span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 text-muted-brown">
                  <MapPin className="w-4 h-4 text-amber-6" />
                  <span className="font-light text-sm sm:text-base">Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            {/* Social links - responsive sizing */}
            <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-3">
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 border-cream hover:border-dark-charcoal transition-all duration-300 hover:scale-105 shadow-cream ${social.color} hover:shadow-lg`}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </a>
                  </Button>
                  
                  {/* Tooltips - adjusted for mobile */}
                  {social.label === 'Phone' ? (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      <div className="bg-white/90 text-dark-charcoal px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium border border-cream">
                        {social.info}
                      </div>
                    </div>
                  ) : (
                    social.label === 'Email' && (
                      <div className="absolute left-1/2 -translate-x-1/2 sm:left-full sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 bottom-full mb-2 sm:mb-0 sm:ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        <div className="bg-white/90 text-dark-charcoal px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium border border-cream">
                          {social.info}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
            
            {/* Download Resume Button - responsive sizing */}
            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                className="bg-dark-charcoal hover:bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-full font-light text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-cream hover:shadow-lg"
              >
                <a href="/DRAFT.pdf" download="Resume_Renuka_Wadetwar.pdf">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        h1 .animate-pulse {
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Mobile viewport handling for iOS Safari */
        @supports (-webkit-touch-callout: none) {
          section {
            min-height: -webkit-fill-available;
          }
        }
        
        /* For mobile browsers */
        @media screen and (max-width: 768px) {
          section {
            min-height: 100vh;
            min-height: 100dvh;
          }
        }
        @media (min-width: 640px) {
          .w-88 { width: 22rem; }
          .h-88 { height: 22rem; }
          .w-96 { width: 24rem; }
          .h-96 { height: 24rem; }
        }
        
        @media (min-width: 1024px) {
          .w-104 { width: 26rem; }
          .h-104 { height: 26rem; }
          .w-112 { width: 28rem; }
          .h-112 { height: 28rem; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
