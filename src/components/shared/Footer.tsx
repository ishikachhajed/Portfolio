import React from "react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <footer className="text-sm text-[var(--muted)] border-t border-[var(--border)] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        {/* Left: message */}
        <div>
          Designed &amp; coded with ☕ + ❤️ by{" "}
          <span className="font-medium text-[var(--brand)]">Ishika Chhajed</span>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ishikachhajed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--brand)] transition-colors"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ishika-chhajed-203136288/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--brand)] transition-colors"
          >
            <SiLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/ishikachhajed1044/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-[var(--brand)] transition-colors"
          >
            <SiLeetcode size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
