import { motion } from "motion/react";
import { Menu, X, Github, Mail, ExternalLink, ChevronRight, Facebook, Download } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">
          PORTFOLIO<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 absolute top-full left-0 w-full py-6 px-6 flex flex-col space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-600 hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            VIBE <br />
            <span className="text-gray-400">CODER</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Mizanur Rahman — <span className="text-gray-400">Customer Care Specialist with IT & AI Focus</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
            Turning ideas into practical solutions while managing real-world digital operations.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all"
            >
              Get in touch
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://facebook.com/Mizan7k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
            >
              <Facebook size={18} />
              Facebook
            </a>
            <a
              href="mailto:private.mizan@gmail.com"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square bg-gray-200 rounded-2xl overflow-hidden"
        >
          <img
            src="https://picsum.photos/seed/mizan/800/800"
            alt="Mizanur Rahman"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Customer Care Specialist with a growing focus on AI and modern development approaches.
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I am a motivated and adaptable individual who values continuous learning and consistent performance. I approach every role with responsibility, aiming to contribute effectively while improving my skills over time.
            </p>
            <p>
              With experience in customer support and administrative operations, I’ve developed a strong understanding of how systems and technology serve people. I am currently exploring AI and development, applying a practical, “vibe coding” mindset to problem-solving and digital workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "FaithIT",
      role: "Customer Support Manager",
      period: "December 2024 - Present",
      description: [
        "Handle customer inquiries across multiple channels with timely and accurate responses",
        "Maintain and manage records using CRM systems",
        "Support onboarding of new customers and guide them through services"
      ]
    },
    {
      company: "Jahez Typing Services",
      role: "Travel Manager",
      period: "March 2022 - March 2024",
      description: [
        "Processed visa applications using government portals (ICP, Amer)",
        "Managed ticketing and travel arrangements efficiently",
        "Handled documentation and client coordination"
      ]
    },
    {
      company: "SMS Higher Education Group",
      role: "Assistant Counselor",
      period: "November 2021 - March 2022",
      description: [
        "Guided students in test preparation (OIETC, Duolingo)",
        "Provided structured support to improve performance and confidence"
      ]
    },
    {
      company: "IT Lab Solutions Ltd.",
      role: "Administrative Assistant",
      period: "July 2019 - October 2021",
      description: [
        "Managed data entry and information updates across systems",
        "Worked with multiple software tools, adapting to different workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Experience</h3>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid md:grid-cols-[250px_1fr] gap-4 md:gap-12"
            >
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{exp.period}</p>
                <h4 className="text-xl font-bold mt-1">{exp.company}</h4>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-4">{exp.role}</h5>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { 
      name: "Technical Capabilities", 
      items: [
        "System Logic & Workflow Understanding", 
        "Data Structuring & Information Handling", 
        "Process Efficiency & Task Optimisation", 
        "Multi-Platform Navigation",
        "Digital Tool Adaptability",
        "Structured Problem Solving",
        "Technical Issue Analysis"
      ] 
    },
    { 
      name: "Core Strengths", 
      items: [
        "Time Management", 
        "Adaptability in Work Environments", 
        "Problem Solving Approach", 
        "Team Coordination",
        "Clear Communication"
      ] 
    },
    { 
      name: "Languages", 
      items: [
        "Bangla — Native", 
        "English — Fluent", 
        "Hindi / Urdu — Conversational"
      ] 
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold">My Skillset</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-gray-100 rounded-2xl hover:border-black transition-colors group"
            >
              <h4 className="text-xl font-bold mb-6 group-hover:text-black transition-colors">{skill.name}</h4>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Abstract Platform",
      category: "Web Application",
      image: "https://picsum.photos/seed/p1/800/600",
      link: "#",
    },
    {
      title: "Nova Dashboard",
      category: "UI/UX Design",
      image: "https://picsum.photos/seed/p2/800/600",
      link: "#",
    },
    {
      title: "Echo Mobile App",
      category: "Mobile Development",
      image: "https://picsum.photos/seed/p3/800/600",
      link: "#",
    },
    {
      title: "Zenith Identity",
      category: "Branding",
      image: "https://picsum.photos/seed/p4/800/600",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Selected Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          </div>
          <a href="#" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            View All Projects
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-medium mb-2 uppercase tracking-wider">{project.category}</p>
              <h4 className="text-2xl font-bold group-hover:underline underline-offset-8 decoration-1">{project.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Contact</h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter max-w-4xl mx-auto">
          Let's build something <span className="text-gray-400">great</span> together.
        </h3>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Reach out via email or connect with me on social media.
        </p>
        <div className="flex flex-col items-center space-y-8">
          <a href="mailto:private.mizan@gmail.com" className="flex items-center gap-4 text-2xl font-medium hover:text-gray-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
              <Mail size={24} />
            </div>
            private.mizan@gmail.com
          </a>
          <div className="flex gap-6">
            <a href="https://facebook.com/Mizan7k" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Facebook size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Github size={24} />
            </a>
            <a href="mailto:private.mizan@gmail.com" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Minimalist Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Twitter</a>
          <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Instagram</a>
          <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-white selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
