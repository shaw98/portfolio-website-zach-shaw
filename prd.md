# Product Requirements Document (PRD): Zach's Portfolio Website

## 1. Brand, Personality & Overview

This project is a personal portfolio for Zach (Domain: `zachshaw.com`). The site must visually and tonally reflect Zach’s personality: fun, uplifting, empathetic, encouraging, curious, and eager to learn. The experience should feel like talking to a friendly, smart person in real life. Tone of voice is conversational, clear, jargon-light, and optimistic.

**Core Narrative:** Zach is an operational leader with ~20 years of sales experience and ~3 years as a Marketing Director, transitioning into a new chapter in the tech space by using AI to build functional software. He is an AI‑empowered builder, not a traditional software engineer.

**Success Metric:**  
- People who know Zach should immediately say “Yep, that feels like you” when they see the site.  
- First-time visitors should be able to describe Zach as fun, uplifting, empathetic, curious, and someone who loves building things.  
- The site must look distinctly human and distinct from typical AI-generated, generic, or dark/moody corporate templates.

---

## 2. Tech Stack

- **Framework:** Next.js (App Router)  
- **Styling:** Tailwind CSS (strictly configured for a light/warm theme; dark mode disabled)  
- **Icons:** Lucide React  
- **Deployment:** Vercel (configured with custom domain `zachshaw.com`)  
- **Media:** YouTube/Vimeo embeds for video content.

---

## 3. Visual Identity & UI Guidelines

### 3.1 Look & Feel

- Light, bright, and warm theme (no dark or moody UI).  
- Layout should feel open and breathable with generous whitespace and vertical spacing between sections.  
- Overall impression: approachable, modern, and human — not like a generic AI-generated portfolio.

### 3.2 Color Palette (Warm & Bright)

Primary direction: warm, bright, approachable.

- **Background:** Warm white (e.g., `#FAFAF8`). Do not use pure white.  
- **Surface/Cards:** `#FFFFFF`.  
- **Text:** Dark slate (e.g., `#1E293B` to `#475569`). Do not use pure black.  
- **Primary Accent:** Warm coral or orange (friendly, energetic) — e.g., `#FF7660`.  
- **Secondary Accent:** Teal or cyan (trust, calm, tech credibility) — e.g., `#0E7C86`.  
- **Alternating Sections:** Use very light tints (e.g., warm off-white and very light teal like `#F0F7F7`) to create vertical rhythm.

> The emotional intent must be preserved: warm, energetic, and approachable.

### 3.3 Typography

Limit to 2 font families (+ optional monospace for code snippets).

- **Headlines:** Rounded or humanist sans-serif (friendly, modern), tight letter-spacing, strong weight 700–800.  
- **Body:** Highly readable sans-serif, slightly larger than default (16–18px), comfortable line-height (1.6–1.8).  
- **Headline treatment:** Slight negative letter-spacing and strong weight to feel intentional.  
- **Body text:** Dark slate on light background for comfortable reading; avoid low-contrast gray-on-white.

Typography should feel friendly and clear, not overly “techy” or sterile.

### 3.4 Layout & Structure

- Open and breathable with generous whitespace and vertical spacing between sections.  
- Sections should read like a story, not disconnected blocks: Hero → About → Projects → Currently Learning → Media/Tools → Contact.  
- Use a **bento-style grid** for projects (mixed card sizes) to avoid a uniform “card farm” look.  
- Max content width ~1200px, centered.

### 3.5 Interaction & Motion

- Subtle, playful micro-interactions that match Zach’s fun and encouraging personality.  
- Examples:  
  - Slight, bouncy hover on project cards and buttons (spring‑like easing).  
  - Soft fade‑up/slide‑up animations as sections scroll into view.  
  - Simple, light hero interaction (e.g., gentle background motion or small cursor detail).  
- Motion should enhance clarity and delight without distracting from content.

### 3.6 Strict “Not Allowed” Constraints

To avoid the generic/AI-template look:

- NO dark, moody color schemes or dark mode toggles.  
- NO default blue/gray tech palettes without warmth.  
- NO overly clinical pure white backgrounds or pure black text.  
- NO generic hero text (e.g., “I build digital experiences”) with no personality.  
- NO ultra-symmetrical card grids with no visual hierarchy.  
- NO generic CTAs (“Learn more”, “Get started”) — CTAs must have personality.  
- NO overuse of stock illustrations or generic geometric icons.

---

## 4. Content & Architecture

### A. Hero Section

**Goal:** Immediately communicate who Zach is, what he does, and his energy.

- **Greeting:** Conversational (e.g., “Hey, I’m Zach. 👋”).  
- **Headline:**  
  - Current draft: “Two decades in sales. Three years in marketing. A lifelong builder.”  
  - Can be refined, but must reflect the long sales/marketing background + builder mindset.  
- **Subheadline:**  
  - “I'm an operational leader who uses modern AI to turn years of front-line business experience into functional, problem-solving tools.”  
- **Visuals:** Warm, candid photo of Zach (not a stiff corporate headshot).  
- **Call to Action (CTA):** Primary CTA with personality (e.g., “See what I’ve built”, “Check out my projects”).

### B. About / Story

**Narrative:**  
A transparent, authentic bio explaining the path from almost two decades on the sales floor into a self‑taught Marketing Director role at a multi‑location RV dealership, then into an AI‑empowered builder.

**Details to include:**

- ~18 years of loyalty with the current employer to show operational depth and staying power.  
- How Zach used front‑line experience to build better tools for teams.  
- Humanizing personal details that match the visual warmth: golf, cooking/smoking meat, woodworking, building little apps (like meal planners) for his 7‑ and 5‑year‑old kids.  
- Emphasis on being curious, empathetic, supportive, and eager to learn.

### C. Projects / What I’ve Built (Bento Grid)

**Presentation:**  
Showcased in an engaging bento-box layout with mixed card sizes.

**Format for each project:**  
- Problem  
- What Zach Built  
- Outcome  
- What He Learned

**Projects to include (initial list):**

1. *Gather* (Meal planning app in beta)  
2. *family-meal-notifier*  
3. *RV Finance Calculator on the go*  
4. *ForeCast Golf App*  
5. *Quarterback Mathgame*  
6. *RV-Sale Flyer Generator*  
7. *Thumbnail Generator*  
8. *QR Code Generator*

Focus on impact and learning, not just listing the tech stack.

### D. Marketing Media & Commercials

A visual gallery showcasing the creative side of the Marketing Director role.

- Embedded high‑quality commercials/ads.  
- Brief context for each: goal, role Zach played, impact on dealership brand or results.

### E. Operational Tools & Automations

Backend efficiencies, AI workflows, and internal tooling.

**Tools to include (initial list):**

- Analytics Monthly Emailer  
- Social Content Poster  
- Custom GPTs and internal assistants  

Each entry should briefly explain the business problem, the automation/tool Zach built, and the outcome.

### F. Currently Learning / Exploring

A visually prominent section to highlight active learning and a growth mindset.

**Content focus:**

- Exploring a Master of Science in Data Science and AI at DU.  
- Mastering n8n for backend automations.  
- Deep‑diving into Answer Engine Optimization (AEO).  
- This section should feel “alive” — easy to update as Zach’s focus evolves.

### G. Contact / Let’s Connect

**Vibe:** Friendly, low-friction, encouraging.

- **Copy:** “Got an idea or just want to jam on something? Reach out.”  
- **Action:** Simple form and/or `mailto:support@shawdesignlabs.com`.  
- Include links to LinkedIn, GitHub, and any relevant social profiles.

---

## 5. Implementation Phases (For AI Agent or Dev)

### Phase 1: Foundation & Theme Setup

- Initialize Next.js project with App Router.  
- Configure Tailwind strictly for the warm/light color palette; disable dark mode.  
- Set up global layout, typography, spacing scale, and base components.

### Phase 2: Hero & Navigation

- Build responsive navbar (light theme, minimal, sticky).  
- Build conversational Hero component with greeting, headline, subheadline, CTA, and warm visuals.  
- Implement subtle but performant background motion for Hero.

### Phase 3: Projects (Bento Grid)

- Build bento-style project grid with mixed card sizes and clear hierarchy.  
- Implement hover states with slight, bouncy motion.  
- Add case study detail views (modal or dedicated pages).

### Phase 4: Media & Automations

- Build the Marketing Media gallery with embedded videos and captions.  
- Build the Operational Tools & Automations section with structured cards.

### Phase 5: Story & Learning

- Implement the About / Story page/section with narrative content and personal photos.  
- Implement the “Currently Learning / Exploring” section in a way that’s easy to update (e.g., JSON or MDX data source).

### Phase 6: Polish & Launch

- Mobile responsiveness and accessibility pass (contrast, keyboard nav, alt text).  
- Implement scroll animations (fade-up/slide-up) in a performance‑friendly way.  
- Connect domain `zachshaw.com` via Vercel and perform final QA.
