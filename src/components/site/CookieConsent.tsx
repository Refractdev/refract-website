import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="anim-fade-up fixed bottom-0 left-0 right-0 z-50 border-t border-ld-border bg-ld-neutral p-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
        <p className="text-body-sm text-ld-tertiary">
          This site uses cookies to improve your experience.{" "}
          <a href="/privacy" className="text-ld-on-surface underline">
            Learn more
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
