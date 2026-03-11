import { useEffect, useRef, ReactNode } from "react";

interface ScrollObserverProps {
  children: ReactNode;
  animation?: "section" | "text" | "zoom" | "parallax-track";
  stagger?: boolean;
  className?: string;
}

export default function ScrollObserver({
  children,
  animation = "section",
  stagger = false,
  className = "",
}: ScrollObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      data-animate={animation}
      data-animate-stagger={stagger ? "true" : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
