export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Media", href: "#media" },
  { label: "Tools", href: "#tools" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  email: "mailto:support@shawdesignlabs.com",
  linkedin: "https://linkedin.com/in/zachshaw",
  github: "https://github.com/zachshaw",
} as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  projects: "projects",
  media: "media",
  tools: "tools",
  learning: "learning",
  contact: "contact",
} as const;
