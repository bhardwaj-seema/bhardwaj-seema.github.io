import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiLayers, FiStar } from "react-icons/fi";

const stats = [
  { value: "3+", label: "Years Experience", icon: FiBriefcase, accent: "text-fuchsia-300" },
  { value: "20+", label: "Projects Completed", icon: FiCode, accent: "text-cyan-300" },
  { value: "10+", label: "Technologies", icon: FiLayers, accent: "text-sky-300" },
  { value: "100%", label: "Client Satisfaction", icon: FiStar, accent: "text-pink-300" },
];

const featuredProjects = [
  {
    name: "SaaS Admin Portal",
    description: "Built secure admin tooling and reporting dashboards with Laravel and Vue.",
  },
  {
    name: "API-first Marketplace",
    description: "Developed REST APIs, authentication flows, and payment integrations.",
  },
  {
    name: "Realtime Analytics",
    description: "Created a Redis-backed event pipeline for fast, live data updates.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="glass-card rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Projects</p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Work samples and measurable impact.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Focused on delivering applications that scale, perform, and feel seamless for users.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map(({ value, label, icon: Icon, accent }) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-[#091124]/90 p-6 text-center">
                <Icon className={`mx-auto text-3xl ${accent}`} />
                <p className="mt-4 text-3xl font-black text-white">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <div key={project.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/85">{project.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
