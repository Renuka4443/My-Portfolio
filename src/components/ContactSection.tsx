import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Scroll animation states
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [visibleContactCards, setVisibleContactCards] = useState(new Set());

  // Refs for intersection observer
  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const contactCardRefs = useRef([]);

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          if (element === headerRef.current) {
            setIsHeaderVisible(true);
          } else if (element === contactInfoRef.current) {
            setIsContactInfoVisible(true);
          } else if (element === formRef.current) {
            setIsFormVisible(true);
          } else if (contactCardRefs.current.includes(element)) {
            const index = contactCardRefs.current.indexOf(element);
            setVisibleContactCards(prev => new Set([...prev, index]));
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);
    
    contactCardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextareaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send form data to FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/renukawadetwar@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _template: 'box'
        })
      });
      
      const result = await response.json();
      
      if (result.success === 'true' || result.success === true) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'renukawadetwar@gmail.com',
      href: 'mailto:renukawadetwar@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9922490409',
      href: 'tel:+919922490409',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/renukawadetwar28',
      href: 'https://linkedin.com/in/renukawadetwar28',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/renuka4443',
      href: 'https://github.com/renuka4443',
      color: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isHeaderVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          <h2 className={`text-4xl font-bold text-dark-brown mb-4 transition-all duration-1000 delay-200 ${
            isHeaderVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-95 opacity-0'
          }`}>
            Get In Touch
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full transition-all duration-1000 delay-400 ${
            isHeaderVisible 
              ? 'scale-x-100 opacity-100' 
              : 'scale-x-0 opacity-0'
          }`}></div>
          <p className={`text-muted-brown mt-4 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
            isHeaderVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            ref={contactInfoRef}
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isContactInfoVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-16 opacity-0'
            }`}
          >
            <div className={`transition-all duration-1000 delay-200 ${
              isContactInfoVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-dark-brown mb-6 flex items-center space-x-2">
                <MessageCircle className={`w-6 h-6 text-yellow-600 transition-all duration-1000 delay-400 ${
                  isContactInfoVisible 
                    ? 'rotate-0 scale-100' 
                    : 'rotate-180 scale-0'
                }`} />
                <span>Let's Connect</span>
              </h3>
              <p className="text-muted-brown leading-relaxed mb-8">
                Whether you're looking for a passionate developer for your team, interested in collaborating on a project, 
                or simply want to connect, I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  ref={el => contactCardRefs.current[index] = el}
                  className={`pastel-bg-light border-pastel hover:shadow-soft-pastel transition-all duration-700 hover:scale-105 border-2 transform ${
                    visibleContactCards.has(index)
                      ? 'translate-y-0 opacity-100 rotate-0' 
                      : 'translate-y-12 opacity-0 rotate-3'
                  } hover:-translate-y-2 hover:shadow-xl group`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <CardContent className="p-4">
                    <a 
                      href={contact.href}
                      className="flex items-center space-x-4 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg`}>
                        <contact.icon className="w-5 h-5 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <p className="font-semibold text-dark-brown group-hover:text-yellow-600 transition-colors duration-300">{contact.label}</p>
                        <p className="text-muted-brown group-hover:text-dark-brown transition-colors text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card 
            ref={formRef}
            className={`pastel-bg-light border-pastel border-2 transform transition-all duration-1000 ease-out hover:shadow-xl ${
              isFormVisible 
                ? 'translate-x-0 opacity-100 rotate-0' 
                : 'translate-x-16 opacity-0 rotate-2'
            }`}
          >
            <form onSubmit={handleSubmit}>
              <CardHeader className={`transition-all duration-1000 delay-200 ${
                isFormVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}>
                <CardTitle className="text-dark-brown text-xl flex items-center space-x-2">
                  <Send className={`w-5 h-5 text-yellow-600 transition-all duration-1000 delay-400 ${
                    isFormVisible 
                      ? 'rotate-0 scale-100' 
                      : 'rotate-45 scale-0'
                  }`} />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
                  isFormVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <div className="group">
                    <label className="text-sm font-medium text-dark-brown block mb-2 group-focus-within:text-yellow-600 transition-colors duration-300">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="border-pastel focus:border-yellow-600 focus:ring-yellow-600 bg-white/80 transition-all duration-300 focus:scale-105 focus:shadow-md hover:scale-102"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-medium text-dark-brown block mb-2 group-focus-within:text-yellow-600 transition-colors duration-300">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="border-pastel focus:border-yellow-600 focus:ring-yellow-600 bg-white/80 transition-all duration-300 focus:scale-105 focus:shadow-md hover:scale-102"
                      required
                    />
                  </div>
                </div>
                
                <div className={`group transition-all duration-1000 delay-400 ${
                  isFormVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <label className="text-sm font-medium text-dark-brown block mb-2 group-focus-within:text-yellow-600 transition-colors duration-300">Email</label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-pastel focus:border-yellow-600 focus:ring-yellow-600 bg-white/80 transition-all duration-300 focus:scale-105 focus:shadow-md hover:scale-102"
                    required
                  />
                </div>
                
                <div className={`group transition-all duration-1000 delay-500 ${
                  isFormVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <label className="text-sm font-medium text-dark-brown block mb-2 group-focus-within:text-yellow-600 transition-colors duration-300">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="border-pastel focus:border-yellow-600 focus:ring-yellow-600 bg-white/80 transition-all duration-300 focus:scale-105 focus:shadow-md hover:scale-102"
                    required
                  />
                </div>
                
                <div className={`group transition-all duration-1000 delay-600 ${
                  isFormVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <label className="text-sm font-medium text-dark-brown block mb-2 group-focus-within:text-yellow-600 transition-colors duration-300">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows={5}
                    className="border-pastel focus:border-yellow-600 focus:ring-yellow-600 resize-none bg-white/80 transition-all duration-300 focus:scale-105 focus:shadow-md hover:scale-102"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full btn-pastel hover:btn-pastel font-medium py-3 transition-all duration-700 hover:scale-105 hover:-translate-y-1 shadow-soft-pastel border border-pastel hover:shadow-xl group relative overflow-hidden ${
                    isFormVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '700ms' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {isLoading ? (
                    <span className="flex items-center justify-center relative z-10">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                  )}
                </Button>
                
                {isSubmitted && (
                  <div className="mt-4 text-center text-green-600 font-medium animate-bounce bg-green-50 p-3 rounded-lg border border-green-200 transform transition-all duration-500 scale-105">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                      <span>Thank you for your message! I will reply to you soon.</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
      
      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;