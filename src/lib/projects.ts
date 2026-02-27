import {
  UtensilsCrossed,
  Bell,
  Calculator,
  CloudSun,
  Gamepad2,
  FileImage,
  Image,
  QrCode,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectSize = "large" | "medium" | "small";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  accent: "coral" | "teal";
  size: ProjectSize;
  problem: string;
  built: string;
  outcome: string;
  learned: string;
}

export const projects: Project[] = [
  {
    slug: "gather",
    title: "Gather",
    tagline: "Family gatherings without group-text chaos",
    icon: UtensilsCrossed,
    accent: "coral",
    size: "large",
    problem:
      "Coordinating family dinners meant endless group texts, scattered RSVPs, and no single place to see who was coming, what they were bringing, or when to send reminders.",
    built:
      "A mobile app built with React Native (Expo) and Firebase where families create events, track RSVPs and headcount, assign dishes, and send push notifications — all wrapped in a warm 'Sunday Roast' design theme.",
    outcome:
      "Holiday meals and Sunday dinners feel less chaotic: everyone sees the same event details, knows what they’re bringing, and gets gentle reminders right on their phone.",
    learned:
      "How to ship a full mobile MVP with Expo, phone-number auth, Firestore real-time sync, and a coherent design system — plus how much great UX matters when you’re designing for busy, non-technical family members.",
  },
  {
    slug: "rv-finance-calculator",
    title: "RV Finance Calculator",
    tagline: "Deal math, anywhere",
    icon: Calculator,
    accent: "teal",
    size: "medium",
    problem:
      "Sale and Finance managers needed quick, accurate finance estimates on the lot or at a RV show,not back at a desk with a spreadsheet.",
    built:
      "A mobile-first calculator that handles RV-specific financing: trade values, down payments, tax, and monthly estimates in seconds.",
    outcome:
      "Sales staff could confidently walk customers through numbers on the spot, cutting deal time and building trust faster.",
    learned:
      "How to think about UX from the perspective of someone standing in a parking lot with a customer — not sitting at a desk.",
  },
  {
    slug: "forecast-golf",
    title: "ForeCast Golf",
    tagline: "Live outing scoring + leaderboard",
    icon: CloudSun,
    accent: "coral",
    size: "medium",
    problem:
      "For a small group outing, we needed a dead-simple way to track scores without paper cards, group texts, or one person doing math for everyone.",
    built:
      "A real-time web app for a Fox Hollow Golf Course outing: predefined game slots, nickname signup, tee selection with yardages, quick score entry, and a combined live leaderboard across all groups (plus a demo mode to explore without saving data).",
    outcome:
      "Everyone stayed on the same page during the round — scores updated instantly, players could check their scorecard anytime, and editing past holes was painless on mobile.",
    learned:
      "Firebase/Firestore real-time data patterns, mobile-first UX for fast input, and how details like tee/yardage context and dark mode make an event app feel polished."
  },
  {
    slug: "rv-sale-flyer-generator",
    title: "RV-Sale Flyer Generator",
    tagline: "Event flyers in minutes, not hours",
    icon: FileImage,
    accent: "teal",
    size: "medium",
    problem:
      "Creating sale event flyers for multiple locations meant hours in design tools for every campaign.",
    built:
      "A templated flyer generator where the marketing  inputs event details and gets print-ready, branded PDFs instantly.",
    outcome:
      "What used to take a week or more for a RV show now takes minutes.",
    learned:
      "PDF generation, template systems, scraping websites, scripts and automations and how to build internal tools that people adopt because they're genuinely easier than the old way.",
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    tagline: "Branded codes, no subscriptions",
    icon: QrCode,
    accent: "teal",
    size: "small",
    problem:
      "Every QR code tool wanted a monthly subscription for basic branding and tracking.",
    built:
      "A straightforward QR code generator with custom colors, logo embedding, campaign tracking, batch building and download options — no account needed.",
    outcome:
      "Used across print materials, event signage, and vehicle displays at every location.",
    learned:
      "QR encoding standards, SVG generation, and that 'build vs. buy' sometimes has an obvious answer when the buy option is overpriced.",
  },
];
