import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, Award, Download, Github, GraduationCap, Linkedin, Mail, Menu, Sparkles, X,
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

function track(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Card({ className = "", children, as: Tag = "div" }: { className?: string; children: ReactNode; as?: "div" | "article" | "li" }) {
  return (
    <Tag
      onMouseMove={track}
      className={`spotlight rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-card ${className}`}
    >
      {children}
    </Tag>
  );
}

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="relative">
        <span aria-hidden className="text-outline pointer-events-none absolute -top-10 left-0 select-none text-8xl font-bold md:-top-16 md:text-[9rem]">
          {num}
        </span>
        <h2 className="relative text-3xl font-semibold tracking-tight md:text-5xl">
          {title}<span className="text-primary">.</span>
        </h2>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

const btn = "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:shadow-card hover:scale-[1.03]`;
const btnGhost = `${btn} border border-border bg-card/40 text-foreground backdrop-blur hover:border-primary hover:text-primary`;
const tag = "rounded-full border border-border bg-secondary/70 px-3 py-1 font-mono text-xs text-secondary-foreground";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-border/70 bg-background/70 px-5 shadow-card backdrop-blur-xl" aria-label="Main">
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-primary">&lt;</span>VV<span className="text-primary"> /&gt;</span>
        </a>
        <ul className="hidden gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground lg:inline-block">Hire me</a>
        <button className="rounded-full p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul className="mx-auto mt-2 max-w-5xl rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-xl lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-secondary hover:text-primary">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Terminal() {
  return (
    <div className="relative rounded-2xl border border-border bg-card/80 font-mono text-sm shadow-card backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/80" />
        <span className="h-3 w-3 rounded-full bg-chart-4/80" />
        <span className="h-3 w-3 rounded-full bg-chart-3/80" />
        <span className="ml-3 text-xs text-muted-foreground">~/vithiya.py</span>
      </div>
      <pre className="overflow-x-auto p-5 leading-7">
        <code>
          <span className="text-accent">class</span> <span className="text-primary">Developer</span>:{"\n"}
          {"  "}name = <span className="text-chart-3">"Vithiya V"</span>{"\n"}
          {"  "}cgpa = <span className="text-chart-4">8.3</span>{"\n"}
          {"  "}stack = [<span className="text-chart-3">"Python"</span>, <span className="text-chart-3">"Flutter"</span>,{"\n"}
          {"           "}<span className="text-chart-3">"Django"</span>, <span className="text-chart-3">"ML"</span>]{"\n\n"}
          {"  "}<span className="text-accent">def</span> <span className="text-primary">status</span>(self):{"\n"}
          {"    "}<span className="text-accent">return</span> <span className="text-chart-3">"open_to_work"</span>
          <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
        </code>
      </pre>
    </div>
  );
}

function Index() {
  const allSkills = skills.flatMap((s) => s.items);
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div aria-hidden className="orb absolute -top-20 right-0 h-96 w-96 rounded-full bg-primary/30" />
          <div aria-hidden className="orb absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-accent/25 [animation-delay:-6s]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-36 md:pt-44 lg:grid-cols-[1.2fr_1fr]">
            <div className="fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-3" /><span className="relative h-2 w-2 rounded-full bg-chart-3" /></span>
                Available for full-time roles · 2026
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Hi, I'm Vithiya.<br />
                I build <span className="text-gradient">smart software</span>.
              </h1>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Computer Science graduate from Puducherry Technological University, turning ideas into Flutter apps,
                ML pipelines and data-rich dashboards.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className={btnPrimary}>View Projects <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
                <a href="#contact" className={btnGhost}><Mail size={16} /> Contact Me</a>
                <a href={profile.resume} download className={btnGhost}><Download size={16} /> Resume</a>
              </div>
              <div className="mt-8 flex gap-3">
                {[
                  { href: profile.github, label: "GitHub", Icon: Github },
                  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
                  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative fade-up [animation-delay:150ms]">
              <div aria-hidden className="spin-slow absolute -right-6 -top-8 grid h-24 w-24 place-items-center rounded-full border border-dashed border-primary/50">
                <Sparkles className="text-primary" size={20} />
              </div>
              <Terminal />
            </div>
          </div>

          <div className="relative border-y border-border bg-card/40 py-4">
            <div className="marquee flex w-max gap-8 whitespace-nowrap font-mono text-sm text-muted-foreground">
              {[...allSkills, ...allSkills].map((s, i) => (
                <span key={i} className="flex items-center gap-8">{s}<span className="text-primary">✦</span></span>
              ))}
            </div>
          </div>
        </section>

        <Section id="about" num="01" title="About me">
          <div className="grid gap-5 md:grid-cols-4">
            <Card className="md:col-span-2 md:row-span-2">
              <p className="text-xl leading-relaxed">
                A B.Tech CSE graduate <span className="text-muted-foreground">(2022–2026)</span> who loves
                <span className="text-gradient font-semibold"> problem-solving</span>, clean data structures and
                thoughtful object-oriented design.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Through internships and hackathons I've shipped Flutter and Android apps, ML models for prediction and
                defect detection, and dashboards with Django and Streamlit. Now looking for software engineering and AI/ML roles.
              </p>
            </Card>
            {[["8.3", "CGPA out of 10"], ["03", "Internships"], ["02", "Hackathons"], ["500k+", "Posts analysed"]].map(([v, l]) => (
              <Card key={l}>
                <p className="text-4xl font-bold text-gradient">{v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" num="02" title="Toolbox">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Card key={s.category}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{s.category}</h3>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it) => <li key={it} className={`${tag} transition hover:border-primary hover:text-primary`}>{it}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" num="03" title="Experience">
          <ol className="space-y-5">
            {experience.map((e, i) => (
              <Card as="li" key={e.org} className="grid gap-4 md:grid-cols-[180px_1fr]">
                <div>
                  <p className="font-mono text-xs text-primary">{e.dates}</p>
                  <p className="mt-1 text-5xl font-bold text-outline">0{i + 1}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-sm text-accent">{e.org} · {e.place}</p>
                  <ul className="mt-3 space-y-1.5 text-muted-foreground">
                    {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">→</span>{p}</li>)}
                  </ul>
                </div>
              </Card>
            ))}
          </ol>
        </Section>

        <Section id="projects" num="04" title="Selected work">
          <div className="grid gap-5 md:grid-cols-6">
            {projects.map((p, i) => (
              <Card as="article" key={p.title} className={`group flex flex-col ${i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2"}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-muted-foreground">PROJECT_0{i + 1}</span>
                  <a href={p.github ?? profile.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                {p.badge && <p className="mt-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">🏆 {p.badge}</p>}
                <h3 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => <li key={t} className={tag}>{t}</li>)}
                </ul>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-5 w-fit`}>Live Demo</a>}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="education" num="05" title="Education">
          <Card className="relative overflow-hidden">
            <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary"><GraduationCap /></span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">B.Tech in Computer Science & Engineering</h3>
                <p className="text-muted-foreground">Puducherry Technological University · 2022 – 2026</p>
              </div>
              <p className="text-3xl font-bold text-gradient">8.3<span className="text-base text-muted-foreground">/10</span></p>
            </div>
          </Card>
        </Section>

        <Section id="certifications" num="06" title="Achievements">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <Card as="li" key={c.title} className="p-5">
                <Award size={22} className="text-accent" />
                <p className="mt-4 font-medium leading-snug">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.by}{c.date ? ` · ${c.date}` : ""}</p>
              </Card>
            ))}
          </ul>
        </Section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-16">
            <div aria-hidden className="absolute inset-0 bg-grid" />
            <div aria-hidden className="orb absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-primary/25" />
            <div className="relative">
              <p className="font-mono text-sm text-primary">07 · Contact</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                Let's build something <span className="text-gradient">great</span> together.
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">Open to software developer and AI/ML opportunities. Email is the quickest way to reach me.</p>
              <a href={`mailto:${profile.email}`} className={`${btnPrimary} mt-8 text-base`}>
                <Mail size={18} /> {profile.email} <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}><Linkedin size={16} /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnGhost}><Github size={16} /> GitHub</a>
                <a href={profile.resume} download className={btnGhost}><Download size={16} /> Resume</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vithiya V · Designed & built with care.</p>
          <a href="#top" className="hover:text-primary">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
