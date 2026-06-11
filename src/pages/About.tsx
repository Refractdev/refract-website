import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const About = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", color: "var(--color-ink)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main className="flex-1 py-16 px-6">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 className="text-display-lg" style={{ color: "var(--color-ink)", marginBottom: 48 }}>About Refract</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 12 }}>What We Are Building</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Refract is a desktop application that bridges the gap between AI-generated code and production-ready software. We believe that AI coding tools like Lovable, Bolt, and Cursor have democratized software development, enabling anyone to build applications. But there is a catch: AI-generated code is often messy, unstructured, and difficult to maintain at scale.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                We are building the missing piece: a tool that takes that raw AI output and transforms it into clean, maintainable, professional-grade code that you can confidently deploy and scale.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 12 }}>The Problem</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                AI coding assistants have changed everything. A solo founder can now build a complete SaaS product in a weekend. A developer can prototype features in hours instead of days. But this speed comes with hidden costs.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                AI-generated code tends to be verbose, lacks consistent patterns, and accumulates technical debt rapidly. Types are often loose or missing. Error handling is inconsistent. The architecture that emerges is accidental rather than intentional. When you try to scale, add features, or onboard team members, you hit a wall. The code that got you to launch becomes the code that prevents you from growing.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>The Solution</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Refract analyzes your codebase, identifies patterns and anti-patterns, and applies intelligent transformations to improve code quality. We clean up types, standardize error handling, refactor messy functions, generate missing documentation, and provide a clear visualization of your project structure through CodeMap.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                Everything happens through a review system that keeps you in control. You see exactly what changes are proposed, understand why they are recommended, and decide what to apply. We are not replacing your judgment; we are amplifying it.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Our Vision</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                We envision a future where anyone can build software with AI without creating technical debt. A world where the speed of AI-assisted development is matched by the quality and maintainability of the output. Where solo founders, indie hackers, and small teams can ship production-grade code from day one.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                The AI revolution in software development is just beginning. We are here to make sure that revolution produces codebases that last.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Our Philosophy</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                We believe in clean code not as an aesthetic preference, but as a practical necessity. Code is read more often than it is written. It is maintained by teams, not individuals. It evolves over years, not weeks. These realities shape everything we build.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                We believe in clarity over cleverness. In explicit over implicit. In long-term thinking over short-term speed. We build tools that respect these principles while acknowledging the reality of modern development: AI is here to stay, and we need workflows that harness its power responsibly.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Who We Serve</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Refract is built for developers who ship with AI but care about quality. Indie hackers building their next product. Startup founders moving fast without breaking things. Engineering teams integrating AI tools into their workflow. Anyone who has looked at AI-generated code and thought: "This works, but it could be so much better."
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>The Story</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Refract started with a simple observation: AI coding tools were getting incredibly good at generating functional code, but the quality of that code was not keeping pace. I was building projects with these tools, shipping features faster than ever, but finding myself stuck when it came time to refactor, extend, or collaborate.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                The solution was not to abandon AI, but to complete the workflow. To build the tool that takes AI output and makes it production-ready. Something that understands modern frameworks, enforces best practices, and gives developers control over the transformation process.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginTop: 12 }}>
                We are a small team with strong opinions about code quality and a deep respect for the developers who use our tools. We ship fast, listen to our users, and believe that the best software comes from solving real problems for real people.
              </p>
            </section>

            <section style={{ paddingTop: 24, borderTop: "1px solid var(--color-hairline)" }}>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                If you are building with AI and care about the quality of your codebase, we are building Refract for you. Get in touch at{" "}
                <a href="mailto:refractcode@gmail.com" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  refractcode@gmail.com
                </a>{" "}
                or follow our progress as we build the future of AI-assisted software development.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
