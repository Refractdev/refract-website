import SectionBand from "./SectionBand";

const quotes = [
  {
    text: "You'll probably ship cleaner code, just because of the discipline that using Refract infuses on your workflow.",
    author: "Gabriel P.",
    role: "Staff Software Engineer, OpenAI",
  },
  {
    text: "Our velocity is intense and Refract helps us catch structural debt before it compounds.",
    author: "Nik K.",
    role: "Head of Engineering, Ramp",
  },
  {
    text: "Refract is excellent, just excellent. It keeps agents and humans aligned on what actually matters in the codebase.",
    author: "Kaz N.",
    role: "VP Engineering, Opendoor",
  },
];

const Testimonials = () => {
  return (
    <SectionBand>
      <p className="mb-12 text-center text-section-subtitle text-balance">
        Built for teams shipping code with{" "}
        <strong className="font-[510] text-ld-on-surface">humans and agents</strong>.
      </p>

      {/* Tradespad-style marquee */}
      <div className="tp-marquee">
        <div className="tp-marquee__track">
          {[...quotes, ...quotes].map((q, i) => (
            <figure key={`${q.author}-${i}`} className="tp-review-card">
              <p className="tp-review-card__quote">"{q.text}"</p>
              <figcaption>
                <p className="tp-review-card__name">{q.author}</p>
                <p className="tp-review-card__role">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <p className="text-body-md text-ld-tertiary">
          Early access opening soon.
        </p>
        <a
          href="/contact"
          className="shrink-0 text-label-sm text-ld-muted transition-colors hover:text-ld-on-surface"
        >
          Join the waitlist →
        </a>
      </div>
    </SectionBand>
  );
};

export default Testimonials;
