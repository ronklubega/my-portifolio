import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Location Based transport Management App",
      description: "Collaborative project For vehicle and track ordering , to ease transportation.",
      tech: ["Flutter", "Firebase", "Material-UI"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Pharmacy Management System",
      description: "A comprehensive system to manage pharmacy operations including inventory, sales, and customer management.",
      tech: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"] },
    { name: "Backend", icon: Database, items: ["Node.js", "Php", "Express", "Mysql", "PostgreSQL", "Sql Server"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "iOS", "Android"] },
    { name: "Tools & Others", icon: Globe, items: ["Git", "Docker", "Wordpress", "Firebase", "REST APIs"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Systems Developer Portifolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10">
              <div className="px-4 py-4 space-y-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lubega Ronald
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer crafting beautiful, functional web experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions 
                that make a difference. I love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source 
                projects, or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm">5+ Years Experience</span>
                <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm">50+ Projects</span>
                <span className="px-4 py-2 bg-pink-500/20 rounded-full text-sm">Remote Ready</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
                    <Code size={80} className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <skill.icon className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:lubegaronaldkizza@gmail.com"
              className="flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
            <a 
              href="www.linkedin.com/in/ronald-lubega-1294a9240"
              className="flex items-center px-8 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-colors duration-300"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2025 Lubega Ronald. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;