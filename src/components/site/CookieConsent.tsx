import { useState, useEffect } from "react";

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
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t p-4 anim-fade-up"
      style={{
        background: "var(--color-theme-bg)",
        borderColor: "var(--color-theme-border)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-theme-text-sec)", lineHeight: 1.5 }}>
          This site uses cookies to improve your experience.{" "}
          <a href="/privacy" className="underline transition-colors" style={{ color: "var(--color-theme-text)" }}>
            Learn more
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={decline}
            className="btn btn--ghost btn-sm"
            style={{ color: "var(--color-theme-text-sec)" }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn btn--primary btn-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
