import { useState, useEffect } from "react";

const NAV = ["About", "Skills", "Projects", "Education", "Contact"];

const SKILLS = [
  { name: "Microsoft Excel", level: 90, desc: "Pivot Tables, VLOOKUP/XLOOKUP, Dashboards, Data Cleaning", logo: "/excel.svg", color: "#217346" },
  { name: "Power BI", level: 82, desc: "KPI Cards, DAX, Interactive Dashboards, Filters & Slicers", logo: "/powerbi.svg", color: "#F2C811" },
  { name: "Tableau", level: 72, desc: "Data Visualization, Charts, Dashboard Creation", logo: "/tableau.svg", color: "#E97627" },
  { name: "SQL / MySQL", level: 85, desc: "SELECT, JOIN, GROUP BY, Window Functions, Subqueries", logo: "/sql.svg", color: "#00618A" },
  { name: "Python", level: 75, desc: "Pandas, NumPy, Matplotlib, Seaborn, Data Analysis", logo: "/python.svg", color: "#3776AB" },
  { name: "Statistics", level: 80, desc: "Descriptive Stats, Probability, Sampling, Data Viz", logo: "/stats.svg", color: "#6C4BEF" },
  { name: "GitHub", level: 78, desc: "Version Control, Repositories, Project Management", logo: "/github.svg", color: "#24292e" },
  { name: "Google Sheets", level: 85, desc: "Formulas, Collaboration, Data Management", logo: "/sheets.svg", color: "#0F9D58" },
];

const PROJECTS = [
  {
    num: "01",
    title: "Retail Sales Analysis Dashboard",
    tech: ["Microsoft Excel"],
    period: "Jan 2026 – Feb 2026",
    github: "https://github.com",
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
    github: "https://github.com",
    points: [
      "Developed an interactive sales dashboard using Power BI to analyze sales, profit, quantity, and delivery performance.",
      "Created dynamic visualizations: KPI cards, bar charts, donut charts, and trend analysis reports.",
      "Implemented filters and slicers for region-wise and year-wise data analysis.",
      "Generated actionable business insights to support data-driven decision-making.",
    ],
    color: "#F2C811",
  },
];

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
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#F5F1E8", color: "#1a1a14" }}>

      {/* ── STICKY NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(245,241,232,0.97)" : "transparent",
          borderBottom: scrolled ? "1.5px solid #1a1a14" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <span className="font-playfair font-black text-xl tracking-tight">MF</span>
          {/* Desktop */}
          <div className="hidden md:flex gap-0">
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-1 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: active === item ? 600 : 400,
                  borderBottom: active === item ? "2px solid #1a1a14" : "2px solid transparent",
                  color: active === item ? "#1a1a14" : "#6a6a5a",
                }}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "#F5F1E8", borderTop: "1px solid #1a1a14" }} className="md:hidden px-6 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-left text-sm uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", fontWeight: 500 }}>
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO / MASTHEAD ── */}
      <section id="about" className="pt-20 pb-0">
        <div className="max-w-6xl mx-auto px-6">

          {/* Top editorial header */}
          <div style={{ borderTop: "2px solid #1a1a14", borderBottom: "1px solid #1a1a14" }} className="py-2 flex justify-between items-center">
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
              Est. 2026 · Bhopal, India
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
              Data Analyst Portfolio
            </span>
          </div>

          {/* Big name */}
          <div className="py-8 text-center" style={{ borderBottom: "2px solid #1a1a14" }}>
            <p className="text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a", letterSpacing: "0.4em" }}>
              — The Portfolio of —
            </p>
            <h1
              className="font-playfair font-black leading-none"
              style={{ fontSize: "clamp(52px, 12vw, 110px)", letterSpacing: "-0.02em" }}
            >
              Md Faiz
            </h1>
            <p className="text-xs tracking-widest uppercase mt-3" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a", letterSpacing: "0.35em" }}>
              Transforming Raw Data Into Meaningful Insights
            </p>
          </div>

          {/* Profile + intro 3-col layout */}
          <div
            className="grid gap-0"
            style={{
              gridTemplateColumns: "1fr 2px 1.4fr 2px 1fr",
              borderBottom: "1.5px solid #1a1a14",
            }}
          >
            {/* LEFT — stats */}
            <div className="py-10 pr-8 flex flex-col gap-6">
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

            {/* Vertical rule */}
            <div style={{ background: "#1a1a14" }} />

            {/* CENTER — profile pic + bio */}
            <div className="py-10 px-8 flex flex-col items-center text-center gap-6">
              {/* Profile picture */}
              <div
                className="relative"
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #1a1a14",
                  boxShadow: "6px 6px 0 #1a1a14",
                }}
              >
                <img src="/avatar.svg" alt="Md Faiz" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <p className="font-playfair text-xl font-bold mb-1">Md Faiz</p>
                <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
                  Data Analyst · B.Tech 2026
                </p>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter,sans-serif", color: "#4a4a3a" }}
              >
                Detail-oriented aspiring Data Analyst skilled in turning raw datasets into strategic insights. Passionate about Excel, SQL, and visual storytelling through Power BI dashboards.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href="mailto:mdfaiz0786r7362@gmail.com"
                  className="text-xs px-4 py-2 uppercase tracking-wider transition-all"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    background: "#1a1a14",
                    color: "#F5F1E8",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                  }}
                >
                  Hire Me
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-4 py-2 uppercase tracking-wider transition-all"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    border: "1.5px solid #1a1a14",
                    color: "#1a1a14",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                  }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Vertical rule */}
            <div style={{ background: "#1a1a14" }} />

            {/* RIGHT — contact + availability */}
            <div className="py-10 pl-8 flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
                Contact
              </p>
              <ContactLine icon="✉" label="Email" href="mailto:mdfaiz0786r7362@gmail.com" val="mdfaiz0786r7362@gmail.com" />
              <ContactLine icon="📞" label="Phone" href="tel:+917362896890" val="+91 73628 96890" />
              <ContactLine icon="💼" label="LinkedIn" href="#" val="View Profile ↗" />
              <ContactLine icon="🐙" label="GitHub" href="https://github.com" val="View Repos ↗" />

              <div style={{ borderTop: "1px solid #c8c4b0" }} className="pt-4 mt-2">
                <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
                  Open To
                </p>
                {["Full-time Roles", "Internships", "Freelance", "Consulting"].map((a) => (
                  <div key={a} className="flex items-center gap-2 py-1.5" style={{ borderBottom: "1px solid #e0dcce" }}>
                    <span style={{ fontSize: 8, color: "#1a1a14" }}>◆</span>
                    <span className="text-xs" style={{ fontFamily: "Inter,sans-serif" }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="§ 02" title="Skills & Expertise" />
          <div
            className="grid mt-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              borderTop: "2px solid #1a1a14",
            }}
          >
            {SKILLS.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="§ 03" title="Projects" />
          <div className="mt-6" style={{ borderTop: "2px solid #1a1a14" }}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.num} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="§ 04" title="Education" />
          <div
            className="grid mt-6"
            style={{ gridTemplateColumns: "1fr 2px 1fr", borderTop: "2px solid #1a1a14" }}
          >
            <div className="py-8 pr-8">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>2022 – 2026</p>
              <h3 className="font-playfair font-black text-2xl mb-2">Bachelor of Technology</h3>
              <p className="text-sm mb-1" style={{ fontFamily: "Inter,sans-serif", color: "#4a4a3a" }}>All Saints College of Technology</p>
              <p className="text-xs mb-4" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>RGPV University · Bhopal, MP</p>
              <div className="flex items-baseline gap-3">
                <span className="font-playfair font-black text-5xl">7.54</span>
                <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>CGPA / 10</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Data Structures", "DBMS", "Statistics", "Python"].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 uppercase tracking-wide" style={{ fontFamily: "Inter,sans-serif", border: "1px solid #1a1a14", fontSize: 10 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ background: "#1a1a14" }} />
            <div className="py-8 pl-8">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>2021 – 2022</p>
              <h3 className="font-playfair font-black text-2xl mb-2">Intermediate / 12th Grade</h3>
              <p className="text-sm mb-1" style={{ fontFamily: "Inter,sans-serif", color: "#4a4a3a" }}>RSB. +2 School, Samastipur</p>
              <p className="text-xs mb-4" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>Bihar State Board</p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-playfair font-black text-5xl">XII</span>
                <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>Completed</span>
              </div>
              <div style={{ borderTop: "1px solid #c8c4b0" }} className="pt-4">
                <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>Journey</p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Inter,sans-serif", color: "#4a4a3a" }}>
                  From Bihar to Bhopal — a technical journey driven by curiosity about how data shapes decisions in the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="§ 05" title="Get in Touch" />
          <div
            className="mt-6 grid gap-0"
            style={{ gridTemplateColumns: "1fr 2px 1fr", borderTop: "2px solid #1a1a14" }}
          >
            <div className="py-10 pr-10">
              <p className="font-playfair text-2xl font-bold mb-4">Let's work together.</p>
              <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: "Inter,sans-serif", color: "#4a4a3a" }}>
                Open to opportunities in data analytics, business intelligence, and data visualization. Whether it's a full-time role, internship, or freelance project — I'd love to hear from you.
              </p>
              <a
                href="mailto:mdfaiz0786r7362@gmail.com"
                className="inline-block text-sm px-6 py-3 uppercase tracking-widest font-semibold transition-all"
                style={{
                  fontFamily: "Inter,sans-serif",
                  background: "#1a1a14",
                  color: "#F5F1E8",
                  letterSpacing: "0.2em",
                }}
              >
                Send an Email →
              </a>
            </div>
            <div style={{ background: "#1a1a14" }} />
            <div className="py-10 pl-10">
              <div className="flex flex-col gap-0">
                {[
                  { icon: "✉", label: "Email", val: "mdfaiz0786r7362@gmail.com", href: "mailto:mdfaiz0786r7362@gmail.com" },
                  { icon: "📞", label: "Phone", val: "+91 73628 96890", href: "tel:+917362896890" },
                  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/mdfaiz", href: "#" },
                  { icon: "🐙", label: "GitHub", val: "github.com/mdfaiz", href: "https://github.com" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 py-4 transition-opacity hover:opacity-70"
                    style={{ borderBottom: "1px solid #c8c4b0", textDecoration: "none", color: "inherit" }}
                  >
                    <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{c.icon}</span>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a", width: 56 }}>{c.label}</span>
                    <span className="text-sm" style={{ fontFamily: "Inter,sans-serif", color: "#1a1a14" }}>{c.val}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "2px solid #1a1a14", background: "#1a1a14", color: "#F5F1E8" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-3">
          <span className="font-playfair font-black text-lg">Md Faiz</span>
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
            Data Analyst · Portfolio 2026
          </span>
          <span className="text-xs" style={{ fontFamily: "Inter,sans-serif", color: "#6a6a5a" }}>
            Built with React + Tailwind · Paper Template
          </span>
        </div>
      </footer>

    </div>
  );
}

/* ── SUB COMPONENTS ── */

function SectionHead({ num, title }) {
  return (
    <div className="flex items-baseline gap-4 mb-0">
      <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>{num}</span>
      <h2 className="font-playfair font-black" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>{title}</h2>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>{label}</p>
      <p className="text-sm font-semibold" style={{ fontFamily: "Inter,sans-serif" }}>{value}</p>
    </div>
  );
}

function Divline() {
  return <div style={{ borderTop: "1px solid #c8c4b0" }} />;
}

function ContactLine({ icon, label, href, val }) {
  return (
    <a href={href} className="flex items-start gap-2 group" style={{ textDecoration: "none", color: "inherit" }}>
      <span style={{ fontSize: 13 }}>{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a", fontSize: 9 }}>{label}</p>
        <p className="text-xs group-hover:underline" style={{ fontFamily: "Inter,sans-serif", color: "#1a1a14", wordBreak: "break-all" }}>{val}</p>
      </div>
    </a>
  );
}

function SkillCard({ skill, i }) {
  const cols = 4;
  const isLastInRow = (i + 1) % cols === 0;
  return (
    <div
      className="p-5 flex flex-col gap-3 transition-all duration-200 group"
      style={{
        borderBottom: "1px solid #c8c4b0",
        borderRight: isLastInRow ? "none" : "1px solid #c8c4b0",
        cursor: "default",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#EDE9DC"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
    >
      <div className="flex items-center gap-3">
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            overflow: "hidden",
            border: "1.5px solid #1a1a14",
            flexShrink: 0,
          }}
        >
          <img src={skill.logo} alt={skill.name} style={{ width: "100%", height: "100%" }} />
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: "Inter,sans-serif" }}>{skill.name}</p>
      </div>
      <p className="text-xs leading-relaxed" style={{ fontFamily: "Inter,sans-serif", color: "#6a6a5a" }}>{skill.desc}</p>
      {/* Progress bar */}
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a", fontSize: 9 }}>Proficiency</span>
          <span className="text-xs font-semibold" style={{ fontFamily: "Inter,sans-serif", fontSize: 10 }}>{skill.level}%</span>
        </div>
        <div style={{ height: 3, background: "#c8c4b0", borderRadius: 2 }}>
          <div
            style={{
              height: "100%",
              width: `${skill.level}%`,
              background: "#1a1a14",
              borderRadius: 2,
              transition: "width 0.8s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className="py-8 transition-all duration-200"
      style={{ borderBottom: "1px solid #c8c4b0" }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
        <div className="flex items-start gap-5">
          {/* Big number */}
          <span
            className="font-playfair font-black leading-none"
            style={{ fontSize: 56, color: "#c8c4b0", lineHeight: 1, flexShrink: 0 }}
          >
            {project.num}
          </span>
          <div>
            <h3 className="font-playfair font-black text-2xl mb-2">{project.title}</h3>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 uppercase tracking-wider font-semibold"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    background: "#1a1a14",
                    color: "#F5F1E8",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "Inter,sans-serif", color: "#8a8a7a" }}>
            {project.period}
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs px-3 py-1.5 uppercase tracking-wider font-semibold transition-all hover:opacity-70"
            style={{
              fontFamily: "Inter,sans-serif",
              border: "1.5px solid #1a1a14",
              color: "#1a1a14",
              fontSize: 10,
              letterSpacing: "0.15em",
              textDecoration: "none",
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 ml-0 md:ml-20">
        {project.points.map((pt) => (
          <li key={pt} className="flex items-start gap-3">
            <span style={{ color: "#8a8a7a", flexShrink: 0, marginTop: 3 }}>◦</span>
            <span className="text-sm leading-relaxed" style={{ fontFamily: "Inter,sans-serif", color: "#4a4a3a" }}>{pt}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}