"use client";

import { useEffect, useRef, useState } from "react";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tinted?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  tinted = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`
        w-full py-20 md:py-28
        ${tinted ? "bg-warm-tint" : "bg-warm-white"}
        ${className}
      `}
    >
      <div
        className={`
          mx-auto max-w-[1200px] px-6 md:px-10
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {children}
      </div>
    </section>
  );
}
