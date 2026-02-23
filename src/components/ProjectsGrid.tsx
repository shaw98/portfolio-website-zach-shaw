"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

export default function ProjectsGrid() {
  return (
    <SectionWrapper id="projects">
      <div className="space-y-10">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-800">
            What I&apos;ve built
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Real tools born from real frustrations — on the sales floor, in the
            marketing office, and around the dinner table.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className={
                project.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : project.size === "medium"
                    ? "md:col-span-1 lg:col-span-1"
                    : "md:col-span-1 lg:col-span-1"
              }
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
