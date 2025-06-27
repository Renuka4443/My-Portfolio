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
    <section id="home" className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-25 to-stone-50 flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#E6E6C7]" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-100/30 to-orange-100/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-amber-100/20 to-yellow-100/15 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-left px-2 sm:px-6 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start items-center space-x-3 text-muted-brown">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <p className="text-2xl md:text-3xl font-medium tracking-wide animate-pulse text-[#5A3921]">
                  Hello, I'm
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-dark-charcoal leading-tight">
                <span className="font-normal" ref={nameRef}>
                  {displayName}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-dark-charcoal font-light">Computer Science Student</p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 text-base text-muted-brown">
                  <span className="cream-bg-secondary px-4 py-2 rounded-full font-medium border border-cream">Full Stack Developer</span>
                  <span className="w-1.5 h-1.5 bg-muted-brown rounded-full"></span>
                  <span className="cream-bg-accent px-4 py-2 rounded-full font-medium border border-cream">Data Analyst</span>
                </div>
                <div className="flex justify-center lg:justify-start items-center space-x-3 text-muted-brown">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span className="font-light">Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 border-cream hover:border-dark-charcoal transition-all duration-300 hover:scale-105 shadow-cream ${social.color} hover:shadow-lg`}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </Button>

                  {social.label === 'Phone' ? (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      <div className="bg-white/90 text-dark-charcoal px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-cream">
                        {social.info}
                      </div>
                    </div>
                  ) : (
                    social.label === 'Email' && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        <div className="bg-white/90 text-dark-charcoal px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-cream">
                          {social.info}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                className="bg-dark-charcoal hover:bg-gray-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-light text-base transition-all duration-300 hover:scale-105 shadow-cream hover:shadow-lg"
              >
                <a href="/DRAFT.pdf" download="Resume_Renuka_Wadetwar.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full overflow-hidden elegant-card p-2">
                <img 
                  src="/profile_img.jpg"
                  alt="Renuka Wadetwar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Rings */}
              <div style={{ ...ringStyle, width: '90%', height: '90%', border: '3px solid rgba(234, 216, 191, 0.3)', borderTop: '3px solid #ba8e46', animation: 'rotate 10s linear infinite' }}></div>
              <div style={{ ...ringStyle, width: '100%', height: '100%', border: '2px solid rgba(210, 190, 165, 0.2)', borderBottom: '2px solid #c9b89c', animation: 'rotate 15s linear infinite reverse' }}></div>
              <div style={{ ...ringStyle, width: '110%', height: '110%', border: '2px solid rgba(200, 180, 150, 0.2)', borderTop: '2px solid #bca45a', animation: 'rotate 20s linear infinite' }}></div>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default HeroSection;
