import { Button } from "@/components/ui/button";

const APP_URL = "https://refract-dev.vercel.app";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 xl:py-28">
      <div className="relative z-10 mx-auto max-w-[1300px] px-5 md:px-6 text-center">
        <h2 className="text-tp-heading text-balance max-w-[640px] mx-auto">
          Every push without Refract is debt.
        </h2>

        <p className="text-tp-desc mt-4 mx-auto max-w-[520px]">
          Structural issues don't fix themselves between sprints. They compound. Refract starts catching them today.
        </p>

        <p className="text-body-sm mt-6 text-[#777777]">
          Free to start. One repo. Takes 5 minutes to connect.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={APP_URL}>Start for free</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={APP_URL}>No credit card required</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;