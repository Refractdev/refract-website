import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { AnimatedContainer } from "@/components/ui/animated-container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Integrations", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Help Center", href: "#" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
    <AnimatedContainer animateOnMount style={{ padding: 0 }}>
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="/">
          <Logo height={18} />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex lg:ml-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 py-1 text-sm font-medium tracking-[-0.04em] text-white/70 transition-colors hover:text-white"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden items-center lg:flex lg:ml-auto">
          <a
            href="/signup"
            className="flex min-h-[36px] items-center rounded-lg bg-white px-4 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu */}
        <div className="block lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center text-white/70">
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              className="w-[280px]"
              style={{ background: "#000", borderLeft: "1px solid #1a1b1c" }}
            >
              <SheetHeader>
                <SheetTitle style={{ color: "#fff" }}>
                  <a href="/" onClick={() => setOpen(false)}>
                    <Logo height={18} />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="my-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 py-2 text-sm font-medium tracking-[-0.04em] text-white/70 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
              <div className="flex flex-row pt-3">
                <a
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[36px] flex-1 items-center justify-center rounded-lg bg-white px-4 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
                >
                  Get Started
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </AnimatedContainer>
    </nav>
  );
};

export default Navbar;
