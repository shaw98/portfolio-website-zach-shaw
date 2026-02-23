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
    tagline: "Meal planning for real families",
    icon: UtensilsCrossed,
    accent: "coral",
    size: "large",
    problem:
      "My family was stuck in the 'what's for dinner?' loop every single night — wasting time, money, and patience.",
    built:
      "A full meal planning app (currently in beta) that lets families plan weekly meals, auto-generate grocery lists, and save favorite recipes.",
    outcome:
      "Our household grocery runs went from chaotic to intentional. Now being tested by other families too.",
    learned:
      "State management in a real app, working with databases, and how to actually ship something people use — not just a side project that sits on GitHub.",
  },
  {
    slug: "rv-finance-calculator",
    title: "RV Finance Calculator",
    tagline: "Deal math, anywhere",
    icon: Calculator,
    accent: "teal",
    size: "medium",
    problem:
      "Sales teams needed quick, accurate finance estimates on the lot — not back at a desk with a spreadsheet.",
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
    tagline: "Weather meets tee time",
    icon: CloudSun,
    accent: "coral",
    size: "medium",
    problem:
      "Checking three different apps before deciding whether to book a round got old fast.",
    built:
      "A golf-focused weather app that shows hourly conditions for your course — wind, rain chance, feels-like temp — laid out for golfers, not meteorologists.",
    outcome:
      "I actually use this every week. Built it for myself, but it turns out every golfer I know wants the same thing.",
    learned:
      "Working with external APIs, handling location data, and building something where I'm genuinely my own best beta tester.",
  },
  {
    slug: "family-meal-notifier",
    title: "Family Meal Notifier",
    tagline: "Dinner's ready — automatically",
    icon: Bell,
    accent: "teal",
    size: "small",
    problem:
      "With two little kids and busy schedules, someone always missed the 'dinner's ready' announcement.",
    built:
      "A simple notification system that pings family members when it's time to eat — no more yelling up the stairs.",
    outcome:
      "One less small friction in an already-hectic evening routine. The kids think it's hilarious.",
    learned:
      "Push notifications, scheduling logic, and that the smallest tools often get the most daily use.",
  },
  {
    slug: "quarterback-mathgame",
    title: "Quarterback Mathgame",
    tagline: "Math drills disguised as football",
    icon: Gamepad2,
    accent: "coral",
    size: "small",
    problem:
      "Getting a 7-year-old to practice math without a battle required some creative bribery.",
    built:
      "A football-themed math game where correct answers move the ball down the field toward a touchdown.",
    outcome:
      "My son actually asks to play it. That alone made the whole project worth it.",
    learned:
      "Game loop basics, keeping state across rounds, and that building for your kids is the most honest user testing you'll ever do.",
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
      "A templated flyer generator where the marketing team inputs event details and gets print-ready, branded PDFs instantly.",
    outcome:
      "What used to take half a day per location now takes minutes. The team actually enjoys making them.",
    learned:
      "PDF generation, template systems, and how to build internal tools that people adopt because they're genuinely easier than the old way.",
  },
  {
    slug: "thumbnail-generator",
    title: "Thumbnail Generator",
    tagline: "Consistent visuals, zero design debt",
    icon: Image,
    accent: "coral",
    size: "small",
    problem:
      "YouTube and social thumbnails were inconsistent — everyone had their own approach, and nothing looked cohesive.",
    built:
      "A tool that takes a title and image, applies brand-consistent overlays, and outputs ready-to-upload thumbnails.",
    outcome:
      "Content across channels finally looks like it comes from the same company.",
    learned:
      "Image manipulation in code, canvas APIs, and how small visual consistency compounds into real brand trust.",
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
      "A straightforward QR code generator with custom colors, logo embedding, and download options — no account needed.",
    outcome:
      "Used across print materials, event signage, and vehicle displays at every location.",
    learned:
      "QR encoding standards, SVG generation, and that 'build vs. buy' sometimes has an obvious answer when the buy option is overpriced.",
  },
];
