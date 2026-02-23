"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  const accentDot = project.accent === "coral" ? "bg-coral" : "bg-teal";
  const accentText = project.accent === "coral" ? "text-coral" : "text-teal";
  const accentBg =
    project.accent === "coral" ? "bg-coral-light" : "bg-teal-light";

  return (
    <div
      className={`
        group relative bg-surface rounded-2xl border border-slate-900/5
        shadow-sm transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        p-6 md:p-7 flex flex-col
      `}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl ${accentBg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={22} className={accentText} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-heading font-800 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 font-body mt-0.5">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Problem — always visible */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`w-2 h-2 rounded-full ${accentDot}`} />
          <span className="text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">
            Problem
          </span>
        </div>
        <p className="text-[15px] text-slate-500 leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* Expandable details */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="space-y-3 pt-1">
          {[
            { label: "What I built", text: project.built },
            { label: "Outcome", text: project.outcome },
            { label: "What I learned", text: project.learned },
          ].map((section) => (
            <div key={section.label}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-2 h-2 rounded-full ${accentDot}`} />
                <span className="text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">
                  {section.label}
                </span>
              </div>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`
          mt-auto pt-4 flex items-center gap-1.5
          text-sm font-heading font-700 transition-colors duration-200
          ${accentText} hover:opacity-80 cursor-pointer
        `}
      >
        {expanded ? (
          <>
            Less detail <ChevronUp size={16} />
          </>
        ) : (
          <>
            Full story <ChevronDown size={16} />
          </>
        )}
      </button>
    </div>
  );
}
