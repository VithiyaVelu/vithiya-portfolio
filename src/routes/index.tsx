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
    <section className="relative overflow-hidden border-b border-primary/20">
      <img src={editorialSculpture} alt="" aria-hidden width={1536} height={1024} fetchPriority="high" className="hero-art pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-28 md:pt-32">
        <div className="flex items-center gap-2 text-xs font-medium"><span aria-hidden className="h-2 w-2 rounded-full bg-accent" />Open to software developer & AI/ML roles</div>
        <h1 className="hero-title mt-6 font-serif leading-none">Vithiya V<span className="text-accent">.</span></h1>
        <p className="mt-4 max-w-xl font-sans text-2xl font-semibold leading-tight md:text-3xl">Software developer.<br /><span className="font-serif text-3xl font-normal italic md:text-4xl">Curious mind. Practical solutions.</span></p>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">I build machine-learning pipelines, data-driven web applications and mobile experiences. B.Tech CSE, Puducherry Technological University · Class of 2026.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 px-5"><a href={profile.resume} download="Vithiya_V_Resume.pdf" onClick={e => handleResumeClick(e, profile.resume)}><Download />Download résumé</a></Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-5"><a href="#projects">Explore projects<ArrowDown /></a></Button>
        </div>
        <div className="mt-5 flex gap-5 text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 ink-underline hover:ink-underline-hover"><Github size={15} />GitHub<ArrowUpRight size={13} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 ink-underline hover:ink-underline-hover"><Linkedin size={15} />LinkedIn<ArrowUpRight size={13} /></a>
        </div>
        <dl className="mt-9 grid grid-cols-2 gap-y-5 border-t border-primary/20 pt-5 md:grid-cols-4">
          {[["03", "Industry internships"], ["07", "Projects built"], ["500k+", "Posts analyzed"], ["8.3/10", "B.Tech CGPA"]].map(([value,label]) => <div key={label} className="border-l-2 border-accent pl-4"><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 font-serif text-3xl">{value}</dd></div>)}
        </dl>
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
  return <Section id="projects" index="01" kicker="Selected projects" title={<>Engineering in <span className="italic">practice.</span></>}>
    <div className="grid gap-5 lg:grid-cols-3">
      {projects.slice(0,3).map((p,i) => <article key={p.title} className="group overflow-hidden rounded-lg border border-primary/20 bg-card transition duration-300 hover:-translate-y-1 hover:shadow-card">
        <ProjectVisual index={i} />
        <div className="p-5">
          <p className="mb-3 flex min-h-8 items-center gap-2 text-xs font-medium text-muted-foreground"><span className="h-1.5 w-1.5 shrink-0 bg-accent" />{p.badge ?? "Multi-paradigm AI · Docker deployment"}</p>
          <h3 className="min-h-24 font-sans text-xl font-semibold leading-snug">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <li key={t} className="border-b border-primary/20 py-1 text-xs">{t}</li>)}</ul>
        </div>
      </article>)}
    </div>
    <h3 className="mb-1 mt-9 text-sm font-semibold">More projects</h3>
    <div className="divide-y divide-primary/20">
      {projects.slice(3).map((p,i) => {const Icon = projectIcons[i+3] ?? Activity; return <article key={p.title} className="grid gap-3 py-5 sm:grid-cols-[40px_1fr]">
        <Icon size={24} strokeWidth={1.5} className="mt-1" />
        <div><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-lg font-semibold">{p.title}</h3><span className="text-xs text-muted-foreground">{projectLabels[i+3]}</span></div>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <p className="mt-3 text-xs font-medium">{p.tech.join(" · ")}</p></div>
      </article>})}
    </div>
    <Button asChild variant="outline" className="mt-5"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github />Visit my GitHub profile<ArrowUpRight /></a></Button>
  </Section>;
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
