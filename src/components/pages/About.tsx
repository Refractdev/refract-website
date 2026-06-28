import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";

const About = () => {
  return (
    <PageShell label="Company" title="About Refract">
      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-headline-sm mb-3">What Refract Does</h2>
          <p className="text-body">
            Refract turns AI-generated code into production-ready codebases. It connects to your repo, scans every push, finds what Cursor, Windsurf, or Lovable left behind — structural debt, security gaps, missing tests — and proposes fixes as diffs. You approve. Refract opens the PR.
          </p>
        </section>

        <section>
          <h2 className="text-headline-sm mb-3">Why It Exists</h2>
          <p className="text-body">
            AI coding tools changed how fast teams can ship. But speed compounds differently. The features land, the codebase gets harder to change, and nobody refactors. Refract is the part of the workflow nobody built yet — the pipeline that makes AI-generated code shippable.
          </p>
        </section>

        <section>
          <h2 className="text-headline-sm mb-3">The Team</h2>
          <p className="text-body">
            Refract is built by engineers who spent years working on code quality, static analysis, and developer tools. We use AI coding tools every day. We felt the problem ourselves.
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