import Changelog from "@/components/site/Changelog";

const ChangelogPage = () => {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1300px] px-5 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
            <div className="max-w-[680px]">
              <p className="tp-section-label">Changelog</p>
              <h1 className="text-tp-heading text-balance max-w-[720px]">What shipped this week.</h1>
              <p className="text-tp-desc mt-4">
                Proposals, fixes, security improvements — every change logged, dated, and explained. No fluff. See what's next on the{" "}
                <a href="/roadmap" className="text-white underline">
                  roadmap
                </a>
                .
              </p>
            </div>
            <div className="rounded-lg border border-[#1a1a1a] bg-[#0d0d0d] p-4">
              <p className="font-mono text-xs font-medium text-[#888888] mb-3">LATEST RELEASE</p>
              <p className="text-base font-medium text-white">Auto-PR generation</p>
              <p className="text-sm text-[#999999] mt-2">Safety gates, documented changes, and review-ready pull requests.</p>
            </div>
          </div>
        </div>
      </section>
      <Changelog />
    </>
  );
};

export default ChangelogPage;
