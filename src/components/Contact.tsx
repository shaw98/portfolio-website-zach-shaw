import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { SOCIAL_LINKS } from "@/lib/constants";

const socialButtons = [
  {
    label: "Email me",
    href: SOCIAL_LINKS.email,
    icon: Mail,
    accent: "bg-coral hover:bg-coral-hover shadow-coral/20 hover:shadow-coral/30" as const,
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
    accent: "bg-teal hover:bg-teal-hover shadow-teal/20 hover:shadow-teal/30" as const,
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: Github,
    accent: "bg-slate-700 hover:bg-slate-900 shadow-slate-700/20 hover:shadow-slate-900/30" as const,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-800">
            Let&apos;s connect
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Got an idea, a question, or just want to jam on something?
            <br className="hidden sm:block" />
            I&apos;m always up for a good conversation.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socialButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={btn.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-white font-heading font-700 text-base
                  shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]
                  ${btn.accent}`}
              >
                <Icon size={18} />
                {btn.label}
                {!btn.href.startsWith("mailto:") && (
                  <ArrowUpRight size={16} className="opacity-70" />
                )}
              </a>
            );
          })}
        </div>

        {/* Friendly sign-off */}
        <p className="text-sm text-slate-400 pt-2">
          Or drop a line at{" "}
          <a
            href={SOCIAL_LINKS.email}
            className="text-coral hover:text-coral-hover font-500 transition-colors underline underline-offset-2"
          >
            support@shawdesignlabs.com
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
