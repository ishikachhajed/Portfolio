import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { SkillGroup } from "../types/portfolio";
import * as SiIcons from "react-icons/si";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";


export const SkillsList: React.FC<{
  skills?: SkillGroup[];
  isBar?: boolean;
}> = ({ skills = [] }) => {
  const groupTitles = useMemo(
    () => skills.map((g) => g.title ?? "Other"),
    [skills],
  );

  const [selectedTitles, setSelectedTitles] = useState<string[]>(["all"]);
  const [expanded, setExpanded] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleTitle = (title: string) => {
    if (title === "all") {
      setSelectedTitles(["all"]);
      return;
    }
    setSelectedTitles((prev) => {
      const withoutAll = prev.filter((t) => t !== "all");
      if (withoutAll.includes(title)) {
        const next = withoutAll.filter((t) => t !== title);
        return next.length === 0 ? ["all"] : next;
      }
      return [...withoutAll, title];
    });
  };

  const filteredGroups = useMemo(() => {
    if (selectedTitles.includes("all")) return skills;
    return skills.filter((g) => selectedTitles.includes(g.title ?? "Other"));
  }, [skills, selectedTitles]);

  const getCount = (title: string) => {
    if (title === "all") return skills.flatMap((g) => g.skills ?? []).length;
    const found = skills.find((g) => g.title === title);
    return found ? (found.skills ?? []).length : 0;
  };

  const rowHeight = 140;
  const maxRowsCollapsed = 3;
  const collapsedPx = rowHeight * maxRowsCollapsed;
  const maxHeight = `${collapsedPx}px`;
  const totalSkillCount = skills.flatMap((g) => g.skills ?? []).length;

  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) { setHasOverflow(false); return; }
    const check = () => setHasOverflow(el.scrollHeight > collapsedPx);
    check();
    const ro = new ResizeObserver(() => check());
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => { ro.disconnect(); window.removeEventListener("resize", check); };
  }, [filteredGroups, collapsedPx, selectedTitles, totalSkillCount, expanded]);

  useEffect(() => setExpanded(false), [selectedTitles]);

  const collapsedHeightTarget = hasOverflow ? maxHeight : "auto";

  return (
    <div className="space-y-6">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => toggleTitle("all")}
          aria-pressed={selectedTitles.includes("all")}
          className={`px-3 py-1 rounded-full text-sm border transition select-none ${
            selectedTitles.includes("all")
              ? "bg-[var(--brand)] text-black border-[var(--brand)] font-semibold"
              : "bg-[var(--surface)] text-[var(--text)] border-[var(--border)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
          }`}
        >
          All ({getCount("all")})
        </button>

        {groupTitles.map((t) => {
          const active = selectedTitles.includes(t);
          return (
            <button
              key={t}
              onClick={() => toggleTitle(t)}
              aria-pressed={active}
              className={`px-3 py-1 rounded-full text-sm border transition select-none ${
                active
                  ? "bg-[var(--brand)] text-black border-[var(--brand)] font-semibold"
                  : "bg-[var(--surface)] text-[var(--text)] border-[var(--border)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
              }`}
            >
              {t} ({getCount(t)})
            </button>
          );
        })}
      </div>

      <motion.div
        animate={{ height: expanded ? "auto" : collapsedHeightTarget }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden"
      >
        <motion.div
          key={selectedTitles.join("-")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
          ref={contentRef}
        >
          {filteredGroups.map((group) => {
            const groupTitle = group.title ?? "Other";
            const groupSkills = group.skills ?? [];
            return (
              <section key={groupTitle} aria-labelledby={`skills-${groupTitle}`}>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-4">
                  <h3
                    id={`skills-${groupTitle}`}
                    className="text-xs font-bold tracking-widest uppercase text-[var(--brand)]"
                  >
                    {groupTitle}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--brand)]/30 to-transparent" />
                </div>

                {/* Skill cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {groupSkills.map((s, idx) => {
                    const Icon = SiIcons[s.icon as keyof typeof SiIcons];
                    return (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.04 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="group relative p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]
                          hover:border-[var(--brand)]/60 hover:shadow-[0_0_16px_rgba(34,211,238,0.12)]
                          transition-all duration-300 cursor-default overflow-hidden"
                      >
                        {/* Background glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                        <div className="relative z-10 flex flex-col gap-3">
                          {/* Icon + Name row */}
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[var(--text)] leading-tight">
                              {s.name}
                            </span>
                            {Icon && (
                              <Icon
                                className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--brand)]
                                  transition-colors duration-300 flex-shrink-0"
                              />
                            )}
                          </div>


                          {/* Animated progress bar */}
                          {s.level != null && (
                            <div className="h-1 rounded-full bg-[var(--border)] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${s.level}%` }}
                                transition={{ duration: 0.9, ease: "easeOut", delay: idx * 0.04 }}
                                className="h-full rounded-full"
                                style={{
                                  background: "linear-gradient(90deg, var(--brand), var(--accent))",
                                  boxShadow: "0 0 6px rgba(34,211,238,0.5)",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Show more / less */}
      {(hasOverflow || expanded) && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer
              border border-[var(--brand)]/40 bg-[var(--surface)]
              hover:border-[var(--brand)] hover:text-[var(--brand)]
              text-[var(--muted)] text-sm transition-all duration-200"
            aria-expanded={expanded}
          >
            {expanded ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            <span>{expanded ? "Show less" : "Show all skills"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsList;
