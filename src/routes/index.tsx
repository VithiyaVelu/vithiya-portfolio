import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import editorialSculpture from "@/assets/editorial-sculpture.jpg";
import { Button } from "@/components/ui/button";
import { handleResumeClick, prefetchResume } from "@/lib/download-resume";
import {
  Activity,
  ScanLine,
  ChartNoAxesCombined,
  Sprout,
  Zap,
  BookOpen,
  ListChecks,
  Plus,
  Minus,
  ArrowDown,
  ArrowUpRight,
  Award,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  certifications,
  education,
  experience,
  navLinks,
  profile,
  projects,
  skills,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vithiya V — Software Developer" },
      {
        name: "description",
        content:
          "Vithiya V is a software developer from Tamil Nadu, India — B.Tech CSE at Puducherry Technological University, working across Python, AI/ML, Flutter and Django.",
      },
      { property: "og:title", content: "Vithiya V — Software Developer" },
      {
        property: "og:description",
        content:
          "Projects, internships and skills across software development, Python, AI/ML and Flutter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ————— primitives ————— */

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase text-muted-foreground">
      <span aria-hidden className="h-px w-10 bg-accent" />
      {children}
    </p>
  );
}

function Section({
  id,
  index,
  kicker,
  title,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-5 border-b border-primary/20 pb-5">
        <div>
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
        </div>
        <span aria-hidden className="font-mono text-xs text-muted-foreground">/{index}</span>
      </div>
      {children}
    </section>
  );
}

const linkBtn =
  "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnSolid = `${linkBtn} bg-primary text-primary-foreground hover:shadow-card hover:-translate-y-0.5`;
const btnLine = `${linkBtn} border border-foreground/25 bg-transparent text-foreground hover:border-primary hover:text-primary`;

/* ————— nav ————— */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-serif text-2xl italic tracking-normal">
          vithiya<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.filter(l => ["projects", "experience", "skills", "about"].includes(l.id)).map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="ink-underline pb-1 text-sm text-muted-foreground transition hover:text-foreground hover:ink-underline-hover"
              >
                {l.id === "projects" ? "Projects" : l.id === "skills" ? "Skills" : l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild variant="default" className="hidden lg:inline-flex"><a href={`mailto:${profile.email}`}><Mail />Contact me</a></Button>
        <Button
          variant="ghost" size="icon" className="rounded-full lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-border/50 py-3 text-muted-foreground last:border-0 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

/* ————— hero ————— */

function Hero() {
  return (
    <section className="expressive-hero relative overflow-hidden border-b border-primary/30">
      <img src={editorialSculpture} alt="" aria-hidden width={1536} height={1024} fetchPriority="high" className="hero-art pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-28 md:pt-32">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase"><span>Software / AI / Mobile</span><span className="flex items-center gap-2"><span className="h-2 w-2 bg-accent" />Open to opportunities</span></div>
        <h1 className="expressive-name mt-8 font-sans font-semibold leading-none">VITHIYA<span className="text-accent">*</span></h1>
        <p className="expressive-line relative z-10 mt-1 w-fit font-serif italic leading-none">A little curiosity.<br /><span className="relative"><span aria-hidden className="absolute inset-x-0 bottom-1 h-3 -rotate-2 bg-accent/65 md:h-5" /><span className="relative">A lot of possibility.</span></span></p>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div className="max-w-md">
            <p className="text-base leading-relaxed">I'm Vithiya V, a software developer turning complex ideas into thoughtful applications—from machine learning to mobile.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="h-11 rounded-none px-5"><a href="#projects">My work<ArrowDown /></a></Button>
              <Button asChild variant="outline" className="h-11 rounded-none border-primary/30 bg-background/80 px-5"><a href={profile.resume} download="Vithiya_V_Resume.pdf" onClick={e => handleResumeClick(e, profile.resume)}><Download />Résumé</a></Button>
            </div>
          </div>
          <div className="justify-self-start border-l-2 border-accent bg-background/85 px-4 py-2 text-sm md:justify-self-end"><p>B.Tech CSE · PTU · 2026</p><p className="mt-1 text-muted-foreground">Based in Tamil Nadu, India</p><div className="mt-3 flex gap-4"><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">GitHub<ArrowUpRight size={14} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">LinkedIn<ArrowUpRight size={14} /></a></div></div>
        </div>
        <div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-primary/25 pt-4 font-mono text-xs text-muted-foreground"><span>03 internships / 07 projects</span><span>Always curious. Always building.</span><a href="#projects" className="flex items-center gap-2">Selected work below<ArrowDown size={14} /></a></div>
      </div>
    </section>
  );
}

/* ————— sections ————— */

function About() {
  return (
    <Section
      id="about"
      index="04"
      kicker="About"
      title={
        <>
          A little about <span className="italic text-primary">me.</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm Vithiya — a B.Tech Computer Science graduate (2022–2026) from Marakkanam, Tamil Nadu.
            I got into software because I like puzzles, and stayed because shipping something that
            works feels even better than solving one.
          </p>
          <p>
            So far that's meant three internships, two hackathons, and a habit of picking projects
            that are slightly too ambitious: a five-paradigm AI fitness system, a defect-detection
            pipeline for steel, and a sentiment engine that chewed through half a million posts.
          </p>
          <p>
            Right now I'm looking for software engineering and AI/ML roles where I can keep learning
            in public and build things that hold up in production.
          </p>
        </div>
        <ul className="grid content-start gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
          {[
            ["8.3", "CGPA, B.Tech CSE"],
            ["03", "Internships, two cities"],
            ["02", "Hackathons entered & finished"],
            ["500k+", "Posts through my sentiment engine"],
          ].map(([v, l]) => (
            <li key={l} className="bg-card p-6 transition hover:bg-secondary/60">
              <p className="font-serif text-5xl italic text-primary">{v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      kicker="Skills"
      title={
        <>
          My technical <span className="italic text-primary">toolkit.</span>
        </>
      }
    >
      <ul className="divide-y divide-border border-y border-border">
        {skills.map((s, i) => (
          <li key={s.category} className="group grid gap-3 py-6 transition md:grid-cols-[56px_200px_1fr] md:items-baseline">
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <div>
              <h3 className="font-serif text-2xl italic transition group-hover:text-primary">{s.category}</h3>
              <p className="text-xs text-muted-foreground">— {s.note}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-secondary-foreground transition hover:border-primary hover:text-primary"
                >
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      kicker="Experience"
      title={
        <>
          Hands-on <span className="italic text-primary">experience.</span>
        </>
      }
    >
      <ol className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
        {experience.map((e) => (
          <li key={e.org} className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-primary/45 bg-accent transition group-hover:border-primary"
            />
            <p className="font-mono text-xs uppercase text-primary">{e.dates}</p>
            <h3 className="mt-2 font-serif text-3xl italic">{e.role}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {e.org} · {e.place}
            </p>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{e.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const projectIcons = [Activity, ScanLine, ChartNoAxesCombined, Sprout, Zap, BookOpen, ListChecks];
const projectLabels = ["Intelligent systems", "Machine learning", "Data engineering", "Android development", "Web development", "Database systems", ".NET development"];
const projectPipelines = [["Health data", "5 AI paradigms", "Recommendations"], ["Steel data", "Ensemble ML", "Risk analysis"], ["500k+ posts", "Sentiment engine", "Dashboard"]];

function ProjectVisual({ index }: { index: number }) {
  const Icon = projectIcons[index] ?? Activity;
  return <div aria-hidden className={`project-visual relative flex aspect-[16/8] flex-col justify-between overflow-hidden p-5 ${index === 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}>
    <div className="flex items-start justify-between"><span className="font-mono text-[10px] uppercase">{projectLabels[index]}</span><Icon size={30} strokeWidth={1.2} /></div>
    <div className="flex items-center justify-center gap-2 py-4">
      {(projectPipelines[index] ?? []).map((label,i) => <div key={label} className="flex min-w-0 items-center gap-2"><span className="flex min-h-14 min-w-0 items-center border border-current/25 px-2 text-center font-mono text-[10px]">{label}</span>{i < 2 && <ArrowUpRight size={14} className="shrink-0" />}</div>)}
    </div>
    <div className="flex gap-1">{Array.from({length:20},(_,i) => <span key={i} className={`h-1 flex-1 ${i % 4 === 0 ? "bg-accent" : "bg-current/20"}`} />)}</div>
  </div>;
}

function Projects() {
  const [expanded, setExpanded] = useState<number | null>(0);
  return <section id="projects" className="bg-primary text-primary-foreground">
    <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="mb-10 flex items-end justify-between gap-5"><div><p className="font-mono text-xs uppercase">01 / A collection of things I've built</p><h2 className="mt-4 font-serif text-6xl leading-none md:text-8xl">The work<span className="text-accent">.</span></h2></div><span className="hidden font-serif text-3xl italic sm:block">Ideas → reality</span></div>
      <div className="border-t border-primary-foreground/30">
        {projects.map((p,i) => {
          const open = expanded === i;
          return <article key={p.title} className="border-b border-primary-foreground/30">
            <Button variant="ghost" className="project-toggle group grid h-auto w-full grid-cols-[32px_1fr_24px] items-start gap-3 rounded-none px-0 py-6 text-left text-primary-foreground hover:bg-primary-foreground/5 hover:text-primary-foreground md:grid-cols-[65px_1fr_32px] md:gap-5 md:py-8" aria-expanded={open} aria-controls={`project-detail-${i}`} onClick={() => setExpanded(open ? null : i)}>
              <span className="pt-2 font-mono text-xs opacity-60">0{i+1}</span>
              <span className="min-w-0 whitespace-normal"><span className="mb-2 block font-mono text-[10px] uppercase opacity-65">{projectLabels[i]}</span><span className="block font-serif text-3xl font-normal leading-tight md:text-4xl">{p.title}</span></span>
              <span className="mt-2 grid h-7 w-7 place-items-center rounded-full border border-primary-foreground/40">{open ? <Minus /> : <Plus />}</span>
            </Button>
            {open && <div id={`project-detail-${i}`} className="grid gap-6 pb-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:pl-[85px]">
              <div className="folio-visual relative flex min-h-44 flex-col justify-between border border-primary-foreground/20 bg-primary-foreground/5 p-6"><p className="font-mono text-xs uppercase">{projectLabels[i]} / 0{i+1}</p><p className="mt-6 font-serif text-4xl italic">{(projectPipelines[i] ?? [p.tech[0],p.tech[1]]).join(" → ")}</p><span className="mt-6 h-1 w-14 bg-accent" /></div>
              <div className="self-center">{p.badge && <p className="mb-3 flex items-center gap-2 text-xs"><span className="h-1.5 w-1.5 bg-accent" />{p.badge}</p>}<p className="text-base leading-relaxed text-primary-foreground/85">{p.description}</p><ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{p.tech.map(t => <li key={t} className="border-b border-primary-foreground/30 pb-1 font-mono text-xs">{t}</li>)}</ul></div>
            </div>}
          </article>;
        })}
      </div>
      <Button asChild variant="ghost" className="mt-6 rounded-none text-primary-foreground hover:bg-accent hover:text-accent-foreground"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github />My GitHub<ArrowUpRight /></a></Button>
    </div>
  </section>;
}

function Education() {
  return (
    <Section
      id="education"
      index="05"
      kicker="Education"
      title={
        <>
          Education & <span className="italic text-primary">foundations.</span>
        </>
      }
    >
      <ul className="divide-y divide-border border-y border-border">
        {education.map((ed) => (
          <li key={ed.title} className="group grid gap-2 py-5 transition sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="flex items-start gap-4">
              <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-serif text-2xl italic">{ed.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {ed.org} · {ed.dates}
                </p>
              </div>
            </div>
            <p className="pl-14 font-serif text-3xl italic text-primary sm:pl-0">{ed.result}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Certifications() {
  return (
    <Section
      id="certifications"
      index="06"
      kicker="Honours"
      title={
        <>
          Learning & <span className="italic text-primary">recognition.</span>
        </>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c) => (
          <li key={c.title} className="group bg-card p-6 transition hover:bg-secondary/60">
            <Award size={20} className="text-primary transition group-hover:-rotate-12" />
            <p className="mt-4 font-medium leading-snug">{c.title}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {c.by}
              {c.date ? ` · ${c.date}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 md:py-20">
        <p aria-hidden className="pointer-events-none absolute -right-8 -top-16 select-none font-serif text-[16rem] italic leading-none opacity-15">
          hi
        </p>
        <div className="relative">
          <p className="font-mono text-xs uppercase opacity-80">07 — Contact</p>
          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] tracking-normal md:text-7xl">
            Got a role, a project, or just a <span className="italic">good idea?</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed opacity-85">
            I'm open to software developer and AI/ML opportunities. Email is fastest — I actually
            read my inbox.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Mail size={16} /> {profile.email}
              <ArrowUpRight size={15} className="transition group-hover:rotate-45" />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-3.5 text-sm font-medium transition hover:bg-primary-foreground/10"
            >
              <Phone size={15} /> {profile.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="ink-underline inline-flex items-center gap-1.5 pb-0.5 opacity-85 hover:opacity-100 hover:ink-underline-hover">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="ink-underline inline-flex items-center gap-1.5 pb-0.5 opacity-85 hover:opacity-100 hover:ink-underline-hover">
              <Github size={15} /> GitHub
            </a>
            <a href={profile.resume} download="Vithiya_V_Resume.pdf" onClick={(e) => handleResumeClick(e, profile.resume)} className="ink-underline inline-flex items-center gap-1.5 pb-0.5 opacity-85 hover:opacity-100 hover:ink-underline-hover">
              <Download size={15} /> Résumé (PDF)
            </a>
            <span className="inline-flex items-center gap-1.5 opacity-70">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— backdrop ————— */

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-x-0 top-0 mx-auto hidden h-full max-w-6xl grid-cols-4 px-5 md:grid">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="border-l border-foreground/[0.06] last:border-r" />
        ))}
      </div>

    </div>
  );
}

/* ————— page ————— */


function Index() {
  useEffect(() => {
    prefetchResume(profile.resume);
  }, []);
  return (
    <div id="top" className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Backdrop />

      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Vithiya V · Software, with care.
          </p>
          <a href="#top" className="ink-underline w-fit pb-0.5 hover:text-primary hover:ink-underline-hover">
            Back to the top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
