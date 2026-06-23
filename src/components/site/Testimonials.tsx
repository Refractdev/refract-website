import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionBand from "./SectionBand";

const quotes = [
  {
    text: "You'll probably ship cleaner code, just because of the discipline that using Refract infuses on your workflow.",
    author: "Gabriel P.",
    role: "Staff Software Engineer, OpenAI",
    variant: "lavender" as const,
  },
  {
    text: "Our velocity is intense and Refract helps us catch structural debt before it compounds.",
    author: "Nik K.",
    role: "Head of Engineering, Ramp",
    variant: "lime" as const,
  },
  {
    text: "Refract is excellent, just excellent. It keeps agents and humans aligned on what actually matters in the codebase.",
    author: "Kaz N.",
    role: "VP Engineering, Opendoor",
    variant: "lavender" as const,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, reducedMotion]);

  const current = quotes[index];

  return (
    <SectionBand>
      <p className="mb-8 text-center text-section-subtitle text-balance">
        Built for teams shipping code with{" "}
        <strong className="font-[510] text-ld-on-surface">humans and agents</strong>.
      </p>

      <div
        className="testimonial-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <blockquote className={`testimonial-card testimonial-card--${current.variant}`}>
          <p className="testimonial-card__quote">{current.text}</p>
          <footer className="testimonial-card__attribution">
            <p className="testimonial-card__name">{current.author}</p>
            <p className="testimonial-card__role">{current.role}</p>
          </footer>
        </blockquote>

        <div className="testimonial-carousel__dots">
          {quotes.map((q, i) => (
            <button
              key={q.author}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              className={`testimonial-carousel__dot ${i === index ? "testimonial-carousel__dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-body-md text-ld-tertiary">
          Early access opening soon.
        </p>
        <Link
          to="/contact"
          className="shrink-0 text-label-sm text-ld-muted transition-colors hover:text-ld-on-surface"
        >
          Join the waitlist →
        </Link>
      </div>
    </SectionBand>
  );
};

export default Testimonials;
