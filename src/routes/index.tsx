import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, ShieldCheck, ScanFace, Activity, Bell, Cpu, Eye,
  Building2, Camera, Sparkles, Radio, MapPin, AlarmClock, BarChart3, Users,
  Brain, Lock, Gauge, Workflow, ChevronRight, Code2, Infinity as InfinityIcon, Star,
  Phone,
} from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RanGa Software Solutions — Coded for Today. Solutions for Tomorrow." },
      { name: "description", content: "RanGa builds AI, computer vision and smart campus automation systems engineered for trust, precision and scale." },
      { property: "og:title", content: "RanGa Software Solutions" },
      { property: "og:description", content: "Premium AI, computer vision and smart campus automation engineered for the next decade." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <Capabilities />
      <About />
      <ProductShowcase />
      <HowItWorks />
      <Benefits />
      <LiveDashboard />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Nav                                                                         */
/* -------------------------------------------------------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className={`flex items-center gap-6 rounded-full px-4 py-2 transition-all ${scrolled ? "glass-card" : ""}`}>
          <Logo />
        </div>
        <nav className="hidden items-center gap-1 rounded-full glass-card px-2 py-2 text-sm font-medium md:flex">
          {["Platform", "About", "How it works", "Roadmap", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              data-cursor="hover"
              className="rounded-full px-4 py-1.5 text-foreground/70 transition-colors hover:bg-primary/8 hover:text-primary-deep"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" data-cursor="hover" className="hidden md:inline-flex">
          <MagneticButton>Book a demo <ArrowRight className="h-4 w-4" /></MagneticButton>
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <a href="#top" data-cursor="hover" className="flex items-center gap-2">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
        <Code2 className="h-4 w-4" />
      </span>
      <div className="leading-tight">
        <div className="text-base font-bold tracking-tight">
          <span className="text-primary-deep">Ran</span>
          <span className="text-accent-teal">Ga</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Software Solutions</div>
      </div>
    </a>
  );
}

function MagneticButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <button
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setT({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35 });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      data-cursor="hover"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-transform ${
        variant === "primary"
          ? "bg-gradient-brand text-white shadow-glow"
          : "border border-primary/20 bg-white/60 text-primary-deep backdrop-blur hover:border-primary/40"
      }`}
      style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const op = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0">
        <NeuralBackground className="h-full w-full" />
      </div>
      <div className="absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-accent-teal/15 blur-3xl" />

      <motion.div style={{ y, opacity: op }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1 text-xs font-medium text-primary-deep backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-teal" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-teal" />
          </span>
          Smart Campus AI · Live in 10+ schools
        </motion.div>

        <h1 className="mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
          <RevealWords text="Engineering the" />
          <br />
          <span className="text-gradient-brand"><RevealWords text="intelligent campus" delay={0.15} /></span>
          <br />
          <RevealWords text="of tomorrow." delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          RanGa builds production-grade AI for computer vision, smart attendance, parent communication and live monitoring — engineered for trust, precision and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton>Book a private demo <ArrowRight className="h-4 w-4" /></MagneticButton>
          <MagneticButton variant="ghost">Explore the platform <ArrowUpRight className="h-4 w-4" /></MagneticButton>
        </motion.div>

        <div className="pointer-events-none absolute right-4 top-32 hidden w-[360px] flex-col gap-3 lg:flex">
          <FloatPanel delay={0.4} icon={<ScanFace className="h-4 w-4" />} title="Face match · 99.2%" sub="Student #A-2841 verified" tone="ok" />
          <FloatPanel delay={0.6} icon={<Bell className="h-4 w-4" />} title="Parent alert sent" sub="WhatsApp · 2s ago" tone="info" />
          <FloatPanel delay={0.8} icon={<Camera className="h-4 w-4" />} title="Gate camera 03" sub="Live · 30 fps" tone="live" />
          <FloatPanel delay={1.0} icon={<Activity className="h-4 w-4" />} title="Node mesh healthy" sub="12 / 12 online" tone="ok" />
        </div>

      </motion.div>
    </section>
  );
}

function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: delay + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function FloatPanel({
  icon, title, sub, tone, delay,
}: { icon: React.ReactNode; title: string; sub: string; tone: "ok" | "info" | "live"; delay: number }) {
  const dot = tone === "ok" ? "bg-accent-teal" : tone === "live" ? "bg-rose-500" : "bg-primary-glow";
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.6 }}
      className="glass-card animate-float-slow flex items-center gap-3 rounded-2xl px-4 py-3"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="truncate text-sm font-semibold">{title}</div>
        <div className="truncate text-xs text-muted-foreground">{sub}</div>
      </div>
      <span className={`h-2 w-2 rounded-full ${dot} animate-pulse`} />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Marquee                                                                     */
/* -------------------------------------------------------------------------- */
function Marquee() {
  const items = ["Computer Vision", "Edge AI", "Smart Campus", "Face Recognition", "Real-time Analytics", "Enterprise Security", "Computer Vision", "Edge AI", "Smart Campus", "Face Recognition"];
  return (
    <section className="relative border-y border-primary/10 bg-gradient-soft py-6">
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center gap-12 pr-12 text-sm uppercase tracking-[0.28em] text-primary-deep/70"
        >
          {[...items, ...items].map((w, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              <span>{w}</span><Sparkles className="h-3.5 w-3.5 text-accent-teal" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Capabilities                                                                */
/* -------------------------------------------------------------------------- */
function Capabilities() {
  const items = [
    { icon: ScanFace, title: "AI Face Recognition", body: "Sub-second identity verification with 99%+ precision across lighting, angle and age drift." },
    { icon: MapPin, title: "Real-time Tracking", body: "Live student location and zone presence across every camera node on campus." },
    { icon: ShieldCheck, title: "Smart Attendance", body: "Zero-touch attendance that syncs to your SIS the moment a student enters." },
    { icon: Bell, title: "Parent Notifications", body: "WhatsApp, SMS and app alerts triggered by the events parents actually care about." },
    { icon: Lock, title: "Campus Security", body: "Anomaly detection, intruder alerts and after-hours monitoring on the same mesh." },
    { icon: Gauge, title: "Live Dashboard", body: "An operating console for principals, security and operations — all in one view." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="platform" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>The platform</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          One intelligent mesh.<br />
          <span className="text-gradient-brand">Six native capabilities.</span>
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Every module runs on the same edge-to-cloud pipeline. Add what you need, when you need it — nothing to integrate, nothing to glue together.
        </p>

        <div className="mt-14 grid gap-2 lg:grid-cols-[1.1fr_2fr]">
          <div className="flex flex-col gap-2">
            {items.map((it, i) => {
              const Icon = it.icon;
              const active = i === open;
              return (
                <button
                  key={it.title}
                  data-cursor="hover"
                  onMouseEnter={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                  className={`group relative flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                    active ? "border-primary/30 bg-white shadow-soft" : "border-transparent hover:border-primary/15 hover:bg-white/60"
                  }`}
                >
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${active ? "bg-gradient-brand text-white" : "bg-primary/8 text-primary-deep"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold">{it.title}</div>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          className="text-sm text-muted-foreground"
                        >
                          <div className="pt-1">{it.body}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${active ? "translate-x-1 text-primary" : "text-muted-foreground"}`} />
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-3xl border border-primary/10 bg-gradient-soft p-8 shadow-soft">
            <NeuralBackground className="absolute inset-0 h-full w-full opacity-50" />
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex h-full min-h-[400px] flex-col justify-between"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-primary-deep backdrop-blur">
                  Module {String(open + 1).padStart(2, "0")} / 06
                </div>
                <CapabilityVisual index={open} />
                <div>
                  <h3 className="text-3xl font-bold tracking-tight">{items[open].title}</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">{items[open].body}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityVisual({ index }: { index: number }) {
  // Different mini-illustration per module
  if (index === 0) return <FaceScanVisual />;
  if (index === 1) return <TrackingVisual />;
  if (index === 2) return <AttendanceVisual />;
  if (index === 3) return <NotificationVisual />;
  if (index === 4) return <SecurityVisual />;
  return <DashboardVisual />;
}

function FaceScanVisual() {
  return (
    <div className="relative mx-auto my-8 grid h-52 w-52 place-items-center">
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-3 rounded-full border border-primary/15" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-teal shadow-[0_0_18px] shadow-accent-teal" />
      </motion.div>
      <div className="grid h-32 w-32 place-items-center rounded-full bg-gradient-brand text-white shadow-glow">
        <ScanFace className="h-12 w-12" />
      </div>
      <motion.div
        animate={{ y: [-60, 60, -60] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-px w-44 bg-gradient-to-r from-transparent via-accent-teal to-transparent"
      />
    </div>
  );
}
function TrackingVisual() {
  return (
    <div className="relative mx-auto my-8 h-52 w-full max-w-md">
      <div className="absolute inset-0 rounded-2xl bg-grid opacity-50" />
      {[[20, 30], [70, 40], [40, 70], [80, 80], [55, 20]].map(([x, y], i) => (
        <motion.div key={i}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}
          className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
          <span className="absolute -inset-2 animate-pulse-ring rounded-full bg-accent-teal/40" />
          <span className="relative block h-3 w-3 rounded-full bg-primary shadow-glow" />
        </motion.div>
      ))}
    </div>
  );
}
function AttendanceVisual() {
  return (
    <div className="my-8 space-y-2">
      {["A-2841", "A-3122", "B-1099", "C-2204"].map((id, i) => (
        <motion.div key={id}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}
          className="glass-card flex items-center justify-between rounded-xl px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-brand" />
            <div className="text-sm font-medium">{id}</div>
          </div>
          <span className="text-xs font-semibold text-accent-teal">PRESENT</span>
        </motion.div>
      ))}
    </div>
  );
}
function NotificationVisual() {
  return (
    <div className="my-8 space-y-2">
      {[
        ["Arya boarded the bus", "07:42"],
        ["Arya entered campus", "08:11"],
        ["Attendance recorded", "08:12"],
      ].map(([t, time], i) => (
        <motion.div key={t} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
          className="glass-card flex items-center gap-3 rounded-xl px-4 py-3">
          <Bell className="h-4 w-4 text-accent-teal" />
          <div className="flex-1 text-sm">{t}</div>
          <span className="text-xs text-muted-foreground">{time}</span>
        </motion.div>
      ))}
    </div>
  );
}
function SecurityVisual() {
  return (
    <div className="relative my-8 grid h-52 grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl border border-primary/15 bg-primary/5">
          <div className="absolute inset-0 animate-shimmer" />
          <span className="absolute left-2 top-2 text-[10px] font-semibold text-primary-deep">CAM 0{i + 1}</span>
          <span className="absolute right-2 top-2 h-1.5 w-1.5 animate-pulse rounded-full bg-rose-500" />
        </div>
      ))}
    </div>
  );
}
function DashboardVisual() {
  return (
    <div className="my-8 grid grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
          className="h-20 rounded-xl bg-gradient-brand opacity-[0.85]" style={{ opacity: 0.3 + i * 0.1 }} />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary-deep/70">
      <span className="h-px w-8 bg-primary-deep/40" />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* About                                                                       */
/* -------------------------------------------------------------------------- */
function About() {
  const stats = [
    { k: "10+", v: "Schools live", icon: Building2 },
    { k: "99%", v: "AI accuracy", icon: Cpu },
    { k: "50K+", v: "Events / day", icon: Activity },
    { k: "24/7", v: "Monitoring", icon: Eye },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionLabel>About RanGa</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              We engineer intelligence that schools can actually <span className="text-gradient-brand">trust</span>.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              RanGa Software Solutions builds AI systems for the physical world — computer vision, edge inference, secure data pipelines and the dashboards that turn signal into action. We started inside one classroom. We now power smart campuses across the country.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ k, v, icon: Icon }, i) => (
                <motion.div key={v}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-primary/10 bg-white/70 p-4 backdrop-blur">
                  <Icon className="h-4 w-4 text-primary-glow" />
                  <div className="mt-3 text-2xl font-bold text-primary-deep">{k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <Timeline />
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    { year: "Pilot", title: "One classroom", body: "A single camera, a single API, a single promise — get attendance right." },
    { year: "v1", title: "School wide", body: "Multi-gate vision mesh, parent notifications, principal dashboard." },
    { year: "v2", title: "Smart campus", body: "Tracking, security, analytics — one operating system for school operations." },
    { year: "Now", title: "AI ecosystem", body: "Predictive analytics, ERP integrations and a developer platform." },
  ];
  return (
    <div className="relative">
      <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />
      <div className="space-y-8">
        {steps.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="relative pl-10">
            <span className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[10px] font-bold text-white shadow-glow">
              {i + 1}
            </span>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-glow">{s.year}</div>
            <div className="mt-1 text-lg font-semibold">{s.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Product Showcase                                                            */
/* -------------------------------------------------------------------------- */
function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [8, -6]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <SectionLabel>Flagship product</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The campus <span className="text-gradient-brand">command center</span>.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              One dashboard. Every camera, every student, every signal. Built so a principal can read it in five seconds and a security lead can act on it in one.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Live face recognition feed", "Per-zone presence map", "Smart attendance ledger", "Parent communication center", "Anomaly & emergency alerts", "Operations analytics"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground/80">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-[10px] text-white">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <motion.div ref={ref} style={{ rotate, y }} className="relative perspective-[1600px]">
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative rounded-3xl border border-primary/15 bg-white/80 p-4 shadow-glow backdrop-blur">
      <div className="flex items-center gap-2 border-b border-primary/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs text-muted-foreground">ranga.command / live</span>
      </div>
      <div className="mt-4 grid grid-cols-6 gap-3">
        <div className="col-span-4 rounded-2xl bg-gradient-brand p-5 text-white shadow-soft">
          <div className="text-xs uppercase tracking-wider opacity-70">Today · Present</div>
          <div className="mt-1 flex items-end gap-2">
            <div className="text-4xl font-bold">1,284</div>
            <div className="pb-1 text-xs text-white/70">/ 1,310</div>
          </div>
          <div className="mt-4 flex h-12 items-end gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div key={i}
                initial={{ height: 4 }} animate={{ height: 4 + Math.abs(Math.sin(i * 0.7)) * 38 }}
                transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                className="flex-1 rounded-sm bg-white/40" />
            ))}
          </div>
        </div>
        <div className="col-span-2 rounded-2xl border border-primary/10 bg-white p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">AI confidence</div>
          <div className="mt-2 text-3xl font-bold text-primary-deep">99.2%</div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/10">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "99%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full bg-gradient-brand" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded-lg bg-primary/5 p-2"><div className="font-semibold text-primary-deep">12</div><div className="text-muted-foreground">cameras</div></div>
            <div className="rounded-lg bg-primary/5 p-2"><div className="font-semibold text-primary-deep">4</div><div className="text-muted-foreground">gates</div></div>
          </div>
        </div>

        <div className="col-span-3 rounded-2xl border border-primary/10 bg-white p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Live feed</div>
          <div className="mt-3 space-y-2">
            {[["A-2841", "Verified", "ok"], ["B-1209", "Verified", "ok"], ["C-3372", "Flagged", "warn"]].map(([id, st, t], i) => (
              <motion.div key={String(id) + i}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2 text-xs">
                <div className="h-6 w-6 rounded-full bg-gradient-brand" />
                <div className="flex-1 font-medium">{id}</div>
                <span className={t === "ok" ? "text-accent-teal font-semibold" : "text-rose-500 font-semibold"}>{st}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col-span-3 rounded-2xl border border-primary/10 bg-white p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Zone presence</div>
          <div className="relative mt-3 h-32 rounded-xl bg-primary/5">
            <div className="absolute inset-0 bg-grid opacity-60" />
            {[[15, 30], [45, 55], [70, 25], [80, 70], [30, 70]].map(([x, y], i) => (
              <span key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
                <span className="absolute -inset-1.5 animate-pulse-ring rounded-full bg-accent-teal/50" />
                <span className="relative block h-2 w-2 rounded-full bg-primary shadow-glow" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* How it works                                                                */
/* -------------------------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Student approaches the AI gate", body: "Edge cameras detect motion and pre-warm the inference pipeline.", icon: Workflow },
    { n: "02", title: "Computer vision scans face", body: "On-device model extracts a 512-dim embedding in under 80ms.", icon: ScanFace },
    { n: "03", title: "Identity verified securely", body: "Embedding matched against an encrypted, school-scoped index.", icon: ShieldCheck },
    { n: "04", title: "Attendance syncs to cloud", body: "Event lands in the ledger and your SIS with full audit trail.", icon: Cpu },
    { n: "05", title: "Parent receives a friendly nudge", body: "WhatsApp / SMS / app alert sent in under one second.", icon: Bell },
    { n: "06", title: "Operators see the world update", body: "Dashboards animate in real-time. Anomalies bubble up automatically.", icon: Gauge },
  ];
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          From the gate to the dashboard — <span className="text-gradient-brand">in under one second</span>.
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent md:block" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <Step key={s.n} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index }: { step: { n: string; title: string; body: string; icon: any }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const Icon = step.icon;
  const left = index % 2 === 0;
  return (
    <div ref={ref} className={`grid items-center gap-6 md:grid-cols-2`}>
      <motion.div
        initial={{ opacity: 0, x: left ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${left ? "md:order-1" : "md:order-2"}`}
      >
        <div className="text-xs font-bold tracking-[0.3em] text-primary-glow">STEP {step.n}</div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{step.title}</h3>
        <p className="mt-3 max-w-md text-muted-foreground">{step.body}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`${left ? "md:order-2" : "md:order-1"} relative`}
      >
        <div className="relative mx-auto grid h-64 max-w-md place-items-center overflow-hidden rounded-3xl border border-primary/10 bg-gradient-soft">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="relative grid h-24 w-24 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
            <Icon className="h-10 w-10" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Benefits — floating islands                                                 */
/* -------------------------------------------------------------------------- */
function Benefits() {
  const items = [
    { icon: ShieldCheck, title: "Reliably", body: "We build trust through quality and dependability." },
    { icon: Users, title: "Adorable", body: "Solutions that are simple, friendly and human." },
    { icon: InfinityIcon, title: "Non-stopping", body: "We never stop learning, improving and delivering." },
    { icon: Brain, title: "Genius", body: "Smart, innovative and intelligent engineering." },
    { icon: Star, title: "Aspirants", body: "We aim higher and empower growth for everyone." },
    { icon: BarChart3, title: "Scalable", body: "Engineered for one classroom or one thousand." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Why RanGa</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Six promises. <span className="text-gradient-brand">Zero compromises.</span>
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div key={it.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                data-cursor="hover"
                className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white/70 p-7 backdrop-blur transition-shadow hover:shadow-glow">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-glow/15 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Live Dashboard                                                              */
/* -------------------------------------------------------------------------- */
function LiveDashboard() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <SectionLabel>Live operations</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Watch a campus think — <span className="text-gradient-brand">in real-time</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Everything below is a simulated stream of a real RanGa deployment. Attendance lands. Alerts fire. Cameras keep watch. Operators stay calm.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <LiveAttendance />
          <CameraGrid />
          <AlertFeed />
        </div>
      </div>
    </section>
  );
}

function LiveAttendance() {
  const [n, setN] = useState(1248);
  useEffect(() => {
    const t = setInterval(() => setN((v) => v + Math.floor(Math.random() * 3)), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Attendance · live</div>
        <span className="inline-flex items-center gap-1.5 text-xs text-accent-teal"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-teal" />Streaming</span>
      </div>
      <div className="mt-4 text-5xl font-bold text-primary-deep tabular-nums">{n.toLocaleString()}</div>
      <div className="mt-1 text-xs text-muted-foreground">events recorded today</div>
      <div className="mt-6 flex h-28 items-end gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.div key={i}
            animate={{ height: [10 + (i % 5) * 6, 28 + ((i * 7) % 40), 14 + (i % 4) * 8] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
            className="flex-1 rounded-t bg-gradient-brand opacity-80" />
        ))}
      </div>
    </div>
  );
}

function CameraGrid() {
  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Camera mesh</div>
        <span className="text-xs font-semibold text-accent-teal">12 / 12 ONLINE</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative aspect-video overflow-hidden rounded-lg bg-primary/8">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 animate-shimmer opacity-60" />
            <span className="absolute left-1.5 top-1.5 rounded-sm bg-black/60 px-1 text-[9px] font-bold text-white">CAM 0{i + 1}</span>
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-rose-500" />
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-muted-foreground">Edge frames inferred locally · zero footage leaves the network.</div>
    </div>
  );
}

function AlertFeed() {
  const seed = [
    { icon: ScanFace, t: "Identity verified · A-2841", time: "now", tone: "ok" as const },
    { icon: Bell, t: "Parent notified · WhatsApp", time: "1s", tone: "info" as const },
    { icon: AlarmClock, t: "Late entry · B-1209", time: "12s", tone: "warn" as const },
    { icon: Camera, t: "CAM-04 motion detected", time: "34s", tone: "live" as const },
    { icon: Radio, t: "Node mesh handshake", time: "1m", tone: "ok" as const },
  ];
  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Alerts</div>
        <span className="text-xs text-muted-foreground">last 5 min</span>
      </div>
      <div className="mt-4 space-y-2">
        {seed.map((s, i) => {
          const Icon = s.icon;
          const color = s.tone === "warn" ? "text-amber-500" : s.tone === "live" ? "text-rose-500" : s.tone === "info" ? "text-primary-glow" : "text-accent-teal";
          return (
            <motion.div key={s.t}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl bg-primary/5 px-3 py-2.5">
              <Icon className={`h-4 w-4 ${color}`} />
              <div className="flex-1 text-sm font-medium">{s.t}</div>
              <span className="text-xs text-muted-foreground">{s.time}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Roadmap                                                                     */
/* -------------------------------------------------------------------------- */
function Roadmap() {
  const milestones = [
    { t: "Pilot Classroom", d: "Where it all started." },
    { t: "School Deployment", d: "Multi-gate vision mesh, live now." },
    { t: "Smart Campus", d: "Tracking, security, analytics unified." },
    { t: "AI Ecosystem", d: "Predictive intelligence platform." },
  ];
  const future = ["Bus Tracking", "Visitor Management", "Parent App", "Digital Student ID", "ERP Integration", "Predictive AI Analytics"];
  return (
    <section id="roadmap" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Roadmap</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          The path from <span className="text-gradient-brand">today to tomorrow</span>.
        </h2>

        <div className="relative mt-14">
          <svg className="absolute inset-x-0 top-12 hidden h-24 w-full md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rg" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.32 0.18 262)" />
                <stop offset="1" stopColor="oklch(0.68 0.13 210)" />
              </linearGradient>
            </defs>
            <path d="M 0 50 C 200 0, 400 100, 600 50 S 1000 0, 1200 50" stroke="url(#rg)" strokeWidth="2" fill="none" strokeDasharray="6 6" />
          </svg>
          <div className="relative grid gap-6 md:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div key={m.t}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative rounded-3xl border border-primary/10 bg-white/80 p-6 backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white shadow-glow">{i + 1}</div>
                <div className="mt-4 text-lg font-bold tracking-tight">{m.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-glow">Coming next</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {future.map((f) => (
              <span key={f} className="rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <svg className="absolute inset-x-0 top-1/2 h-32 w-full -translate-y-1/2 opacity-40" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <motion.path
          d="M 0 50 Q 150 10 300 50 T 600 50 T 900 50 T 1200 50"
          stroke="oklch(0.55 0.18 258)" strokeWidth="1.5" fill="none"
          animate={{ d: ["M 0 50 Q 150 10 300 50 T 600 50 T 900 50 T 1200 50", "M 0 50 Q 150 90 300 50 T 600 50 T 900 50 T 1200 50", "M 0 50 Q 150 10 300 50 T 600 50 T 900 50 T 1200 50"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>Talk to us</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build the <span className="text-gradient-brand">smart campus</span> together.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Tell us about your school, district or enterprise. We'll send back a tailored pilot plan within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Enterprise-grade", "ISO ready", "On-prem available", "24/7 support"].map((b) => (
              <span key={b} className="rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-xs text-primary-deep">{b}</span>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary-deep">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
                <div className="mt-0.5 flex flex-col text-sm font-semibold text-foreground">
                  <a href="tel:+918438525688" data-cursor="hover" className="hover:text-primary-deep">+91 84385 25688</a>
                  <a href="tel:+919047055592" data-cursor="hover" className="hover:text-primary-deep">+91 90470 55592</a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary-deep">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Address</div>
                <div className="mt-0.5 max-w-xs text-sm font-semibold text-foreground leading-relaxed">
                  Veeramudi karupparayan kovil thottam, Annur
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="glass-card relative overflow-hidden rounded-3xl p-7"
        >
          <div className="grid gap-4">
            <Field label="Your name" placeholder="Arya Sharma" />
            <Field label="Work email" placeholder="arya@school.edu" type="email" />
            <Field label="Organization" placeholder="Sunrise International School" />
            <Field label="What are you exploring?" placeholder="Smart attendance for 1,200 students" multiline />
          </div>
          <button
            type="submit" data-cursor="hover"
            className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-white shadow-glow"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.span key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-flex items-center gap-2">
                  ✓ Request received — we'll be in touch
                </motion.span>
              ) : (
                <motion.span key="send" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-flex items-center gap-2">
                  Request a pilot <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text", multiline = false }: { label: string; placeholder: string; type?: string; multiline?: boolean }) {
  const [focus, setFocus] = useState(false);
  return (
    <label className="block">
      <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${focus ? "text-primary-deep" : "text-muted-foreground"}`}>{label}</span>
      <div className={`mt-1.5 rounded-xl border bg-white/70 backdrop-blur transition-all ${focus ? "border-primary/40 shadow-soft" : "border-primary/10"}`}>
        {multiline ? (
          <textarea
            rows={3} placeholder={placeholder}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className="w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60"
          />
        ) : (
          <input
            type={type} placeholder={placeholder}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className="w-full rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60"
          />
        )}
      </div>
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-white">
      <div className="absolute inset-0 opacity-60">
        <NeuralBackground className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Coded for today. Solutions for tomorrow. Built by engineers who believe campuses deserve real software.
            </p>
            <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
              <a href="tel:+918438525688" data-cursor="hover" className="block hover:text-primary-deep">+91 84385 25688</a>
              <a href="tel:+919047055592" data-cursor="hover" className="block hover:text-primary-deep">+91 90470 55592</a>
              <div className="max-w-[220px] text-xs leading-relaxed">Veeramudi karupparayan kovil thottam, Annur</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {[
              ["Platform", ["Vision", "Attendance", "Security", "Dashboard"]],
              ["Company", ["About", "Roadmap", "Contact", "Press"]],
              ["Resources", ["Docs", "API", "Trust", "Status"]],
            ].map(([h, items]) => (
              <div key={h as string}>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">{h as string}</div>
                <ul className="mt-3 space-y-1.5">
                  {(items as string[]).map((it) => (
                    <li key={it}><a href="#" data-cursor="hover" className="text-muted-foreground transition-colors hover:text-primary-deep">{it}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-primary/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-3 font-mono text-primary-deep/70">
              <span>{"</>"}</span>
              <span className="tracking-[0.28em]">CODED FOR TODAY · SOLUTIONS FOR TOMORROW</span>
              <span>{"</>"}</span>
            </div>
            <div>© {new Date().getFullYear()} RanGa Software Solutions. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
