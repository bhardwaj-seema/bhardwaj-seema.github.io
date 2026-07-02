import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/30 bg-white/5 text-lg font-black text-white shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            SB
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-white">
              Seema Bhardwaj
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="mailto:seema@example.com"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            <FiDownload className="text-base" />
            Download Resume
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-200 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li>
              <a className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/5" href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/5" href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/5" href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/5" href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/5" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}