'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

// Navigation component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-2 sm:mb-0">Martin Tembo</h1>
        <ul className="flex space-x-2 sm:space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-white text-blue-600 font-medium'
                    : 'hover:bg-blue-500'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          variants={itemVariants}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Full-Stack Software Developer
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Building scalable web applications with modern technologies and a focus on user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="aspect-square bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-400">Profile Image</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Martin Tembo</h2>
              <p className="text-gray-600 mb-4">Full-Stack Developer & Bioinformatics Student</p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/martin-genomics" target="_blank" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/martin-tembo-3844b3186" target="_blank" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:martintembo.zm@gmail.com" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Overview */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Frontend', technologies: 'React, Next.js, TypeScript, TailwindCSS' },
              { name: 'Backend', technologies: 'Node.js, Python, Golang, PostgreSQL' },
              { name: 'AI/ML', technologies: 'Ollama, API Integrations, Data Analysis' },
              { name: 'Tools', technologies: 'Docker, Git, AWS, CI/CD' },
            ].map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.technologies}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects Preview */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'MetiBuy',
                description: 'AI-Powered Fashion E-Commerce Platform',
                technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Ollama AI'],
              },
              {
                title: 'Homiee Africa',
                description: 'Real Estate Web Application',
                technologies: ['Next.js', 'Node.js', 'Express.js', 'TailwindCSS'],
              },
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  View Project →
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View All Projects
            </button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'MetiBuy – AI-Powered Fashion E-Commerce',
      description: 'A scalable e-commerce platform with AI-driven product recommendations and personalized shopping experiences.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Python FastAPI', 'Ollama AI', 'PostgreSQL', 'TailwindCSS'],
      features: [
        'AI-powered product recommendations',
        'Secure user authentication and checkout',
        'Responsive design optimized for all devices',
        'Admin dashboard for inventory management'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Homiee Africa – Real Estate Platform',
      description: 'A comprehensive real estate web application serving the Australian market with property listings and advanced search functionality.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
      features: [
        'Dynamic property listings with filters',
        'Advanced search with location-based services',
        'User profiles and saved properties',
        'Property management system for agents'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Elobbs – Job Finder & Contracts Management',
      description: 'A full-featured job platform and contracts management system with secure authentication and workflow management.',
      image: '/api/placeholder/400/250',
      technologies: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      features: [
        'Job posting and application system',
        'Secure user authentication with JWT',
        'Contract management and digital signing',
        'Real-time notifications'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack'
    },
    {
      id: 4,
      title: 'Google Business Reviews System',
      description: 'A comprehensive business review management system with analytics dashboard and review collection tools.',
      image: '/api/placeholder/400/250',
      technologies: ['Golang', 'Gin', 'Next.js', 'PostgreSQL', 'Google APIs'],
      features: [
        'Review collection and management',
        'Analytics dashboard with insights',
        'Response management for business owners',
        'Integration with Google Business API'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Interactive Video Platform',
      description: 'An immersive interactive video experience with clickable hotspots and dynamic content engagement.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Framer Motion'],
      features: [
        'Interactive video player with hotspots',
        'User engagement analytics',
        'Content management system',
        'Team collaboration tools'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Project Management SaaS',
      description: 'A full-stack project management tool for freelancers and teams with contract management and task tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'OAuth 2.0'],
      features: [
        'Project and task management',
        'Time tracking and invoicing',
        'Team collaboration tools',
        'Secure OAuth 2.0 authentication'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.section variants={itemVariants}>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Projects</h1>
          <p className="text-gray-600 mb-8">A collection of my recent work and contributions to various projects</p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['all', 'fullstack', 'frontend', 'backend'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Details
                    </a>
                    <div className="flex space-x-2">
                      <a href={project.githubUrl} className="text-gray-600 hover:text-gray-900">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                      <a href={project.liveUrl} className="text-gray-600 hover:text-gray-900">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

// Experience Page Component
const ExperiencePage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.section className="mb-12" variants={itemVariants}>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Work Experience</h1>
          <p className="text-gray-600 mb-8">My professional journey in software development</p>
          
          {/* Experience Timeline */}
          <div className="space-y-12">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Homiee Africa – Real Estate Web Application</h3>
                <p className="text-blue-600 font-medium">Australia, Remote | Feb 2025 – Aug 2025</p>
              </div>
              <p className="text-gray-600 mb-4">Engineered and deployed a full-stack real estate platform serving the Australian market.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed core features including dynamic property listings and advanced search functionality</li>
                <li>Built comprehensive property management system for real estate agents</li>
                <li>Collaborated effectively with international cross-functional teams</li>
                <li>Technologies: Next.js, Node.js, Express.js, MongoDB, TailwindCSS</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Elobbs Technologies – Job Finder & Contracts Management</h3>
                <p className="text-blue-600 font-medium">Bangladesh, Remote | Jun 2023 – Jan 2025</p>
              </div>
              <p className="text-gray-600 mb-4">Designed and built a full-featured job platform and contracts management system.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed secure backend APIs for job postings and user authentication</li>
                <li>Optimized PostgreSQL queries improving system efficiency for 100,000+ job listings</li>
                <li>Implemented workflow management for job applications and hiring process</li>
                <li>Technologies: NestJS, Next.js, TypeScript, PostgreSQL, Docker</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Elobbs Technologies – Google Business Reviews</h3>
                <p className="text-blue-600 font-medium">Bangladesh, Remote | Jun 2023 – Jan 2025</p>
              </div>
              <p className="text-gray-600 mb-4">Architected and developed a comprehensive business review system with analytics.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Created robust APIs for efficient review collection and management</li>
                <li>Integrated with real-time analytics dashboards for business insights</li>
                <li>Seamlessly connected backend microservices with frontend UI</li>
                <li>Technologies: Golang, Gin, Next.js, PostgreSQL, Google APIs</li>
              </ul>
            </div>
          </div>
        </motion.section>
        
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science (BSc) in Bioinformatics</h3>
              <p className="text-blue-600 font-medium">Expected Graduation: 2026</p>
            </div>
            <p className="text-gray-800 font-medium">Copperbelt University</p>
            <p className="text-gray-600 mt-2">Combining computer science, statistics, mathematics, and engineering to analyze and interpret biological data.</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.section variants={itemVariants}>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Get In Touch</h1>
          <p className="text-gray-600 mb-8">I'm always open to discussing new projects and opportunities</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+260-779699188</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">martintembo.zm@gmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Zambia | Remote</p>
            </div>
          </div>
          
          {submitted ? (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-xl mb-8" role="alert">
              <p className="font-bold">Message Sent!</p>
              <p>Thank you for your message. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.section>
      </div>
    </motion.div>
  );
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}