import { GraduationCap, Workflow, Search, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface LearningItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  status: string;
}

const learningItems: LearningItem[] = [
  {
    icon: GraduationCap,
    title: "MS in Data Science & AI — University of Denver",
    description:
      "Exploring the academic side of the tools I've been building with. Data modeling, machine learning foundations, and the math behind the magic.",
    status: "Exploring programs",
  },
  {
    icon: Workflow,
    title: "n8n — Backend Automation Workflows",
    description:
      "Moving beyond one-off scripts into connected, visual automation pipelines. The goal: make every repetitive business process self-running.",
    status: "Actively building",
  },
  {
    icon: Search,
    title: "Answer Engine Optimization (AEO)",
    description:
      "As search shifts from links to direct answers, I'm studying how to structure content so AI assistants and search engines surface it first.",
    status: "Deep dive",
  },
];

export default function CurrentlyLearning() {
  return (
    <SectionWrapper id="learning" tinted>
      <div className="space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-1.5 mx-auto">
            <Sparkles size={16} className="text-coral" />
            <span className="text-sm font-heading font-700 text-coral">
              Always evolving
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-800">
            What I&apos;m learning right now
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            The best part of this chapter is that there&apos;s always
            something new to dig into. Here&apos;s where my head is at lately.
          </p>
        </div>

        {/* Learning cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {learningItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-surface rounded-2xl border border-slate-900/5 shadow-sm
                  p-6 md:p-7 flex flex-col
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Status badge */}
                <span className="inline-flex self-start items-center rounded-full bg-teal-light px-3 py-1 text-xs font-heading font-700 text-teal mb-4">
                  {item.status}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-coral-light mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} className="text-coral" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-800 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
