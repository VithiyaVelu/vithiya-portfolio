import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight, Award, Briefcase, Download, Github, GraduationCap, Linkedin, Mail, Menu, X,
} from "lucide-react";
import {
  certifications, experience, navLinks, profile, projects, skills,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vithiya V — Software Developer & AI/ML Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Vithiya V, B.Tech CSE graduate from Puducherry Technological University — software development, Python, AI/ML and mobile apps.",
      },
      { property: "og:title", content: "Vithiya V — Software Developer Portfolio" },
      {
        property: "og:description",
        content: "Projects, internships and skills in software development, Python, AI/ML and Flutter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({ id, title, eyebrow, children }: { id: string; title: string; eyebrow: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="font-mono text-sm text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

const btn = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:opacity-90`;
const btnGhost = `${btn} border border-border bg-card/40 text-foreground hover:border-primary hover:text-primary`;
const tag = "rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground";
const card = "rounded-xl border border-border bg-card/60 p-6 transition hover:border-primary/60 hover:shadow-card";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-primary">&lt;</span>Vithiya V<span className="text-primary"> /&gt;</span>
        </a>
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm text-muted-foreground transition hover:text-primary">{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-2.5 text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-glow">
          <div className="mx-auto max-w-6xl px-5 pb-24 pt-36 md:pb-32 md:pt-44 fade-up">
            <p className="font-mono text-sm text-primary">Hi, I'm</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">Vithiya V</h1>
            <p className="mt-4 text-2xl font-medium md:text-3xl">
              <span className="text-gradient">Software Developer</span>{" "}
              <span className="text-muted-foreground">building with Python, AI/ML & Flutter.</span>
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Computer Science graduate from Puducherry Technological University with hands-on internship and
              hackathon experience in application development, machine learning, and databases.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>View Projects <ArrowRight size={16} /></a>
              <a href="#contact" className={btnGhost}><Mail size={16} /> Contact Me</a>
              <a href={profile.resume} download className={btnGhost}><Download size={16} /> Download Resume</a>
            </div>
            <div className="mt-8 flex gap-4 text-muted-foreground">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary"><Github size={20} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={20} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary"><Mail size={20} /></a>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="01 · About" title="About Me">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I'm a B.Tech Computer Science and Engineering graduate (2022–2026) with a strong foundation in
                problem-solving, data structures, algorithms, and object-oriented design.
              </p>
              <p>
                Through internships and hackathons I've built Flutter and Android apps, ML pipelines for
                prediction and defect detection, and data-heavy dashboards with Django and Streamlit.
              </p>
              <p>I'm looking for software engineering and AI/ML roles where I can ship reliable, useful software.</p>
            </div>
            <dl className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {[["8.3/10", "CGPA"], ["3", "Internships"], ["2", "Hackathons"]].map(([v, l]) => (
                <div key={l} className={card}>
                  <dt className="text-sm text-muted-foreground">{l}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-primary">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 · Skills" title="Technical Skills">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.category} className={card}>
                <h3 className="font-medium">{s.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => <li key={i} className={tag}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="03 · Experience" title="Internship Experience">
          <ol className="relative space-y-8 border-l border-border pl-8">
            {experience.map((e) => (
              <li key={e.org} className="relative">
                <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-primary bg-background">
                  <Briefcase size={10} className="text-primary" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.dates}</span>
                </div>
                <p className="text-sm text-primary">{e.org} · {e.place}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-accent">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" eyebrow="04 · Projects" title="Featured Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className={`${card} flex flex-col`}>
                {p.badge && <p className="mb-3 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">{p.badge}</p>}
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => <li key={t} className={tag}>{t}</li>)}
                </ul>
                <div className="mt-5 flex gap-3">
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className={btnGhost}><Github size={16} /> Code</a>
                  ) : (
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                      <Github size={15} /> More on GitHub
                    </a>
                  )}
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Live Demo</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="05 · Education" title="Education">
          <div className={`${card} flex flex-col gap-4 sm:flex-row sm:items-center`}>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><GraduationCap /></span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">B.Tech in Computer Science & Engineering</h3>
              <p className="text-muted-foreground">Puducherry Technological University · 2022 – 2026</p>
            </div>
            <p className="font-mono text-lg text-primary">CGPA 8.3/10</p>
          </div>
        </Section>

        <Section id="certifications" eyebrow="06 · Achievements" title="Certifications & Achievements">
          <ul className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.title} className={`${card} flex gap-4 p-5`}>
                <Award size={20} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.by}{c.date ? ` · ${c.date}` : ""}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" eyebrow="07 · Contact" title="Let's work together">
          <p className="max-w-xl text-muted-foreground">
            I'm open to software developer and AI/ML opportunities. The quickest way to reach me is email.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Linkedin, label: "LinkedIn", value: "vithiya-velu", href: profile.linkedin },
              { icon: Github, label: "GitHub", value: "VithiyaVelu", href: profile.github },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${card} block`}>
                <Icon className="text-primary" size={22} />
                <p className="mt-4 text-sm text-muted-foreground">{label}</p>
                <p className="mt-1 break-all font-medium">{value}</p>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vithiya V. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} className="hover:text-primary">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
