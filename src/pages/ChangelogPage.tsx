import Changelog from "@/components/site/Changelog";
import SectionBand from "@/components/site/SectionBand";

const ChangelogPage = () => {
  return (
    <>
      <SectionBand className="!border-t-0 pb-16 pt-36">
        <div className="grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
        <div className="max-w-[680px]">
          <p className="section-label">Changelog</p>
          <h1 className="text-hero max-w-[720px] text-balance">What we ship.</h1>
          <p className="text-body mt-4">
            Product updates, new detectors, and platform improvements. See what&apos;s live and what&apos;s next on the{" "}
            <a href="/roadmap" className="link-accent">
              roadmap
            </a>
            .
          </p>
        </div>
          <div className="rounded-lg border border-ld-border bg-ld-surface p-4">
            <p className="text-mono-label mb-3">LATEST RELEASE</p>
            <p className="text-headline-sm">Auto-PR generation</p>
            <p className="text-body-sm mt-2">Safety gates, documented changes, and review-ready pull requests.</p>
          </div>
        </div>
      </SectionBand>
      <Changelog />
    </>
  );
};

export default ChangelogPage;
