import { useEffect, useRef, useState } from 'react';
import { Award, Mail, MapPin, Trophy, Star, ExternalLink, ChevronDown, Linkedin, Github, FileText, GraduationCap, Briefcase, Code, Globe, BookOpen, Shield, Cpu, Palette } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="section-padding py-4 flex items-center justify-between">
        <span className="font-display text-xl tracking-widest text-charcoal">
          G.R.
        </span>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Education', id: 'education' },
            { label: 'Experience', id: 'experience' },
            { label: 'Achievements', id: 'achievements' },
            { label: 'Skills', id: 'skills' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-body text-sm tracking-widest uppercase text-charcoal/70 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a3f35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className={`text-center section-padding transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <Star className="w-4 h-4 text-gold/60" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>
        
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
          Aspiring Generative AI Engineer
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal mb-4 leading-tight">
          <span className="gold-gradient">Gabari</span> Rume
        </h1>
        
        <p className="font-body text-lg md:text-xl text-sepia/80 max-w-2xl mx-auto mb-6">
          Web Developer · AI Learner · Microsoft Office Specialist
        </p>
        
        <div className="divider-gold max-w-xs mx-auto mb-8" />
        
        <p className="font-body text-base md:text-lg text-charcoal/70 max-w-xl mx-auto leading-relaxed mb-12">
          Curious undergraduate with a great fire to explore the world through the lenses of AI. 
          2-time Microsoft Office Specialist World Championship national champion.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          <button onClick={scrollToAbout} className="btn-gold">
            Discover More
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gold/60" />
      </button>
    </section>
  );
};

// About Section
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 md:py-32 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              {/* Gold frame */}
              <div className="absolute -inset-3 border border-gold/30" />
              <div className="absolute -inset-6 border border-gold/10" />
              
              <img 
                src="/profile.jpg" 
                alt="Gabari Rume" 
                className="w-full h-full object-cover"
              />
              
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold/50" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/50" />
            </div>
          </div>
          
          {/* Content Column */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/50" />
              <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
                About Me
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              Driven by <span className="gold-gradient">Curiosity</span>
            </h2>
            
            <div className="divider-gold w-24 mb-8" />
            
            <div className="space-y-4 font-body text-lg text-charcoal/80 leading-relaxed">
              <p>
                I'm a curious undergraduate with a great fire to explore the world through the lenses of AI. 
                I learn things fast in a disciplined way and multitask even under pressure.
              </p>
              <p>
                As a 2-time Microsoft Office Specialist World Championship national champion (2024 and 2022), 
                I've proven my ability to compete at the highest level. I also placed 3rd in the Annual 
                Chinese Bridge Competition (2024) and received Silver and Bronze level Duke of Edinburgh 
                Young Achievers' Awards (2024 and 2023).
              </p>
              <p>
                Currently pursuing a Bachelor's degree in Computer Science at Caleb University Lagos, 
                I'm sharpening my skills in web development, AI, data analysis and cybersecurity through hands-on projects.
              </p>
            </div>
            
            {/* What I Do */}
            <div className="mt-10">
              <h3 className="font-display text-xl text-charcoal mb-4">What I Do</h3>
              <div className="space-y-3">
                {[
                  'Build and debug websites (HTML, CSS, JavaScript)',
                  'Learning AI (LLMs, ethical deployment)',
                  'Competitive achiever & language enthusiast',
                  'French fluency - DELF B2 certified',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="font-body text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="card-old-money p-4">
                <MapPin className="w-5 h-5 text-gold mb-2" />
                <p className="font-display text-sm text-charcoal">Lagos, Nigeria</p>
              </div>
              <div className="card-old-money p-4">
                <Award className="w-5 h-5 text-gold mb-2" />
                <p className="font-display text-sm text-charcoal">2x MOS Champion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      school: 'Caleb University Lagos',
      degree: "Bachelor's Degree, Computer Science",
      period: 'Sep 2025 – Present',
      details: 'Grade: 100 | Aspiring Computer Scientist',
      icon: GraduationCap,
    },
    {
      school: 'Grace Schools',
      degree: 'High School Diploma, Computer Science',
      period: 'Apr 2023 – Jul 2024',
      details: 'ICT Club, Languages Club, Swimming, Basketball, Running, and Choir',
      icon: BookOpen,
    },
    {
      school: 'Faith Academy Canaanland',
      degree: 'High School Diploma',
      period: 'Sep 2018 – Mar 2023',
      details: 'French Club, Scrabble Club, and Chess Club',
      icon: BookOpen,
    },
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-24 md:py-32 section-padding bg-cream-dark/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold/50" />
            <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
              Education
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Academic <span className="gold-gradient">Journey</span>
          </h2>
        </div>
        
        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={edu.school}
              className={`card-old-money p-6 md:p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <edu.icon className="w-5 h-5 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-charcoal mb-1">{edu.school}</h3>
                  <p className="font-body text-gold mb-2">{edu.degree}</p>
                  <p className="font-body text-sm text-charcoal/60 mb-2">{edu.period}</p>
                  <p className="font-body text-charcoal/70">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Web Architect & Developer',
      company: 'BFS Global Foundation',
      period: '2024 – Present',
      details: 'Architected complete technical foundation from backend infrastructure to frontend design for bfsglobalfoundation.com.',
      icon: Globe,
      skills: ['Web Architecture', 'Frontend Design', 'Backend Infrastructure']
    },
    {
      title: 'Freelance Designer',
      company: 'Self-Employed',
      period: '2023 – Present',
      details: 'Created custom event fliers and invitations for various clients, delivering high-quality visual assets.',
      icon: Palette,
      skills: ['Graphic Design', 'Event Branding', 'Visual Communication']
    },
    {
      title: 'Undergraduate Trainee',
      company: 'Freelance',
      period: 'Jul 2024 – Jan 2026',
      details: 'Sharpening AI skills through projects and mastering web development fundamentals.',
      icon: Briefcase,
      skills: ['Microsoft Word', 'French', 'Web Development']
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-24 md:py-32 section-padding"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold/50" />
            <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
              Experience
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Professional <span className="gold-gradient">Experience</span>
          </h2>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`card-old-money p-8 md:p-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center border border-gold/30">
                    <exp.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">{exp.title}</h3>
                  <p className="font-body text-gold mb-2">{exp.company}</p>
                  <p className="font-body text-sm text-charcoal/60 mb-4">{exp.period}</p>
                  <p className="font-body text-charcoal/70 mb-6 leading-relaxed">{exp.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 border border-gold/30 text-charcoal/70 text-sm font-body">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Achievements Section
const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      year: '2024',
      title: 'Microsoft Office Specialist World Championship',
      subtitle: 'Nigeria National Champion',
      description: 'Represented Nigeria at the World Championship in Anaheim, California',
      icon: Trophy,
    },
    {
      year: '2024',
      title: 'Chinese Bridge Competition',
      subtitle: '3rd Place',
      description: 'Annual Chinese Bridge Competition finalist',
      icon: Globe,
    },
    {
      year: '2024',
      title: 'Duke of Edinburgh Award',
      subtitle: 'Silver Level',
      description: 'Young Achievers Award recipient',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Duke of Edinburgh Award',
      subtitle: 'Bronze Level',
      description: 'Young Achievers Award recipient',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Microsoft Office Specialist World Championship',
      subtitle: 'Nigeria National Champion',
      description: 'Represented Nigeria at the World Championship in Anaheim, California',
      icon: Trophy,
    },
  ];

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="py-24 md:py-32 section-padding bg-cream-dark/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold/50" />
            <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
              Achievements
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Awards & <span className="gold-gradient">Recognition</span>
          </h2>
          
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            A track record of excellence in competitions and academic pursuits.
          </p>
        </div>
        
        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={`${achievement.year}-${index}`}
              className={`card-old-money p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/30">
                    <achievement.icon className="w-5 h-5 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-lg text-gold">{achievement.year}</span>
                    <div className="w-8 h-px bg-gold/30" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-1">{achievement.title}</h3>
                  <p className="font-body text-gold text-sm mb-2">{achievement.subtitle}</p>
                  <p className="font-body text-sm text-charcoal/60">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '2', label: 'MOS Championships' },
            { value: '1000', label: 'Perfect Score' },
            { value: '2', label: 'DofE Awards' },
            { value: '3rd', label: 'Chinese Bridge' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 card-old-money">
              <p className="font-display text-3xl md:text-4xl gold-gradient mb-2">{stat.value}</p>
              <p className="font-body text-sm text-charcoal/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Web Development',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'Website Building & Debugging'],
    },
    {
      category: 'Microsoft Office',
      icon: FileText,
      skills: ['Word 2016 & 2019 (Expert)', 'Excel 2016 & 2019', 'PowerPoint 2016 & 2019'],
    },
    {
      category: 'Cybersecurity & IT',
      icon: Shield,
      skills: ['Information Technology Specialist', 'Cybersecurity Fundamentals'],
    },
    {
      category: 'Languages',
      icon: Globe,
      skills: ['French (DELF B2 - Fluent)', 'English', 'Chinese (Learning)', 'Spanish (Learning)', 'Arabic (Learning)'],
    },
    {
      category: 'AI & Emerging Tech',
      icon: Cpu,
      skills: ['LLMs', 'Ethical AI Deployment', 'Generative AI'],
    },
    {
      category: 'Digital Literacy',
      icon: BookOpen,
      skills: ['IC3 Digital Literate', 'Computer Fundamentals', 'Key Applications'],
    },
  ];

  const certifications = [
    'Microsoft Office Specialist: Word 2016 Expert',
    'Microsoft Office Specialist: Word Associate (2019)',
    'Microsoft Office Specialist: Excel Associate (2019)',
    'Microsoft Office Specialist: PowerPoint Associate (2019)',
    'Microsoft Office Specialist: Excel 2016',
    'Microsoft Office Specialist: PowerPoint 2016',
    'Microsoft Office Specialist: Word 2016',
    'Information Technology Specialist in Cybersecurity',
    'MTA: Introduction to Programming Using HTML and CSS',
    'IC3 Key Applications - Global Standard 5',
    'IC3 Computer Fundamentals - Global Standard 5',
    'DELF B2 (French Fluency)',
    'DELF A2 (French)',
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 md:py-32 section-padding"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold/50" />
            <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
              Expertise
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Technical <span className="gold-gradient">Proficiency</span>
          </h2>
          
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            A diverse skill set spanning web development, Microsoft Office mastery, 
            cybersecurity, and multilingual communication.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className={`card-old-money p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30">
                  <category.icon className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-display text-lg text-charcoal">{category.category}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    <span className="font-body text-sm text-charcoal/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="card-old-money p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-charcoal">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="font-body text-charcoal/80">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 md:py-32 section-padding bg-cream-dark/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold/50" />
            <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
              Contact
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Let's <span className="gold-gradient">Connect</span>
          </h2>
          
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            Open to opportunities in web development, AI, and technology. 
            Let's build something extraordinary together.
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://www.linkedin.com/in/gabari-rume-122a24243" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-old-money p-6 text-center group hover:border-gold/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 transition-colors">
              <Linkedin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-charcoal mb-2">LinkedIn</h3>
            <p className="font-body text-sm text-charcoal/60">Gabari Rume</p>
            <ExternalLink className="w-4 h-4 mx-auto mt-4 text-gold/50 group-hover:text-gold transition-colors" />
          </a>
          
          <a 
            href="mailto:gabarirume@gmail.com"
            className="card-old-money p-6 text-center group hover:border-gold/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 transition-colors">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-charcoal mb-2">Email</h3>
            <p className="font-body text-sm text-charcoal/60">gabarirume@gmail.com</p>
            <ExternalLink className="w-4 h-4 mx-auto mt-4 text-gold/50 group-hover:text-gold transition-colors" />
          </a>
          
          <a 
            href="https://github.com/Orhume" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-old-money p-6 text-center group hover:border-gold/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 transition-colors">
              <Github className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-charcoal mb-2">GitHub</h3>
            <p className="font-body text-sm text-charcoal/60">Orhume</p>
            <ExternalLink className="w-4 h-4 mx-auto mt-4 text-gold/50 group-hover:text-gold transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 section-padding border-t border-gold/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-body text-sm text-charcoal/40">
          © {new Date().getFullYear()} Gabari Rume. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/gabari-rume-122a24243" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-gold transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/Orhume" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-gold transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:gabarirume@gmail.com" className="text-charcoal/40 hover:text-gold transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-gold">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
