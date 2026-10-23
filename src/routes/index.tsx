import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { handleResumeClick, prefetchResume } from "@/lib/download-resume";
import {
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
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span aria-hidden className="h-px w-10 bg-primary" />
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
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div className="fade-up">
          <Kicker>{kicker}</Kicker>
          <p aria-hidden className="mt-4 font-serif text-7xl italic leading-none text-primary/25 md:text-8xl">
            {index}
          </p>
        </div>
        <div>
          <h2 className="fade-up font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
          <div className="mt-12">{children}</div>
        </div>
      </div>
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
        <a href="#top" className="font-serif text-2xl italic tracking-tight">
          vithiya<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="ink-underline pb-1 text-sm text-muted-foreground transition hover:text-foreground hover:ink-underline-hover"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="hidden rounded-full border border-foreground/25 px-4 py-1.5 text-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground lg:inline-block">
          Say hello
        </a>
        <button
          className="rounded-full p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-wash" />
      <div aria-hidden className="absolute inset-0 bg-ruled opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 md:pb-24 md:pt-48">
        <p className="fade-up font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio — {profile.location}
        </p>

        <h1 className="fade-up mt-8 font-serif text-[17vw] leading-[0.9] tracking-tight [animation-delay:100ms] sm:text-8xl md:text-[9.5rem]">
          Vithiya
          <span className="text-primary">*</span>
          <br />
          <span className="italic font-normal text-muted-foreground">builds software</span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_320px] md:items-end">
          <div className="fade-up [animation-delay:200ms]">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              <span className="text-foreground">*</span>That's me — a Computer Science graduate from
              Puducherry Technological University who likes her data clean, her code cleaner, and her
              machine-learning models actually shipped. Flutter apps, ML pipelines, dashboards that
              people really use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnSolid}>
                See the work <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
              </a>
              <a href={profile.resume} download="Vithiya_V_Resume.pdf" onClick={(e) => handleResumeClick(e, profile.resume)} className={btnLine}>
                <Download size={16} /> Résumé
              </a>
            </div>
          </div>

          <aside className="fade-up border-l-2 border-primary/60 pl-5 [animation-delay:300ms]">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Currently</dt>
                <dd className="mt-1 font-medium">Open to software & AI/ML roles, 2026</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Degree</dt>
                <dd className="mt-1 font-medium">B.Tech CSE · CGPA 8.3/10</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Find me</dt>
                <dd className="mt-2 flex gap-2">
                  {[
                    { href: profile.github, label: "GitHub", Icon: Github },
                    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
                    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-foreground/25 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>

      {/* ticker */}
      <div className="relative border-y border-border bg-card/60 py-3.5">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {[...skills.flatMap((s) => s.items), ...skills.flatMap((s) => s.items)].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s}
              <span aria-hidden className="text-primary">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— sections ————— */

function About() {
  return (
    <Section
      id="about"
      index="01"
      kicker="About"
      title={
        <>
          Curious by default, <span className="italic text-primary">stubborn</span> about details.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
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
        <ul className="grid content-start gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
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
      index="02"
      kicker="Toolbox"
      title={
        <>
          Things I reach for <span className="italic text-primary">daily</span>.
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
      index="03"
      kicker="Experience"
      title={
        <>
          Where I've <span className="italic text-primary">worked</span> so far.
        </>
      }
    >
      <ol className="relative space-y-12 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
        {experience.map((e) => (
          <li key={e.org} className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background transition group-hover:bg-primary"
            />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{e.dates}</p>
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

function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      kicker="Selected work"
      title={
        <>
          Projects I'd happily <span className="italic text-primary">talk your ear off</span> about.
        </>
      }
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group grid gap-6 rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card md:grid-cols-[72px_1fr_auto] md:p-9"
          >
            <p aria-hidden className="font-serif text-5xl italic text-primary/30 transition group-hover:text-primary/70">
              0{i + 1}
            </p>
            <div>
              {p.badge && (
                <p className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  ✦ {p.badge}
                </p>
              )}
              <h3 className="font-serif text-2xl leading-snug md:text-3xl">{p.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={p.github ?? profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} on GitHub`}
              className="grid h-12 w-12 shrink-0 place-items-center self-start rounded-full border border-foreground/25 transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <ArrowUpRight size={18} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section
      id="education"
      index="05"
      kicker="Education"
      title={
        <>
          The <span className="italic text-primary">paperwork</span>.
        </>
      }
    >
      <ul className="divide-y divide-border border-y border-border">
        {education.map((ed) => (
          <li key={ed.title} className="group grid gap-2 py-7 transition sm:grid-cols-[1fr_auto] sm:items-center">
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
          Certificates, hackathons & <span className="italic text-primary">other proof</span>.
        </>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-14 text-primary-foreground md:px-16 md:py-20">
        <p aria-hidden className="pointer-events-none absolute -right-8 -top-16 select-none font-serif text-[16rem] italic leading-none opacity-15">
          hi
        </p>
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-80">07 — Contact</p>
          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Got a role, a project, or just a <span className="italic">good idea?</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed opacity-85">
            I'm open to software developer and AI/ML opportunities. Email is fastest — I actually
            read my inbox.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-lift"
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

/* ————— page ————— */

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Vithiya V — designed & built by hand, no templates harmed.
          </p>
          <a href="#top" className="ink-underline w-fit pb-0.5 hover:text-primary hover:ink-underline-hover">
            Back to the top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
