import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionBand from "./SectionBand";

const APP_URL = "https://refract-dev.vercel.app";

const CTA = () => {
  return (
    <SectionBand className="text-center">
      <h2 className="text-section-title text-balance">
        Connect GitHub. Run your first scan.
      </h2>

      <p className="text-body mt-4 mx-auto max-w-[480px] text-ld-tertiary">
        No config files. No CI setup. Connect a repo, push code, and see every issue Refract finds.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a href={APP_URL}>Start free</a>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/product">See how it works</Link>
        </Button>
      </div>
    </SectionBand>
  );
};

export default CTA;