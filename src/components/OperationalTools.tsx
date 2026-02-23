import { Mail, Share2, Bot, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Tool {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: "coral" | "teal";
  problem: string;
  solution: string;
  outcome: string;
}

const tools: Tool[] = [
  {
    title: "Analytics Monthly Emailer",
    icon: Mail,
    accent: "teal",
    problem:
      "Leadership needed monthly marketing analytics, but pulling and formatting the data was a manual, error-prone slog that ate half a day every month.",
    solution:
      "Built an automated pipeline that pulls analytics from multiple sources, formats them into a clean, branded email report, and sends it on schedule — no manual steps.",
    outcome:
      "Half a day of tedious work eliminated every month. Leadership gets consistent, timely data they actually read.",
  },
  {
    title: "Social Content Poster",
    icon: Share2,
    accent: "coral",
    problem:
      "Posting across multiple social channels for multiple locations meant logging into a dozen accounts and copy-pasting the same content with minor tweaks.",
    solution:
      "Created a tool that takes a single content brief, adapts it per platform and location, and schedules posts across all channels from one place.",
    outcome:
      "Social publishing went from a scattered, hour-long task to a focused 10-minute workflow. Consistency went way up.",
  },
  {
    title: "Custom GPTs & Internal Assistants",
    icon: Bot,
    accent: "teal",
    problem:
      "Team members kept asking the same operational questions — 'What's the process for X?' 'Where's the template for Y?' — and the answers lived in scattered docs.",
    solution:
      "Built custom GPT assistants trained on internal processes, templates, and FAQs so the team could get instant, accurate answers without hunting through shared drives.",
    outcome:
      "Reduced repetitive questions to managers by a noticeable margin. New hires ramp up faster because the knowledge is always available.",
  },
];

export default function OperationalTools() {
  return (
    <SectionWrapper id="tools">
      <div className="space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-800">
            Behind the scenes
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Not every tool has a UI. These are the automations and workflows
            that quietly saved hours every week.
          </p>
        </div>

        {/* Tools list */}
        <div className="space-y-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isCoral = tool.accent === "coral";
            return (
              <div
                key={tool.title}
                className="group bg-surface rounded-2xl border border-slate-900/5 shadow-sm
                  transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                  p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                      isCoral ? "bg-coral-light" : "bg-teal-light"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={isCoral ? "text-coral" : "text-teal"}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-heading font-800">
                      {tool.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { label: "Problem", text: tool.problem },
                        { label: "What I built", text: tool.solution },
                        { label: "Outcome", text: tool.outcome },
                      ].map((section) => (
                        <div key={section.label}>
                          <span
                            className={`text-xs font-heading font-700 uppercase tracking-wider ${
                              isCoral ? "text-coral" : "text-teal"
                            }`}
                          >
                            {section.label}
                          </span>
                          <p className="text-[15px] text-slate-500 leading-relaxed mt-1">
                            {section.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow hint */}
                  <ArrowRight
                    size={20}
                    className="hidden md:block shrink-0 mt-1 text-slate-300 transition-all duration-300 group-hover:text-coral group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
