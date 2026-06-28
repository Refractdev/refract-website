import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ld-neutral p-6 text-center">
      <p className="text-caption mb-4 text-ld-muted">404</p>
      <h1 className="text-section-title mb-3">This page doesn't exist.</h1>
      <p className="text-body mb-10">Your repo might have drifted too.</p>
      <Button asChild>
        <a href="/">Back to home</a>
      </Button>
    </div>
  );
};

export default NotFound;