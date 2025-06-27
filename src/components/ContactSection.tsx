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

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [visibleContactCards, setVisibleContactCards] = useState(new Set());

  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const contactCardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          if (el === headerRef.current) setIsHeaderVisible(true);
          else if (el === contactInfoRef.current) setIsContactInfoVisible(true);
          else if (el === formRef.current) setIsFormVisible(true);
          else if (contactCardRefs.current.includes(el)) {
            const idx = contactCardRefs.current.indexOf(el);
            setVisibleContactCards(prev => new Set([...prev, idx]));
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '-50px 0px' });

    if (headerRef.current) observer.observe(headerRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);
    contactCardRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('https://formsubmit.co/ajax/renukawadetwar@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, _template: 'box' })
      });
      const result = await res.json();
      if (result.success === 'true' || result.success === true) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else alert('Submission failed. Please try again.');
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail, label: 'Email', value: 'renukawadetwar@gmail.com',
      href: 'mailto:renukawadetwar@gmail.com', color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone, label: 'Phone', value: '+91 9922490409',
      href: 'tel:+919922490409', color: 'from-green-500 to-green-600'
    },
    {
      icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/renukawadetwar28',
      href: 'https://linkedin.com/in/renukawadetwar28', color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github, label: 'GitHub', value: 'github.com/renuka4443',
      href: 'https://github.com/renuka4443', color: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ease-out ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className={`text-4xl font-bold text-dark-brown mb-4 transition-all duration-1000 delay-200 ${isHeaderVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            Get In Touch
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full transition-all duration-1000 delay-400 ${isHeaderVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
          <p className={`text-muted-brown mt-4 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            I'm always open to discussing new opportunities or interesting projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={contactInfoRef} className={`space-y-8 transition-all duration-1000 ${isContactInfoVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="transition-all duration-1000 delay-200">
              <h3 className="text-2xl font-bold text-dark-brown mb-6 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-yellow-600" />
                <span>Let's Connect</span>
              </h3>
              <p className="text-muted-brown leading-relaxed mb-8">
                Whether you're hiring or just want to connect, feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} ref={el => contactCardRefs.current[index] = el}
                  className={`w-full pastel-bg-light border-pastel hover:shadow-soft-pastel transition-all duration-700 hover:scale-105 transform ${
                    visibleContactCards.has(index) ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-12 opacity-0 rotate-3'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-4">
                    <a href={contact.href} className="flex items-center space-x-4" target="_blank" rel="noopener noreferrer">
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center text-white`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark-brown">{contact.label}</p>
                        <p className="text-muted-brown text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card ref={formRef} className={`pastel-bg-light border-pastel border-2 transition-all duration-1000 ease-out ${isFormVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <form onSubmit={handleSubmit}>
              <CardHeader className="text-dark-brown text-xl flex items-center space-x-2">
                <Send className="w-5 h-5 text-yellow-600" />
                <span>Send a Message</span>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-dark-brown">First Name</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark-brown">Last Name</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-dark-brown">Email</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-dark-brown">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-dark-brown">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Write your message here..." required />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full py-3">
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
                {isSubmitted && (
                  <div className="text-green-600 font-medium text-center mt-4">
                    ✅ Thank you! I’ll get back to you soon.
                  </div>
                )}
              </CardContent>
            </form>
          </Card>
        </div>
      </div>

      {/* Optional scaling style */}
      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
