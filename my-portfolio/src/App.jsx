import { useState, useEffect } from "react";

const NAV = ["About", "Skills", "Projects", "Education", "Contact"];

const SKILLS = [
  { name: "Microsoft Excel", level: 90, desc: "Pivot Tables, VLOOKUP/XLOOKUP, Dashboards, Data Cleaning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg", color: "#217346" },
  { name: "Power BI", level: 82, desc: "KPI Cards, DAX, Interactive Dashboards, Filters & Slicers", logo: "https://cdn-icons-png.flaticon.com/512/732/732233.png", color: "#F2C811" },
  { name: "Tableau", level: 72, desc: "Data Visualization, Charts, Dashboard Creation", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968528.png", color: "#E97627" },
  { name: "SQL / MySQL", level: 85, desc: "SELECT, JOIN, GROUP BY, Window Functions, Subqueries", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#00618A" },
  { name: "Python", level: 75, desc: "Pandas, NumPy, Matplotlib, Seaborn, Data Analysis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Statistics", level: 80, desc: "Descriptive Stats, Probability, Sampling, Data Viz", logo: "https://cdn-icons-png.flaticon.com/512/2791/2791387.png", color: "#6C4BEF" },
  { name: "GitHub", level: 78, desc: "Version Control, Repositories, Project Management", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#24292e" },
  { name: "Google Sheets", level: 85, desc: "Formulas, Collaboration, Data Management", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", color: "#0F9D58" },
];

const PROJECTS = [
  {
    num: "01",
    title: "Retail Sales Analysis Dashboard",
    tech: ["Microsoft Excel"],
    period: "Jan 2026 – Feb 2026",
    github: "https://github.com/mdfaiz0786r7362-lang/Retail-Sales-Performance-Dashboard",
    points: [
      "Built an interactive Excel dashboard to analyze sales, profit, and regional performance.",
      "Used Pivot Tables, charts, and slicers for dynamic reporting across multiple dimensions.",
      "Performed data cleaning and transformation using advanced Excel formulas.",
      "Identified top-performing products and regions driving maximum revenue.",
    ],
    color: "#217346",
  },
  {
    num: "02",
    title: "Super Store Sales Dashboard",
    tech: ["Power BI", "Excel"],
    period: "Jun 2026 – Aug 2026",
    github: "https://github.com/mdfaiz0786r7362-lang/Employee-Management-System-",
    points: [
      "Developed an interactive sales dashboard using Power BI to analyze sales, profit, quantity, and delivery performance.",
      "Created dynamic visualizations: KPI cards, bar charts, donut charts, and trend analysis reports.",
      "Implemented filters and slicers for region-wise and year-wise data analysis.",
      "Generated actionable business insights to support data-driven decision-making.",
    ],
    color: "#F2C811",
  },
];

// Helper Components
const SectionHead = ({ num, title }) => (
  <div className="flex items-baseline gap-4 mb-0">
    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#8a8a7a" }}>{num}</span>
    <h2 className="font-playfair font-black" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>{title}</h2>
  </div>
);

const Stat = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Inter, sans-serif", color: "#8a8a7a" }}>{label}</p>
    <p className="text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{value}</p>
  </div>
);

const Divline = () => <div className="border-t border-[#c8c4b0] w-full" />;

const ContactLine = ({ icon, label, href, val }) => (
  <a href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-start gap-2 group no-underline text-inherit hover:opacity-70 transition-opacity">
    <span style={{ fontSize: 13 }}>{icon}</span>
    <div>
      <p className="text-[9px] uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif", color: "#8a8a7a" }}>{label}</p>
      <p className="text-xs group-hover:underline break-all" style={{ fontFamily: "Inter, sans-serif", color: "#1a1a14" }}>{val}</p>
    </div>
  </a>
);

const SkillCard = ({ skill, index }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setWidth(skill.level), 100);
    return () => clearTimeout(timer);
  }, [skill.level]);
  
  return (
    <div className="p-5 flex flex-col gap-3 transition-all duration-200 hover:bg-[#EDE9DC] border-b border-[#c8c4b0] md:border-r md:border-[#c8c4b0] last:border-r-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-[#1a1a14] flex-shrink-0 bg-white p-1">
          <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{skill.name}</p>
      </div>
      <p className="text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6a6a5a" }}>{skill.desc}</p>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-[9px] uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif", color: "#8a8a7a" }}>Proficiency</span>
          <span className="text-[10px] font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{skill.level}%</span>
        </div>
        <div className="h-1 bg-[#c8c4b0] rounded-full overflow-hidden">
          <div className="h-full bg-[#1a1a14] rounded-full transition-all duration-700 ease-out" style={{ width: `${width}%` }} />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <article className="py-8 border-b border-[#c8c4b0] last:border-b-0">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
      <div className="flex items-start gap-5">
        <span className="font-playfair font-black leading-none text-5xl md:text-6xl text-[#c8c4b0]">{project.num}</span>
        <div>
          <h3 className="font-playfair font-black text-2xl mb-2">{project.title}</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] px-3 py-1 uppercase tracking-wider font-semibold bg-[#1a1a14] text-[#F5F1E8]">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
        <span className="text-xs uppercase tracking-wider text-[#8a8a7a]">{project.period}</span>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] px-3 py-1.5 uppercase tracking-wider font-semibold border-2 border-[#1a1a14] text-[#1a1a14] hover:bg-[#1a1a14] hover:text-[#F5F1E8] transition-all">GitHub ↗</a>
      </div>
    </div>
    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 ml-0 md:ml-20">
      {project.points.map((pt, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="text-[#8a8a7a] flex-shrink-0 mt-0.5">◦</span>
          <span className="text-sm leading-relaxed text-[#4a4a3a]" style={{ fontFamily: "Inter, sans-serif" }}>{pt}</span>
        </li>
      ))}
    </ul>
  </article>
);

// Main App Component
export default function App() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#F5F1E8", color: "#1a1a14" }}>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5F1E8]/90 backdrop-blur-md border-b border-[#1a1a14]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <span className="font-playfair font-black text-xl tracking-tight">MF</span>
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-0">
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`px-4 py-1 text-xs tracking-widest uppercase transition-all duration-200 ${
                  active === item ? 'border-b-2 border-[#1a1a14] font-semibold' : 'border-b-2 border-transparent font-normal'
                }`}
                style={{ color: active === item ? "#1a1a14" : "#6a6a5a" }}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#F5F1E8] border-t border-[#1a1a14] px-6 py-4 flex flex-col gap-3 shadow-lg">
            {NAV.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-left text-sm uppercase tracking-widest font-medium">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* About / Hero Section */}
      <section id="about" className="pt-20 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Bar */}
          <div className="border-t-2 border-b border-[#1a1a14] py-2 flex justify-between items-center flex-wrap gap-2">
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#8a8a7a]">Est. 2026 · Bhopal, India</span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#8a8a7a]">Data Analyst Portfolio</span>
          </div>

          {/* Hero Title */}
          <div className="py-8 text-center border-b-2 border-[#1a1a14]">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-[#8a8a7a]">— The Portfolio of —</p>
            <h1 className="font-playfair font-black leading-none text-[clamp(48px,12vw,110px)] tracking-[-0.02em]">Md Faiz</h1>
            <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase mt-3 text-[#8a8a7a]">Transforming Raw Data Into Meaningful Insights</p>
          </div>

          {/* 3-Column Responsive Layout (Stack on mobile) */}
          <div className="flex flex-col lg:flex-row border-b-2 border-[#1a1a14]">
            {/* Left Stats */}
            <div className="w-full lg:w-1/3 py-8 pr-0 lg:pr-8 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#1a1a14]">
              <Stat label="Academic CGPA" value="7.54 / 10" />
              <Divline />
              <Stat label="Projects Built" value="2 Dashboards" />
              <Divline />
              <Stat label="Core Tools" value="Excel · SQL · BI" />
              <Divline />
              <Stat label="Location" value="Bhopal, India" />
              <Divline />
              <Stat label="Languages" value="Hindi · English" />
            </div>

            {/* Center Profile */}
            <div className="w-full lg:w-1/3 py-8 px-0 lg:px-8 flex flex-col items-center text-center gap-6 border-b lg:border-b-0 lg:border-r border-[#1a1a14]">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#1a1a14] shadow-[6px_6px_0_#1a1a14]">
                <img src="https://ui-avatars.com/api/?name=Md+Faiz&background=1a1a14&color=F5F1E8&bold=true&size=128" alt="Md Faiz" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-playfair text-xl font-bold mb-1">Md Faiz</p>
                <p className="text-xs uppercase tracking-widest text-[#8a8a7a]">Data Analyst · B.Tech 2026</p>
              </div>
              <p className="text-sm leading-relaxed text-[#4a4a3a] max-w-sm">Detail-oriented aspiring Data Analyst skilled in turning raw datasets into strategic insights. Passionate about Excel, SQL, and visual storytelling through Power BI dashboards.</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="mailto:mdfaiz0786r7362@gmail.com" className="text-xs px-5 py-2 uppercase tracking-[0.15em] bg-[#1a1a14] text-[#F5F1E8] font-semibold hover:opacity-90 transition">Hire Me</a>
                <a href="https://github.com/mdfaiz0786r7362-lang" target="_blank" rel="noopener noreferrer" className="text-xs px-5 py-2 uppercase tracking-[0.15em] border-2 border-[#1a1a14] text-[#1a1a14] font-medium hover:bg-[#1a1a14] hover:text-[#F5F1E8] transition">GitHub ↗</a>
              </div>
            </div>

            {/* Right Contact */}
            <div className="w-full lg:w-1/3 py-8 pl-0 lg:pl-8 flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-[#8a8a7a]">Contact</p>
              <ContactLine icon="✉" label="Email" href="mailto:mdfaiz0786r7362@gmail.com" val="mdfaiz0786r7362@gmail.com" />
              <ContactLine icon="📞" label="Phone" href="tel:+917362896890" val="+91 73628 96890" />
              <ContactLine icon="💼" label="LinkedIn" href="https://www.linkedin.com/in/md-faiz-459627367" val="View Profile ↗" />
              <ContactLine icon="🐙" label="GitHub" href="https://github.com/mdfaiz0786r7362-lang" val="View Repos ↗" />
              <div className="border-t border-[#c8c4b0] pt-4 mt-2">
                <p className="text-xs uppercase tracking-widest mb-3 text-[#8a8a7a]">Open To</p>
                {["Full-time Roles", "Internships", "Freelance", "Consulting"].map((a) => (
                  <div key={a} className="flex items-center gap-2 py-1.5 border-b border-[#e0dcce]">
                    <span className="text-[8px] text-[#1a1a14]">◆</span>
                    <span className="text-xs">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHead num="§ 02" title="Skills & Expertise" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 border-t-2 border-[#1a1a14]">
            {SKILLS.map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHead num="§ 03" title="Projects" />
          <div className="mt-6 border-t-2 border-[#1a1a14]">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.num} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHead num="§ 04" title="Education" />
          <div className="flex flex-col lg:flex-row mt-6 border-t-2 border-[#1a1a14]">
            <div className="w-full lg:w-1/2 py-8 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-[#1a1a14]">
              <p className="text-xs uppercase tracking-widest mb-2 text-[#8a8a7a]">2022 – 2026</p>
              <h3 className="font-playfair font-black text-2xl mb-2">Bachelor of Technology</h3>
              <p className="text-sm mb-1 text-[#4a4a3a]">All Saints College of Technology</p>
              <p className="text-xs mb-4 text-[#8a8a7a]">RGPV University · Bhopal, MP</p>
              <div className="flex items-baseline gap-3">
                <span className="font-playfair font-black text-5xl">7.54</span>
                <span className="text-xs uppercase tracking-widest text-[#8a8a7a]">CGPA / 10</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Data Structures", "DBMS", "Statistics", "Python"].map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 uppercase tracking-wide border border-[#1a1a14]">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-8 pl-0 lg:pl-8">
              <p className="text-xs uppercase tracking-widest mb-2 text-[#8a8a7a]">2021 – 2022</p>
              <h3 className="font-playfair font-black text-2xl mb-2">Intermediate / 12th Grade</h3>
              <p className="text-sm mb-1 text-[#4a4a3a]">RSB. +2 School, Samastipur</p>
              <p className="text-xs mb-4 text-[#8a8a7a]">Bihar State Board</p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-playfair font-black text-5xl">XII</span>
                <span className="text-xs uppercase tracking-widest text-[#8a8a7a]">Completed</span>
              </div>
              <div className="border-t border-[#c8c4b0] pt-4">
                <p className="text-xs uppercase tracking-widest mb-2 text-[#8a8a7a]">Journey</p>
                <p className="text-sm leading-relaxed text-[#4a4a3a]">From Bihar to Bhopal — a technical journey driven by curiosity about how data shapes decisions in the real world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHead num="§ 05" title="Get in Touch" />
          <div className="flex flex-col lg:flex-row mt-6 border-t-2 border-[#1a1a14]">
            <div className="w-full lg:w-1/2 py-10 pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#1a1a14]">
              <p className="font-playfair text-2xl font-bold mb-4">Let's work together.</p>
              <p className="text-sm leading-relaxed mb-8 text-[#4a4a3a]">Open to opportunities in data analytics, business intelligence, and data visualization. Whether it's a full-time role, internship, or freelance project — I'd love to hear from you.</p>
              <a href="mailto:mdfaiz0786r7362@gmail.com" className="inline-block text-sm px-6 py-3 uppercase tracking-[0.2em] font-semibold bg-[#1a1a14] text-[#F5F1E8] hover:opacity-90 transition">Send an Email →</a>
            </div>
            <div className="w-full lg:w-1/2 py-10 pl-0 lg:pl-10">
              <div className="flex flex-col gap-0">
                {[
                  { icon: "✉", label: "Email", val: "mdfaiz0786r7362@gmail.com", href: "mailto:mdfaiz0786r7362@gmail.com" },
                  { icon: "📞", label: "Phone", val: "+91 73628 96890", href: "tel:+917362896890" },
                  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/mdfaiz", href: "https://www.linkedin.com/in/md-faiz-459627367" },
                  { icon: "🐙", label: "GitHub", val: "github.com/mdfaiz", href: "https://github.com/mdfaiz0786r7362-lang" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 py-4 border-b border-[#c8c4b0] hover:opacity-70 transition no-underline text-inherit">
                    <span className="text-lg w-6 text-center">{c.icon}</span>
                    <span className="text-xs uppercase tracking-widest text-[#8a8a7a] w-14">{c.label}</span>
                    <span className="text-sm text-[#1a1a14] break-all">{c.val}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#1a1a14] bg-[#1a1a14] text-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-playfair font-black text-lg">Md Faiz</span>
          <span className="text-xs uppercase tracking-widest text-[#8a8a7a]">Data Analyst · Portfolio 2026</span>
          <span className="text-xs text-[#6a6a5a]">Built with React + Tailwind · Paper Template</span>
        </div>
      </footer>
    </div>
  );
}