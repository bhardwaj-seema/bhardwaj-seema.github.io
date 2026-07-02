import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/bhardwajseema413@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setStatus("success");
      setFeedback("Thanks! Your message has been sent successfully.");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section-shell py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="glass-card rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Contact</p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Let&apos;s build something impactful together.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Reach out for partnerships, freelance opportunities, or custom software work.
              I&apos;m eager to discuss your next project and share how my experience can help.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#091124]/90 p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                  <FiMail className="text-xl" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">Email</p>
                <p className="mt-2 text-sm text-slate-300/90">bhardwajseema413@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091124]/90 p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-200">
                  <FiPhone className="text-xl" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">Phone</p>
                <p className="mt-2 text-sm text-slate-300/90">+91 98765 43210</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091124]/90 p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-200">
                  <FiMapPin className="text-xl" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">Location</p>
                <p className="mt-2 text-sm text-slate-300/90">Delhi, India</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[32px] border border-white/10 bg-[#060A18]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
          >
            <input type="hidden" name="_subject" value="New message from your portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="block text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="mt-2 w-full rounded-[28px] border border-white/10 bg-[#04060f]/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                required
                className="mt-2 w-full rounded-[28px] border border-white/10 bg-[#04060f]/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Message
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                required
                className="mt-2 w-full rounded-[28px] border border-white/10 bg-[#04060f]/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[28px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-5 py-4 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <FiSend className="text-base" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {feedback ? (
              <p
                className={`text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
