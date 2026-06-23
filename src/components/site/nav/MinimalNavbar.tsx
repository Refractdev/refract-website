import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Logo } from "../Logo";

const MinimalNavbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-ld-border bg-ld-surface">
      <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-label-md text-ld-muted transition-colors hover:text-ld-on-surface">
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <Link to="/">
          <Logo height={14} />
        </Link>
        <div className="w-24" />
      </div>
    </header>
  );
};

export default MinimalNavbar;
