"use client";

import { Play, Film } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface MediaItem {
  title: string;
  description: string;
  role: string;
  impact: string;
  embedUrl: string | null;
}

const mediaItems: MediaItem[] = [
  {
    title: "Dealership Brand Commercial",
    description:
      "A high-energy, customer-facing commercial designed to shift the dealership's brand perception from 'just another lot' to a trusted, adventure-ready destination.",
    role: "Directed concept, scripted messaging, coordinated production across locations.",
    impact:
      "Became the flagship brand spot — ran across YouTube, social, and in-store displays for over a year.",
    embedUrl: null,
  },
  {
    title: "Seasonal Sales Campaign",
    description:
      "A multi-location campaign spot built around seasonal urgency without feeling pushy or generic.",
    role: "Wrote copy, selected music, managed shoot logistics, and handled post-production feedback.",
    impact:
      "Drove measurable uptick in foot traffic during the campaign window — one of the best-performing seasonal pushes.",
    embedUrl: null,
  },
  {
    title: "Customer Testimonial Series",
    description:
      "Real customer stories, shot on location, focusing on the experience rather than the product.",
    role: "Developed interview framework, coached customers on-camera, edited for tone and pacing.",
    impact:
      "Built social proof that sales teams could share directly with prospects — 'watch someone like you talk about us.'",
    embedUrl: null,
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
            As Marketing Director, I didn&apos;t just manage campaigns — I got
            behind the camera, wrote the scripts, and made sure every piece
            felt like us.
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
              {/* Video embed area */}
              <div className="relative aspect-video bg-slate-900/3">
                {item.embedUrl ? (
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

        {/* Note about upcoming content */}
        <p className="text-center text-sm text-slate-400 font-body">
          Video embeds will be added as media assets are finalized.
          Each card is ready to accept a YouTube or Vimeo URL.
        </p>
      </div>
    </SectionWrapper>
  );
}
