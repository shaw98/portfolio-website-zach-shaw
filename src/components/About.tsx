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
  { icon: Flag, label: "Chasing birdies (and mostly bogeys)" },
  { icon: Flame, label: "Smoking brisket low & slow" },
  { icon: Heart, label: "Curious, empathetic, always learning" },
];

export default function About() {
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
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-heading font-800 mb-2 text-center">
              When I&apos;m not building
            </h3>
            <p className="text-slate-500 text-center mb-8 text-[15px]">
              The stuff that keeps me grounded and makes the work worth doing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {personalDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-full bg-warm-tint px-5 py-2.5 border border-slate-900/5
                    transition-all duration-300 hover:border-teal/30 hover:bg-teal-light"
                >
                  <item.icon size={18} className="text-teal shrink-0" />
                  <span className="text-sm font-body font-500 text-slate-700 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
