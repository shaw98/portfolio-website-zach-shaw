"use client";

import { Play, Film } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface MediaItem {
  title: string;
  description: string;
  role: string;
  impact: string;
  embedUrl: string | null;
  videoSrc?: string | null;
}

const mediaItems: MediaItem[] = [
  {
    title: "Mile High RV Show",
    description:
      "Event spot for the Mile High RV Show — high-energy, customer-facing spot designed to drive traffic and position the show as the destination for RV buyers.",
    role: "Editor, videographer, copywriter, designer, and audio. Music via Suno; voice and sound design with ElevenLabs and related tools.",
    impact:
      "Ran across digital, social, and in-show displays to support one of the key annual events.",
    embedUrl: "https://www.youtube.com/embed/Uakd0TIK_kk",
  },
  {
    title: "WRV Model Year Closeout",
    description:
      "Campaign spot built around model-year closeout urgency — clear messaging without feeling pushy, built for multi-location use.",
    role: "Editor, videographer, copywriter, designer, and audio. Music via Suno; voice and sound with ElevenLabs and related tools.",
    impact:
      "Supported sales teams with a consistent, on-brand spot for the closeout window.",
    embedUrl: "https://www.youtube.com/embed/d9ycudHX6xg",
  },
  {
    title: "Yeti",
    description:
      "Experimental short created with AI video tools — exploring how generative video can support concepting and storytelling.",
    role: "Concept, prompts, and edit. Nano Bana Pro, Veo 3, and Google Flow.",
    impact:
      "Personal experiment in AI-generated video; part of learning how new tools fit into the creative process.",
    embedUrl: "https://www.youtube.com/embed/qKdZvRwc8LQ",
  },
];

export default function MarketingMedia() {
  return (
    <SectionWrapper id="media" tinted>
      <div className="space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-800">
            The creative side
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            As Marketing Director, I got behind the camera, wrote the scripts, and made sure every commercial felt like us. I also experiment with AI video tools — prompts, generative clips, and editing — to see how they fit into the creative process.
          </p>
        </div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {mediaItems.map((item) => (
            <div
              key={item.title}
              className="group bg-surface rounded-2xl border border-slate-900/5 shadow-sm overflow-hidden
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Video area: local file or embed */}
              <div className="relative aspect-video bg-slate-900/3">
                {item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    title={item.title}
                    controls
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : item.embedUrl ? (
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-coral/10 transition-transform duration-300 group-hover:scale-110">
                      <Play size={24} className="text-coral ml-0.5" />
                    </div>
                    <span className="text-xs font-heading font-600 text-slate-400">
                      Video coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-5 md:p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Film size={16} className="text-coral shrink-0" />
                  <h3 className="text-base font-heading font-800 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[15px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-1">
                  <div>
                    <span className="text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">
                      My role
                    </span>
                    <p className="text-sm text-slate-500 leading-relaxed mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-heading font-700 text-teal uppercase tracking-wider">
                      Impact
                    </span>
                    <p className="text-sm text-slate-500 leading-relaxed mt-0.5">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
