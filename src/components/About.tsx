import { motion } from "framer-motion";
import { FiAward, FiCheckCircle, FiLayers } from "react-icons/fi";

const highlights = [
  {
    title: "Backend-first development",
    description: "Built scalable REST APIs, microservices, and performance-tuned server systems.",
    icon: FiLayers,
  },
  {
    title: "Quality-focused craft",
    description: "Delivering clean code, strong structure, and maintainable architecture.",
    icon: FiCheckCircle,
  },
  {
    title: "Trusted delivery",
    description: "Experienced in working with startup and enterprise teams to ship polished products.",
    icon: FiAward,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="glass-card rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                About
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Building modern web experiences with a reliable backend-first approach.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I design and develop full-stack applications using Laravel, PHP, Node.js,
              MySQL, Redis, and cloud deployment patterns. My work focuses on stability,
              speed, and user-friendly experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-[#091124]/90 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
