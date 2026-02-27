"use client";

import { useState } from "react";
import Image from "next/image";
import { Flame, TreePine, Flag, Code2, Heart } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const milestones = [
  {
    accent: "bg-coral",
    year: "2005 →",
    title: "The sales floor",
    text: "Started on the frontline at an RV dealership — learning to listen, solve problems on the spot, and earn trust one conversation at a time. Nearly two decades with the same company taught me that loyalty and showing up matter more than any résumé bullet.",
  },
  {
    accent: "bg-teal",
    year: "2022 →",
    title: "Marketing Director",
    text: "Moved into a self-taught Marketing Director role across multiple locations. Ran campaigns, shot commercials, and built systems."
  },
  {
    accent: "bg-coral",
    year: "2022 →",
    title: "AI-empowered builder",
    text: "Discovered that modern AI coding tools could finally let me build the software I'd always wished I had. Not by becoming a traditional engineer overnight — but by pairing twenty years of operational instinct with tools that meet me where I am.",
  },
];

const personalDetails = [
  { icon: Flag, label: "Chasing birdies (and mostly bogeys)", image: "/golf.JPG" },
  { icon: Flame, label: "Smoking brisket low & slow", image: "/brisket.jpeg" },
  { icon: Heart, label: "Volunteering with Operation Christmas Child", image: "/learning.jpeg" },
];

export default function About() {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  return (
    <SectionWrapper id="about" tinted>
      <div className="space-y-14">
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-800">
            The short version
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            I&apos;m not a software engineer with a CS degree and 10 years of
            commits. I&apos;m a people-first operator who spent two decades
            earning trust on the sales floor — and now I build tools that make
            my own life easier.
          </p>
        </div>

        {/* Timeline milestones */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {milestones.map((m) => (
            <div
              key={m.title}
              className="relative bg-surface rounded-2xl p-6 md:p-7 shadow-sm border border-slate-900/5
                transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${m.accent}`} />
                <span className="text-sm font-heading font-700 text-slate-400 uppercase tracking-wider">
                  {m.year}
                </span>
              </div>
              <h3 className="text-xl font-heading font-800 mb-2">
                {m.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                {m.text}
              </p>
            </div>
          ))}
        </div>

        {/* Personal / human details */}
        <div className="bg-surface rounded-2xl p-8 md:p-10 shadow-sm border border-slate-900/5">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-heading font-800 mb-2 text-center">
              When I&apos;m not building
            </h3>
            <p className="text-slate-500 text-center mb-8 text-[15px]">
              The stuff that keeps me grounded and makes the work worth doing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {personalDetails.map((item, index) => {
                const showImage = item.image && !imageErrors.has(index);
                return (
                  <div
                    key={item.label}
                    className="group flex flex-col items-center text-center rounded-2xl p-4 border border-slate-900/5 bg-warm-tint/30
                      transition-all duration-300 hover:shadow-lg hover:border-teal/20 hover:-translate-y-0.5"
                  >
                    {showImage ? (
                      <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden bg-slate-200/50 mb-4">
                        <Image
                          src={item.image}
                          alt=""
                          width={200}
                          height={200}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          onError={() => setImageErrors((prev) => new Set([...prev, index]))}
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-square max-w-[200px] mx-auto rounded-2xl bg-teal-light flex items-center justify-center mb-4">
                        <item.icon size={48} className="text-teal" />
                      </div>
                    )}
                    <span className="text-sm font-body font-600 text-slate-700">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
