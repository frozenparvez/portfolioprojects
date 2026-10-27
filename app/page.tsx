"use client";

import { useState, useEffect } from "react";

const skills = [
  "Manual Testing",
  "Test Case Design & Execution",
  "Bug Reporting & Defect Documentation",
  "Regression Testing",
  "Functional Testing",
  "Software Quality Assurance (SQA)",
  "HTML",
  "CSS",
  "ReactJS",
  "Tailwind CSS",
  "JavaScript",
  "Git/GitHub",
  "VS Code",
  "Microsoft Excel",
  "Data Analysis & Reporting",
  "E-commerce Operations",
];

const projects = [
  {
    title: "Flower Shop Website",
    description:
      "Created an SEO-friendly flower shop site that's responsive and aesthetically pleasing using HTML, CSS, and a CSS framework ensuring a user-friendly layout while staying true to the brand and scalable design.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/parvez",
    status: "Completed",
  },
  {
    title: "Delivery Management System",
    description:
      "Building a web delivery system with HTML, CSS, React.js, Node.js, and Express.js which connects those who send with local delivery people via a request-based architecture.",
    tech: ["ReactJS", "Node.js", "Express.js", "HTML", "CSS"],
    github: "https://github.com/parvez",
    status: "In Progress",
  },
  {
    title: "Elegance Express (E-commerce Platform)",
    description:
      "Built and managed a WordPress and WooCommerce-based e-commerce store with mobile-first design, secure payments, product management, and customized themes to enhance user experience.",
    tech: ["WordPress", "WooCommerce"],
    github: null,
    status: "In Progress",
  },
];

const experience = [
  {
    role: "Junior Software Engineer (SQA) - Intern",
    company: "PlanPost AI",
    location: "Dhaka, Bangladesh",
    period: "Sep 2026 to Till Now",
    achievements: [
      "Identified and documented software defects to support product quality improvement.",
      "Contributed to improving application quality through structured manual testing",
    ],
    responsibilities: [
      "Execute manual tests to verify application functionality against requirements.",
      "Design and execute test cases and report bugs with clear reproduction steps.",
      "Perform functional and regression testing and document test results.",
    ],
  },
  {
    role: "Junior Software Engineer (SQA) - Intern",
    company: "SMART CV MAKER",
    location: "Dhaka, Bangladesh",
    period: "Jan 2025 to Jan 2026",
    achievements: [
      "Generated and provided over 600 ATS-optimized resumes resulting in increased interview shortlists for clients.",
      "Managed CV, cover letter, SOP, profile customization with uniform quality and as per ATS standards.",
      "Utilized Excel for data-tracking and reporting; enhancing speed and accuracy of day-to-day functions",
    ],
    responsibilities: [
      "Maintained records, and operational reports using MS Excel to ensure accurate data tracking and documentation.",
      "Prepared performance reports and data analysis to support management decision-making and operational efficiency.",
      "Managed documentation review, record updates, and quality control to ensure accuracy across client projects.",
    ],
  },
  {
    role: "E-COMMERCE OPERATIONS & MARKETING EXECUTIVE",
    company: "Elegance Xpress",
    location: "Dhaka, Bangladesh",
    period: "Oct 2023 to Aug 2026",
    achievements: [
      "Streamlined order processing and increased efficiency by liaison with logistics, customer service, and production teams.",
      "More web sales and brand exposure to targeted digital marketing efforts and ad promoting.",
      "Created high-impact logos and ad creatives to continue strong brand identity",
    ],
    responsibilities: [
      "Oversaw entire e-commerce processes, from orders to delivery schedules.",
      "Deployed digital marketing campaigns in all social and online platforms.",
      "Collaborated with sales organization to monitor orders, promotions and customer needs.",
      "Facilitated coordination among the customer service, logistics and production departments.",
    ],
  },
];

const education = [
  {
    degree: "BSE in CSE",
    institution: "Green University of Bangladesh",
    year: "2025",
  },
  {
    degree: "HSC in Science",
    institution: "Tejgoan College, Dhaka",
    year: "2019",
  },
  {
    degree: "SSC in Science",
    institution: "NF & BN High School, Cumilla",
    year: "2017",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient"
            >
              PERVEZ MOSARAF
            </a>
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg animate-glow"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Welcome to my Portfolio
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">PERVEZ</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              MOSARAF
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-semibold">
            SQA Engineer | Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about ensuring software quality through manual testing, test case design, and defect documentation. 
            Skilled in web technologies and committed to delivering bug-free, user-friendly applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 group-hover:text-white">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                To support IT/SQA operations by utilizing expertise in data management, reporting, and process optimization 
                while applying knowledge of manual testing, test case creation, defect reporting, and documentation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Basic knowledge of Software Quality Assurance (SQA), manual testing, and software testing principles. 
                Introduce with test case design, test execution, bug reporting, and defect documentation. 
                Skilled in technical documentation, data management, record maintenance, and quality control.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">600+</div>
                  <div className="text-sm text-gray-400">ATS-Optimized Resumes</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-400">Internships</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Manual Testing",
                    "Test Case Design",
                    "Bug Reporting",
                    "Data Management",
                    "Technical Documentation",
                    "Quality Control",
                    "Process Optimization",
                    "E-commerce Operations",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 text-sm text-purple-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <span className="mt-3 lg:mt-0 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 text-purple-300 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  {exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.responsibilities.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-pink-400 mb-3">Duties & Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-pink-400 mt-1">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-pink-500/30 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-xs text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-medium"
                    >
                      <span>View on GitHub</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white font-medium transition-colors">
                  {skill}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">🎓</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-400">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Professional Qualifications & Certifications
              </span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "SQA Intern - PlanePost AI (Sep 2026 - Present)",
                "Software Engineer Intern - Mastermind Technologies (Oct 2023 - Jan 2024)",
                "Web Development - Programming Hero (2023)",
                "Foundation as a Programmer - Team Phitron (2022-2023)",
                "Web Design - Meximy (2024)",
                "Complete AI Mastery & Advanced Prompt Engineering - Udemy (2025)",
                "AI Workflows & Agents - GP Academy",
                "Competitive Programming & Problem Solving (HackerRank, Codeforces)",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-900/50 to-black/50 border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                >
                  <span className="text-purple-400">✓</span>
                  <span className="text-sm text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:parvezhasan102030@gmail.com"
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    parvezhasan102030@gmail.com
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/8801644274554"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 6.589-11.954 11.87  -11.951 3.177.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.486 8.414-.003 6.557-6.589 11.954-11.913 11.954 -2.117-.001-4.  2-.558-6.032-1.629l-6.529 1.713zm6.557-5.166c-.354-.177-2.099-.938-2.421-1.046-.323-.109-.558-.177-.794.177-.236.354-.916 1.046-1.123 1.261-.206.215-.412.236-.765.059-.354-.177-1.494-.55-2.844-1.755 -1.051-1.043-1.762-2.328-1.968-2.682-.206-.354-.022-.545.155-.722.159-.158.354-.412.531-.618.177-.206.236-.354.354-.59.118-.236.059-.431-.03-.618-.088-.177-.794-1.911-1.088-2.617-.283-.647-.57-.56-.794-.57l-.676-.01c-.236 0-.618.088-.941.431s-1.235 1.206-1.235 2.944c0 1.737 1.265 3.417 1.442 3.656.177.236 2.513 3.853 6.056 5.476 2.26 1.056 2.944 1.127 3.983 1.018.876-.096 2.643-1.27 3.016-2.47.372-1.94 1.282-8.44 1.282-8.44-.074-18.81-18.045-18.677 8.39-18.682 8.863.001 15.808 7.256 15.804 15.137-.003 5.743-3.501 9.767-5.735 11.992" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-green-300 transition-colors">
                    +880 1644 - 274554
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/pervezmosaraf"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.84-1.764 1.75-1.764 1.75.79 1.75 1.764-.83 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.969z" />
              </svg>
            </a>
            <a
              href="https://github.com/parvez"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-500/30 backdrop-blur-sm hover:border-gray-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793- .577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-1.592. 893-1.32-8.16-1.285-5.669-1.694 1.249-2.356 1.563-2.356 1.563-.793 1.871-2.393 1.331-3.492 1.04-.059-1.142-.462-1.311-1.291-1.729c.284-.289.861-1.668.695-2. 0 0-.405-1.05-1.303-2.362 0 0-1.08-.322-3.301 1.23-.93-6.65-4.01-6.65-8.288 0-1.81.624-2.806 1.325-3.822-.129-.303-58-1.52.127-3.18 0 0 1.005-3.2 0-0.34-.136-0.73-0.204-1.12-0.204c-0.39 0-0.76 0.068-1.12 0.204 0 1-15.008 3.20019-1.008 3.20019c-0.929 1.016-1.293 2.012-1.293 3.822 0 6.286 2.02 8.259 8.043 8.666-.654.571-1.153 1.812-1.153 1.762v3.293c0.319.192  .694.801.076 0 1.5.12 3.01.12 4.503 0 1.703-0.234 3.488-0.895 3.688-0.359 0.862-0.142 1.747-0.142 1.747-0.079.81-0.235 1.06-0.503 1.061- .577v-2.238c-3.266 0.666-3.931 1.637-4.021 1.662z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/30 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2026 Pervaz Mosaraf. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
