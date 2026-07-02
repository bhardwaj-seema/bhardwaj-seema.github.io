import { motion } from "framer-motion";
import { SiLaravel, SiMysql, SiNodedotjs, SiPhp, SiRedis, SiTailwindcss, SiJavascript, SiGit, SiFirebase, SiTypescript, SiMongodb } from "react-icons/si";
import { FiCode, FiLayers, FiBriefcase } from "react-icons/fi";

const skills = [
  { label: "Laravel", icon: SiLaravel, tone: "from-rose-500/20 to-rose-400/5 text-rose-200" },
  { label: "PHP", icon: SiPhp, tone: "from-violet-500/20 to-violet-400/5 text-violet-200" },
  { label: "Node.js", icon: SiNodedotjs, tone: "from-lime-500/20 to-lime-400/5 text-lime-200" },
  { label: "MySQL", icon: SiMysql, tone: "from-cyan-500/20 to-cyan-400/5 text-cyan-200" },
  { label: "Redis", icon: SiRedis, tone: "from-red-500/20 to-red-400/5 text-red-200" },
  { label: "Tailwind CSS", icon: SiTailwindcss, tone: "from-sky-500/20 to-sky-400/5 text-sky-200" },
  { label: "AWS", icon: FiBriefcase, tone: "from-amber-500/20 to-amber-400/5 text-amber-200" },
  { label: "JavaScript", icon: SiJavascript, tone: "from-yellow-500/20 to-yellow-400/5 text-yellow-200" },
  { label: "TypeScript", icon: SiTypescript, tone: "from-blue-500/20 to-blue-400/5 text-blue-200" },
  { label: "MongoDB", icon: SiMongodb, tone: "from-emerald-500/20 to-emerald-400/5 text-emerald-200" },
  { label: "Git", icon: SiGit, tone: "from-orange-500/20 to-orange-400/5 text-orange-200" },
  { label: "Firebase", icon: SiFirebase, tone: "from-orange-400/20 to-yellow-400/5 text-orange-100" },
  { label: "REST APIs", icon: FiCode, tone: "from-slate-500/20 to-slate-400/5 text-slate-200" },
  { label: "Microservices", icon: FiLayers, tone: "from-indigo-500/20 to-indigo-400/5 text-indigo-200" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="glass-card rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Skills</p>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Modern technology stack for full-service web development.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            A broad set of tools and platforms used to build performant applications,
            backend services, and polished user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map(({ label, icon: Icon, tone }) => (
            <div
              key={label}
              className={`rounded-3xl border border-white/10 bg-gradient-to-br ${tone} p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}
            >
              <Icon className="mx-auto text-4xl" />
              <p className="mt-4 text-sm font-semibold text-white">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
