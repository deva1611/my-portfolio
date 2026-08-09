import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Contact"];

const COLORS = {
  bg: "#ffffff",
  bgAlt: "#f5f7fb",
  text: "#16181d",
  muted: "#5b6270",
  accent: "#1d4ed8",
  accentLight: "#e6edfd",
  border: "#e3e5e9",
  darkBg: "#0b1220",
  darkMuted: "rgba(255,255,255,0.7)",
  darkBorder: "rgba(255,255,255,0.18)"
};

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const STACK_CHIPS = ["C++", "Python", "PostgreSQL", "Docker", "CI/CD", "ESP32"];

const PROJECTS = [
  {
    id: 1,
    title: "Smart Grid Anomaly Detection System",
    description: "A real-time anomaly detection pipeline for smart electricity meter data. A C++ engine (Welford's algorithm over a sliding window) flags unusual readings, exposed through a Python FastAPI service and persisted to PostgreSQL. Containerized with Docker and built and tested automatically on every push via GitHub Actions.",
    tech: ["C++", "Python", "PostgreSQL", "Docker", "GitHub Actions"],
    live: "https://smart-grid-anomaly-detector.onrender.com/docs",
    link: "https://github.com/deva1611/smart-grid-anomaly-detector",
    featured: true
  },
  {
    id: 2,
    title: "Face Recognition Security System",
    description: "Real-time face recognition using C++ and OpenCV, running on Linux with a live video feed and integration with an ESP32 camera module. Built independently to strengthen my computer vision and embedded integration experience.",
    tech: ["C++", "OpenCV", "ESP32", "Linux", "CMake"],
    live: null,
    link: "https://github.com/deva1611/face-recognition-security"
  },
  {
    id: 3,
    title: "NHS vs Private Decision Engine",
    description: "A web application built with Python and Flask that helps UK residents compare NHS and private healthcare options. Deployed and publicly accessible.",
    tech: ["Python", "Flask", "REST API"],
    live: "https://nhs-vs-private.onrender.com",
    link: "https://github.com/deva1611/nhs-vs-private"
  }
];

const SKILL_GROUPS = [
  { category: "Languages", items: ["C++", "Python", "C"] },
  { category: "Data", items: ["SQL", "PostgreSQL"] },
  { category: "Embedded", items: ["ESP32", "Microcontrollers", "Hardware–software integration"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions (CI/CD)"] },
  { category: "Web", items: ["Flask", "React", "HTML", "CSS"] },
  { category: "Tools", items: ["Git", "Linux", "CMake"] }
];

const CERTIFICATIONS = ["Complete Modern C++ (C++11/14/17)", "C Programming"];

function Eyebrow({ children }) {
  return (
    <p style={{ color: COLORS.accent, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.75rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span style={{ display: "inline-block", width: "18px", height: "2px", background: COLORS.accent }} />
      {children}
    </p>
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textColor = scrolled ? COLORS.muted : "rgba(255,255,255,0.8)";
  const logoColor = scrolled ? COLORS.text : "#fff";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1.1rem 3rem",
      background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
      transition: "all 0.3s ease",
      fontFamily: FONT
    }}>
      <div style={{ color: logoColor, fontSize: "1rem", fontWeight: 700, letterSpacing: "0.02em", display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.accent, display: "inline-block" }} />
        Devendra Reddy Keesara
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => {
            e.preventDefault();
            setActive(link);
            const el = document.getElementById(link.toLowerCase());
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }} style={{
            color: active === link ? COLORS.accent : textColor,
            textDecoration: "none", fontSize: "0.85rem",
            fontWeight: active === link ? 600 : 400,
            transition: "color 0.2s", cursor: "pointer"
          }}>{link}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={{ minHeight: "92vh", display: "flex", alignItems: "center", padding: "6rem 3rem 2rem", position: "relative", overflow: "hidden", background: COLORS.darkBg }}>
      <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", top: "-15%", right: "-10%", background: `radial-gradient(circle, ${COLORS.accent}33 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ width: "110px", height: "110px", borderRadius: "50%", background: "#fff", color: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 800, flexShrink: 0, border: `3px solid ${COLORS.accent}` }}>
            DRK
          </div>
          <div style={{ flex: 1, minWidth: "280px" }}>
            <div style={{ display: "inline-block", border: `1px solid ${COLORS.darkBorder}`, borderRadius: "0.4rem", padding: "0.35rem 0.9rem", marginBottom: "1.5rem", color: COLORS.darkMuted, fontSize: "0.8rem" }}>
              Liverpool, UK &mdash; available immediately &mdash; no UK sponsorship required
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontFamily: FONT, fontWeight: 800, lineHeight: 1.15, margin: "0 0 1rem", color: "#fff", letterSpacing: "-0.02em" }}>
              Graduate Software &amp; Embedded Engineer
            </h1>
            <p style={{ color: COLORS.darkMuted, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "620px", marginBottom: "1.5rem" }}>
              MSc Embedded Systems &amp; IC Design, Liverpool John Moores University. I build systems that combine hardware-level understanding with practical software engineering &mdash; from C++ engines and embedded devices to the APIs, databases and deployment pipelines around them.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {STACK_CHIPS.map(t => (
                <span key={t} style={{ padding: "0.3rem 0.8rem", background: "rgba(255,255,255,0.1)", color: "#fff", border: `1px solid ${COLORS.darkBorder}`, borderRadius: "2rem", fontSize: "0.78rem", fontWeight: 600 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); }} style={{ padding: "0.85rem 1.75rem", background: COLORS.accent, color: "#fff", borderRadius: "0.4rem", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", boxShadow: `0 10px 26px rgba(29,78,216,0.4)` }}>
                View my work
              </a>
              <a href="https://www.linkedin.com/in/devendra-reddy-keesara-a55912254" target="_blank" rel="noreferrer" style={{ padding: "0.85rem 1.75rem", background: "transparent", color: "#fff", borderRadius: "0.4rem", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.35)" }}>
                LinkedIn
              </a>
              <a href="https://github.com/deva1611" target="_blank" rel="noreferrer" style={{ padding: "0.85rem 1.75rem", background: "transparent", color: "#fff", borderRadius: "0.4rem", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.35)" }}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: COLORS.bgAlt, borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ padding: "5rem 3rem", maxWidth: "1000px", margin: "0 auto" }}>
        <Eyebrow>About</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ color: COLORS.text, lineHeight: 1.8, marginBottom: "1.1rem", fontSize: "1rem" }}>
              I'm a graduate with an MSc in Embedded Systems &amp; IC Design from Liverpool John Moores University. I combine hardware knowledge with practical software development, and I'm currently looking for Graduate Software or Embedded Engineer roles in the UK.
            </p>
            <p style={{ color: COLORS.text, lineHeight: 1.8, fontSize: "1rem" }}>
              I'm particularly interested in roles working on AI hardware, embedded vision systems, or IoT &mdash; anywhere hardware and software meet. I'm on the UK Graduate visa route, so I don't need sponsorship to start work.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: "0.6rem", padding: "1.5rem" }}>
            <InfoRow label="Location" value="Liverpool, UK" />
            <InfoRow label="Availability" value="Immediate" />
            <InfoRow label="Right to work" value="Yes, no sponsorship required" />
            <InfoRow label="Email" value="kdevendra8187@gmail.com" href="mailto:kdevendra8187@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, href }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${COLORS.border}`, paddingBottom: "0.6rem" }}>
      <span style={{ color: COLORS.muted, fontSize: "0.85rem" }}>{label}</span>
      {href
        ? <a href={href} style={{ color: COLORS.accent, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>{value}</a>
        : <span style={{ color: COLORS.text, fontSize: "0.85rem", fontWeight: 600 }}>{value}</span>}
    </div>
  );
}

function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ padding: "5rem 3rem", maxWidth: "1000px", margin: "0 auto" }}>
        <Eyebrow>Projects</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
          {PROJECTS.map(p => (
            <div key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.border}`,
                borderLeft: p.featured ? `4px solid ${COLORS.accent}` : `1px solid ${COLORS.border}`,
                borderRadius: "0.6rem",
                padding: "1.75rem",
                boxShadow: hovered === p.id ? "0 12px 28px rgba(16,24,40,0.10)" : "0 1px 2px rgba(16,24,40,0.04)",
                transform: hovered === p.id ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.2s ease"
              }}>
              {p.featured && <div style={{ color: COLORS.accent, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Featured</div>}
              <h3 style={{ color: COLORS.text, fontSize: "1.05rem", marginBottom: "0.7rem", fontWeight: 700 }}>{p.title}</h3>
              <p style={{ color: COLORS.muted, lineHeight: 1.7, fontSize: "0.88rem", marginBottom: "1.25rem" }}>{p.description}</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {p.tech.map(t => (
                  <span key={t} style={{ padding: "0.2rem 0.6rem", background: COLORS.bgAlt, border: `1px solid ${COLORS.border}`, borderRadius: "0.3rem", color: COLORS.muted, fontSize: "0.72rem" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1.25rem" }}>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ color: COLORS.accent, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}>GitHub &rarr;</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ color: COLORS.accent, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}>Live demo &rarr;</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ background: COLORS.bgAlt, borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ padding: "5rem 3rem", maxWidth: "1000px", margin: "0 auto" }}>
        <Eyebrow>Skills</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginTop: "1.5rem" }}>
          {SKILL_GROUPS.map(group => (
            <div key={group.category}>
              <h4 style={{ color: COLORS.text, fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.accent, display: "inline-block" }} />
                {group.category}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {group.items.map(item => (
                  <span key={item} style={{ padding: "0.25rem 0.65rem", background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: "0.3rem", color: COLORS.text, fontSize: "0.78rem" }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: `1px solid ${COLORS.border}` }}>
          <h4 style={{ color: COLORS.text, fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.75rem" }}>Certifications</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {CERTIFICATIONS.map(cert => (
              <span key={cert} style={{ padding: "0.25rem 0.65rem", background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: "0.3rem", color: COLORS.text, fontSize: "0.78rem" }}>&#10003; {cert}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    emailjs.send(
      'service_6g3wiyi',
      'template_n4agjie',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      '-Fvr7RBR6_S0f4C0m'
    ).then(() => {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }).catch(() => {
      setError(true);
    });
  };

  const inputStyle = { width: "100%", background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: "0.4rem", padding: "0.8rem 1rem", color: COLORS.text, fontSize: "0.9rem", fontFamily: FONT, outline: "none", boxSizing: "border-box" };

  return (
    <section id="contact" style={{ borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ padding: "5rem 3rem 6rem", maxWidth: "560px", margin: "0 auto" }}>
        <Eyebrow>Contact</Eyebrow>
        <p style={{ color: COLORS.muted, marginBottom: "2rem", fontSize: "0.95rem" }}>Open to Graduate Software and Embedded Engineer roles in the UK.</p>
        {sent && <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "0.4rem", padding: "0.9rem", fontSize: "0.85rem", color: "#166534", marginBottom: "1.25rem" }}>Message sent &mdash; I'll get back to you soon.</div>}
        {error && <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "0.4rem", padding: "0.9rem", fontSize: "0.85rem", color: "#991b1b", marginBottom: "1.25rem" }}>Something went wrong &mdash; please try again or email me directly.</div>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          <input required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
          <input required type="email" placeholder="Your email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
          <textarea required placeholder="Your message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} />
          <button type="submit" style={{ padding: "0.85rem", background: COLORS.accent, color: "#fff", border: "none", borderRadius: "0.4rem", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "1.75rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", color: COLORS.muted, fontSize: "0.8rem", flexWrap: "wrap", gap: "1rem" }}>
      <span>&copy; {new Date().getFullYear()} Devendra Reddy Keesara</span>
      <div style={{ display: "flex", gap: "1.25rem" }}>
        <a href="https://github.com/deva1611" target="_blank" rel="noreferrer" style={{ color: COLORS.muted, textDecoration: "none" }}>GitHub</a>
        <a href="https://www.linkedin.com/in/devendra-reddy-keesara-a55912254" target="_blank" rel="noreferrer" style={{ color: COLORS.muted, textDecoration: "none" }}>LinkedIn</a>
        <a href="mailto:kdevendra8187@gmail.com" style={{ color: COLORS.muted, textDecoration: "none" }}>Email</a>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh", fontFamily: FONT }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}