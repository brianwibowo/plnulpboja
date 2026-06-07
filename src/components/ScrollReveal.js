"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Stop observing once transition has been triggered (run once)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the element is visible
        rootMargin: "0px 0px -80px 0px" // Trigger slightly before it fully enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isIntersecting
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-[0.98]"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
