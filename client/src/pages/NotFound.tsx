import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Minimalist Technical Elegance Design
 * - Clean typography with Playfair Display for headings
 * - Deep indigo (#2E3B8C) accents
 * - Asymmetric layout with generous whitespace
 * - Subtle micro-interactions and smooth animations
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">SM</div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("profile")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/40" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div
              className="mb-6 text-sm font-mono text-primary opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Welcome to my portfolio
            </div>
            <h1
              className="text-6xl md:text-7xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Sultan Mansour Raofi
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Senior Software Engineer & IT Analyst specializing in enterprise ERP systems, full-stack web development, and cloud solutions.
            </p>
            <div
              className="flex gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-primary">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Profile Image Section */}
      <section id="profile" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Profile
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />

            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted border-4 border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img
                    src="/images/profile-placeholder.jpg"
                    alt="Sultan Mansour Raofi"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23E8EAEF' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%236B7280' text-anchor='middle' dy='.3em'%3EAdd Your Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-center text-foreground text-sm font-medium px-4">
                      Add your professional photo here
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Sultan Mansour Raofi</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Senior Software Engineer & IT Analyst with 7+ years of experience in enterprise solutions, full-stack development, and cloud computing.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Location: Afghanistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Experience: 7+ Years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Specialization: ERP Systems & Web Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              About Me
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm an experienced software engineer with a passion for building scalable enterprise solutions. With over 7 years of professional experience, I've led teams in developing comprehensive ERP systems, web applications, and IT infrastructure solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My expertise spans full-stack development, cloud computing, and enterprise application management. I'm committed to delivering high-quality solutions that solve real business problems.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-foreground mb-2">Problem Solver</h3>
                  <p className="text-muted-foreground">
                    I thrive in challenging environments where I can apply my technical knowledge to create innovative solutions.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-foreground mb-2">Team Leader</h3>
                  <p className="text-muted-foreground">
                    Proven track record of leading successful IT projects and mentoring junior developers.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-foreground mb-2">Continuous Learner</h3>
                  <p className="text-muted-foreground">
                    Always expanding my skills with latest technologies and best practices in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Experience
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />

            <div className="space-y-8">
              {[
                {
                  title: "Senior Analyst IT ERP & MIS",
                  company: "Etisalat Afghanistan",
                  period: "2023 - Present",
                  description:
                    "Leading IT operations and ERP system management for a major telecommunications company. Overseeing infrastructure optimization and compliance initiatives.",
                },
                {
                  title: "Senior Web Developer & Application Support Officer",
                  company: "Bitton Technology",
                  period: "2022 - 2023",
                  description:
                    "Developed and maintained web applications using modern frameworks. Provided technical support and optimized application performance.",
                },
                {
                  title: "Senior Web Developer & Project Manager",
                  company: "Bitton Technology",
                  period: "2020 - 2022",
                  description:
                    "Led web development projects from conception to deployment. Managed teams and ensured timely delivery of high-quality solutions.",
                },
                {
                  title: "Lead Web Developer",
                  company: "Knight Software Development",
                  period: "2017 - 2019",
                  description:
                    "Architected and developed enterprise web applications. Mentored junior developers and established coding standards.",
                },
              ].map((job, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 md:py-32 bg-background relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/skills-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Technical Skills
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  category: "Programming Languages",
                  skills: ["Java", "C++", "C#", "Python", "PHP", "JavaScript", "X++"],
                },
                {
                  category: "Frameworks & Technologies",
                  skills: ["ASP.NET", "Laravel", "Django", "CodeIgniter", "RESTful APIs"],
                },
                {
                  category: "Frontend",
                  skills: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap", "React"],
                },
                {
                  category: "Backend & Databases",
                  skills: ["MySQL", "SQL Server", "AWS", "Linux", "Windows"],
                },
                {
                  category: "Enterprise Systems",
                  skills: ["Microsoft Dynamics AX", "Dynamics 365", "SharePoint", "ERP"],
                },
                {
                  category: "Specializations",
                  skills: ["SPA Development", "SEO", "Cloud Computing", "System Architecture"],
                },
              ].map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Featured Projects
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "University ERP Solutions",
                  description:
                    "Designed and developed comprehensive ERP platforms for 6+ universities, covering 11 modules including Student & Faculty Portals, Finance, Examination, LMS, Library, HR, and Quality Assurance.",
                  tags: ["ERP", "ASP.NET", "SQL Server", "Enterprise"],
                },
                {
                  title: "CV Maker & Job Portal",
                  description:
                    "Full-featured web application at work.af featuring CV creation tools, job recommendations using ML algorithms, and job portal functionality.",
                  tags: ["Full-Stack", "Laravel", "React", "Machine Learning"],
                },
                {
                  title: "Loan Tracking System",
                  description:
                    "Developed for ADF-USAID to track and manage loan disbursements and repayments with comprehensive reporting capabilities.",
                  tags: ["ASP.NET", "SQL Server", "Reporting"],
                },
                {
                  title: "Karma Online Shopping",
                  description:
                    "E-commerce web application with product catalog, shopping cart, payment integration, and order management system.",
                  tags: ["PHP", "Laravel", "MySQL", "E-commerce"],
                },
                {
                  title: "Office Management System",
                  description:
                    "Comprehensive MIS for Sahebe office covering HR, finance, inventory, and operations management.",
                  tags: ["MIS", "ASP.NET", "SQL Server"],
                },
                {
                  title: "NGO Management System",
                  description:
                    "WCLRF NGO MIS for managing operations, programs, and reporting for Women & Children Legal Research Foundation.",
                  tags: ["MIS", "Web Application", "Reporting"],
                },
              ].map((project, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs px-3 py-1 bg-primary/5 text-primary rounded border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Clients & Organizations
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />
            <p className="text-lg text-muted-foreground mb-12">
              I have had the privilege of working with leading organizations across telecommunications, education, finance, and non-profit sectors.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Etisalat Afghanistan", type: "Telecommunications" },
                { name: "Bitton Technology", type: "Software Development" },
                { name: "Knight Software", type: "Software Development" },
                { name: "Bakhtar University", type: "Education" },
                { name: "Cheragh Medical University", type: "Education" },
                { name: "Afghan Pamir Institute", type: "Education" },
                { name: "ADF - USAID", type: "Finance" },
                { name: "WCLRF NGO", type: "Non-Profit" },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className="relative group p-6 rounded-lg border-2 border-border hover:border-primary/50 bg-secondary/50 hover:bg-secondary transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[150px]"
                >
                  <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {client.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{client.name}</h3>
                    <p className="text-xs text-muted-foreground">{client.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Tip:</span> Replace the placeholder client names with your actual client logos. You can upload logo images to the <code className="bg-background px-2 py-1 rounded text-sm font-mono">/images/clients/</code> folder and update the component to display them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Technology Stack
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />
            <p className="text-lg text-muted-foreground mb-12">
              Here are the technologies, programming languages, and tools I have mastered throughout my career.
            </p>

            <div className="space-y-8">
              {[
                {
                  category: "Programming Languages",
                  items: [
                    { name: "Java", icon: "☕" },
                    { name: "Python", icon: "🐍" },
                    { name: "C++", icon: "⚙️" },
                    { name: "C#", icon: "#" },
                    { name: "PHP", icon: "🐘" },
                    { name: "JavaScript", icon: "⚡" },
                  ],
                },
                {
                  category: "Frontend Technologies",
                  items: [
                    { name: "React", icon: "⚛️" },
                    { name: "HTML5", icon: "🌐" },
                    { name: "CSS", icon: "🎨" },
                    { name: "Bootstrap", icon: "📦" },
                    { name: "jQuery", icon: "📜" },
                    { name: "Tailwind CSS", icon: "🎯" },
                  ],
                },
                {
                  category: "Backend & Frameworks",
                  items: [
                    { name: "ASP.NET", icon: "🔷" },
                    { name: "Laravel", icon: "🔴" },
                    { name: "Django", icon: "🟢" },
                    { name: "CodeIgniter", icon: "🔵" },
                    { name: "RESTful APIs", icon: "🔗" },
                    { name: "Node.js", icon: "🟩" },
                  ],
                },
                {
                  category: "Databases & Cloud",
                  items: [
                    { name: "MySQL", icon: "🐬" },
                    { name: "SQL Server", icon: "📊" },
                    { name: "AWS", icon: "☁️" },
                    { name: "Linux", icon: "🐧" },
                    { name: "Windows", icon: "🪟" },
                    { name: "SharePoint", icon: "📁" },
                  ],
                },
              ].map((techGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-foreground mb-6">{techGroup.category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {techGroup.items.map((tech, tidx) => (
                      <div
                        key={tidx}
                        className="group relative p-4 rounded-lg border-2 border-border hover:border-primary/50 bg-background hover:bg-secondary/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer transform hover:scale-105"
                      >
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-sm font-medium text-foreground">{tech.name}</p>
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Tip:</span> You can replace the emoji icons with actual technology logos by uploading images to the <code className="bg-background px-2 py-1 rounded text-sm font-mono">/images/tech/</code> folder and updating the component to display them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Achievements & Certifications
            </h2>
            <div className="h-1 w-16 bg-primary mb-12" />

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "3rd Position at ACM/ICPC Regional Programming Contest",
                "Responsive Web Design Certificate (FreeCodeCamp)",
                "JavaScript Algorithms & Data Structures Certificate (FreeCodeCamp)",
                "Python for Everybody Specialization (University of Michigan, Coursera)",
                "Machine Learning Specialization (DeepLearning.AI, Coursera)",
                "Agile with Atlassian Jira Certification (Atlassian, Coursera)",
                "Cybersecurity Training (InfoSec IQ, Etisalat Afghanistan)",
                "FTL Machine Learning Bootcamp (UNDP, 2024)",
              ].map((achievement, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Let's Work Together
            </h2>
            <div className="h-1 w-16 bg-primary-foreground mb-12 opacity-50" />

            <p className="text-lg mb-8 opacity-90">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you would like to collaborate or just say hello!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <a
                  href="mailto:sultanmansoor40@gmail.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  sultanmansoor40@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm">Mobile: (0093) 730186279</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 Sultan Mansour Raofi. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
