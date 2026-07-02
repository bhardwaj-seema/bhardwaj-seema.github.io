import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail, FiBriefcase, FiLayers } from "react-icons/fi";
import { SiLaravel, SiMysql, SiNodedotjs, SiRedis } from "react-icons/si";
import AboutSection from "./About";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import ContactSection from "./Contact";
import heroGraphic from "../assets/hero.png";

const floatingTech = [
  { label: "Laravel", icon: SiLaravel, className: "left-[6%] top-[12%] border-rose-400/35 text-rose-100" },
  { label: "Node.js", icon: SiNodedotjs, className: "right-[4%] top-[11%] border-lime-400/35 text-lime-100" },
  { label: "MySQL", icon: SiMysql, className: "left-[0%] top-[45%] border-cyan-400/35 text-cyan-100" },
  { label: "AWS", icon: FiBriefcase, className: "right-[0%] top-[46%] border-amber-400/35 text-amber-100" },
  { label: "Redis", icon: SiRedis, className: "left-[16%] bottom-[7%] border-red-400/35 text-red-100" },
  { label: "Livewire", icon: FiLayers, className: "right-[12%] bottom-[6%] border-fuchsia-400/35 text-fuchsia-100" },
];

export default function Hero() {
  return (
    <main id="home" className="relative overflow-x-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section className="section-shell grid min-h-[calc(100svh-6rem)] items-center gap-14 pb-14 max-lg:min-h-0 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-2xl min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-100/90 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
            <span className="text-base">👋</span> Hello, I&apos;m
          </span>

          <h1 className="mt-6 text-5xl font-black uppercase tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Seema
            <span className="gradient-text block lg:inline lg:pl-5">Bhardwaj</span>
          </h1>

          <p className="mt-4 text-2xl font-medium text-white/90 sm:text-3xl">
            Software Developer
          </p>

          <p className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300/80 sm:text-base">
            <span className="text-violet-200">Laravel</span>
            <span>•</span>
            <span className="text-cyan-200">PHP</span>
            <span>•</span>
            <span className="text-sky-200">Node.js</span>
            <span>•</span>
            <span className="text-emerald-200">MySQL</span>
            <span>•</span>
            <span className="text-amber-200">AWS</span>
            <span>•</span>
            <span className="text-fuchsia-200">Redis</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Passionate software developer building scalable web applications, RESTful APIs,
            and polished interfaces with modern technologies and strong attention to detail.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="src/assets/Seema_Bhardwaj.docs"
              className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition hover:scale-[1.02] max-sm:w-full"
            >
              <FiDownload className="text-lg" />
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/seema-bhardwaj-3b1ba5214?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-4 font-semibold text-cyan-50 transition hover:border-cyan-300 hover:bg-cyan-400/10 max-sm:w-full"
            >
              <FiMail className="text-lg" />
              Contact Me
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <FiArrowDown className="text-cyan-300" />
            Scroll Down
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[640px] min-w-0 items-center justify-center lg:pl-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[min(620px,64vh)] w-[min(620px,64vh)] overflow-visible max-lg:h-[min(500px,52vh)] max-lg:w-[min(500px,52vh)] max-sm:h-[min(330px,42vh)] max-sm:w-[min(330px,42vh)]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,rgba(6,182,212,0.08)_45%,transparent_75%)] blur-2xl" />
            <div className="absolute inset-[14%] rounded-full border border-fuchsia-400/35 shadow-[0_0_120px_rgba(168,85,247,0.25)]" />
            <div className="absolute inset-[22%] rounded-full border border-cyan-400/35" />
            <div className="absolute inset-[19%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_55%,rgba(5,8,22,0.88)_100%)]" />

            <img
              src={heroGraphic}
              alt="Seema portrait"
              className="absolute inset-[20.5%] z-10 h-[59%] w-[59%] rounded-full object-cover object-top drop-shadow-[0_24px_60px_rgba(139,92,246,0.35)]"
            />

            {floatingTech.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`absolute ${item.className} z-20 rounded-2xl border bg-[#091124]/85 px-4 py-3 text-center shadow-[0_18px_45px_rgba(0,0,0,0.42)] backdrop-blur-md max-sm:px-3 max-sm:py-2`}
                >
                  <Icon className="mx-auto text-3xl max-sm:text-2xl" />
                  <p className="mt-1 text-sm font-medium max-sm:text-xs">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}