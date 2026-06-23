import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionBand from "./SectionBand";

const APP_URL = "https://refract-dev.vercel.app";

const CTA = () => {
  return (
    <SectionBand className="text-center">
      <h2 className="text-section-title text-balance">
        Built for the future. Available today.
      </h2>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a href={APP_URL}>Get started</a>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/contact">Contact sales</Link>
        </Button>
        <Button variant="secondary" asChild>
          <a href={APP_URL}>Open app</a>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/docs">Download</Link>
        </Button>
      </div>
    </SectionBand>
  );
};

export default CTA;
