const quotes = [
  {
    text: "I truly believe that every team using AI coding tools should use Refract, it's a need if you're shipping code, and this one is perfect",
    author: "B",
    name: "Bastien",
    role: "Refract BETA user",
  },
  {
    text: "I used to manually review every AI-generated PR, but this is genuinely a game changer, definitely recommended",
    author: "J",
    name: "Juan D.",
    role: "Refract BETA user",
  },
  {
    text: "My favourite thing about Refract is the design, everything is clear, not confusing like other code review tools",
    author: "N",
    name: "Nico R.",
    role: "Refract BETA user",
  },
  {
    text: "I love that I can keep all my repositories together and check my code quality in a quick view",
    author: "J",
    name: "Jonah",
    role: "Refract BETA user",
  },
  {
    text: "This BETA is literally better than other fully launched tools, I can't imagine when they release the full version",
    author: "A",
    name: "Aarav S.",
    role: "Refract BETA user",
  },
  {
    text: "Keeping my repos, scans, PRs and everything in the same place made my team's workflow clearer",
    author: "A",
    name: "Aisha",
    role: "Refract BETA user",
  },
];

const Testimonials = () => {
  return (
    <section className="tp-feature-section">
      <div className="mx-auto max-w-[1300px] px-5 md:px-6">
        <p className="tp-section-label text-center">Reviews</p>
        <h2 className="text-tp-heading text-balance mt-1 text-center max-w-[640px] mx-auto">
          What other developers say about Refract
        </h2>
      </div>

      <div className="tp-marquee mt-12">
        <div className="tp-marquee__track">
          {[...quotes, ...quotes].map((q, i) => (
            <figure key={`${q.name}-${i}`} className="tp-review-card">
              <p className="tp-review-card__quote">"{q.text}"</p>
              <figcaption>
                <p className="tp-review-card__name">{q.name}</p>
                <p className="tp-review-card__role">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
