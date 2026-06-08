// PortfolioPage.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillsList } from "../components/SkillsList";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/shared/Footer";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";
import { AppleHelloEnglishEffect } from "../components/HelloEffects";
import type { Project } from "../types/portfolio";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
import CLIResume from "../components/CLIResume";
import { BackgroundBeams } from "../components/BackgroundBeams";
import CurvedLoop from "../components/CurvedLoop";

const PortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showCLI, setShowCLI] = useState(false);
  const [showHello, setShowHello] = useState(true);

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
        links={[
          { href: "#about", label: "About" },
          { href: "#experience", label: "Experience" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ]}
        onTryCLI={() => setShowCLI(true)}
      />
      {/* CLI panel (docked / overlay) */}
      <CLIResume open={showCLI} onClose={() => setShowCLI(false)} />

      {/* About / hero: hidden while hello animation plays */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            key="hello-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AppleHelloEnglishEffect
              className="text-white"
              onAnimationComplete={() => setShowHello(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="about"
        className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-0 pt-24"
        style={{ minHeight: "100vh" }}
        initial={{ opacity: 0, y: 8 }}
        animate={showHello ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0" style={{ height: "140vh" }}>
          <BackgroundBeams />
        </div>
        <div className="relative z-10 w-full max-w-6xl 2xl:max-w-7xl mx-auto py-20 sm:py-24 lg:py-32">
          <div className="grid items-center">
            <About />
          </div>
        </div>
      </motion.section>
      <div className="w-full bg-[var(--background)] pt-8 pb-8 relative z-20">
        <CurvedLoop
          marqueeText={PORTFOLIO_INFO.personal.headline + " · "}
          speed={1}
          className="text-2xl text-[var(--text)] bg-[var(--surface)]"
          curveAmount={400}
          direction="left"
          interactive={true}
        />
      </div>

      <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-15 sm:py-20 lg:py-32 relative z-20">
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Projects</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Selected work — click a card for details.
          </p>
          <ProjectsGrid
            projects={PORTFOLIO_INFO.projects}
            onOpen={setSelected}
          />
        </section>

        <section id="experience" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Experience</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Where I've worked and what I've built.
          </p>
          <div className="relative flex flex-col gap-6">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block" />
            {PORTFOLIO_INFO.experience?.map((exp) => {
              const startDate = typeof exp.date === "object" && exp.date !== null && "start" in exp.date ? exp.date.start : "";
              const endDate = typeof exp.date === "object" && exp.date !== null && "end" in exp.date ? exp.date.end : "";
              const isPresent = typeof exp.date === "object" && exp.date !== null && "present" in exp.date && exp.date.present;
              const formatDate = (d?: string) => {
                if (!d) return "";
                const [y, m] = d.split("-");
                const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                return `${months[parseInt(m, 10) - 1]} ${y}`;
              };
              const dateRange = startDate
                ? `${formatDate(startDate)} – ${isPresent ? "Present" : formatDate(endDate)}`
                : typeof exp.date === "string" ? exp.date : "";
              return (
                <div key={exp.id} className="relative md:pl-14 pl-0">
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 top-5 w-3 h-3 rounded-full bg-[var(--brand)] ring-2 ring-[var(--bg)] hidden md:block" />
                  <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--brand)] transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-sm font-semibold text-[var(--brand)] mt-0.5">
                          {exp.company}
                          {exp.location && (
                            <span className="text-[var(--muted)] font-normal"> · {exp.location}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-[var(--muted)] bg-[var(--border)] px-2.5 py-1 rounded-full whitespace-nowrap mt-1 sm:mt-0 self-start">
                        {dateRange}
                      </span>
                    </div>
                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand)] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.tech && exp.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        <section id="skills" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Skills</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tools and technologies I use regularly.
          </p>
          <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Contact</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Have a project in mind, or just want to say hi? I'd love to hear from you!
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <ContactForm />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-4">
              <div>
                <div className="font-semibold text-[var(--brand)]">Let's collaborate</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  I'm open to internships, project collaborations, and full-time opportunities.
                </div>
              </div>
              <div className="mt-2">
                <div className="font-semibold">Quick contact</div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Email: ishikachhajed24@gmail.com
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Location: Indore, Madhya Pradesh, India
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/ishika-chhajed-203136288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--brand)] hover:underline"
                >
                  🔗 LinkedIn Profile
                </a>
                <a
                  href="https://github.com/ishikachhajed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--brand)] hover:underline"
                >
                  🐙 GitHub Profile
                </a>
                <a
                  href="https://leetcode.com/u/ishikachhajed1044/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--brand)] hover:underline"
                >
                  💡 LeetCode Profile
                </a>
              </div>
              <div className="mt-auto">
                <div className="text-sm font-medium">Resume</div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 px-4 py-2 rounded-lg border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-black transition-colors text-center text-sm font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </ThemeProvider>
  );
};

export default PortfolioPage;
