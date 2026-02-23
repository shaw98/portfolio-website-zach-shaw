"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-warm-white"
    >
      {/* Subtle warm gradient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-coral/4 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal/4 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-coral/2 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left lg:gap-16">
          {/* Text content */}
          <div
            className={`flex-1 space-y-6 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-coral font-heading font-700">
              Hey, I&apos;m Zach. 👋
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-800 text-slate-900 leading-[1.12] tracking-tight">
              Two decades in sales.
              <br className="hidden sm:block" />
              {" "}Three years in marketing.
              <br />
              <span className="text-coral">A lifelong builder.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
              I&apos;m an operational leader who uses modern AI to turn years of
              front-line business experience into functional, problem-solving
              tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-white font-heading font-700 text-base
                  shadow-lg shadow-coral/25 transition-all duration-300
                  hover:bg-coral-hover hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.03]
                  active:scale-[0.98]"
              >
                See what I&apos;ve built →
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 text-slate-700 font-heading font-600 text-base
                  transition-all duration-300
                  hover:border-teal hover:text-teal hover:scale-[1.02]
                  active:scale-[0.98]"
              >
                My story
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`shrink-0 transition-all duration-700 ease-out delay-200 ${
              visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
            }`}
          >
            <PhotoPlaceholder className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`hidden md:flex justify-center mt-16 transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-coral transition-colors duration-300 group"
          >
            <span className="text-xs font-body font-500 uppercase tracking-widest">
              Scroll down
            </span>
            <ArrowDown
              size={18}
              className="animate-bounce"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
