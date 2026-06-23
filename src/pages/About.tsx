import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";

const About = () => {
  return (
    <PageShell label="Company" title="About Refract">
      <div className="flex flex-col gap-10">
        <section>
          <h2 className="text-headline-sm mb-3">What We Are Building</h2>
          <p className="text-body">
            Refract is a desktop application that bridges the gap between AI-generated code and production-ready software. We believe that AI coding tools like Lovable, Bolt, and Cursor have democratized software development, enabling anyone to build applications. But there is a catch: AI-generated code is often messy, unstructured, and difficult to maintain at scale.
          </p>
          <p className="text-body mt-3">
            We are building the missing piece: a tool that takes that raw AI output and transforms it into clean, maintainable, professional-grade code that you can confidently deploy and scale.
          </p>
        </section>

        <section>
          <h2 className="text-headline-sm mb-3">The Problem</h2>
          <p className="text-body">
            AI coding assistants have changed everything. A solo founder can now build a complete SaaS product in a weekend. A developer can prototype features in hours instead of days. But this speed comes with hidden costs.
          </p>
          <p className="text-body mt-3">
            AI-generated code tends to be verbose, lacks consistent patterns, and accumulates technical debt rapidly. Types are often loose or missing. Error handling is inconsistent. The architecture that emerges is accidental rather than intentional.
          </p>
        </section>

        <section>
          <h2 className="text-headline-sm mb-3">The Solution</h2>
          <p className="text-body">
            Refract analyzes your codebase, identifies patterns and anti-patterns, and applies intelligent transformations to improve code quality. Everything happens through a review system that keeps you in control.
          </p>
        </section>

        <section className="border-t border-ld-border pt-6">
          <p className="text-body">
            Get in touch at{" "}
            <a href="mailto:refractcode@gmail.com" className="link-accent">
              refractcode@gmail.com
            </a>
          </p>
        </section>
      </div>
    </PageShell>
  );
};

export default About;
