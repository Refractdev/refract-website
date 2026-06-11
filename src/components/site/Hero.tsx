import { AnimatedContainer } from "@/components/ui/animated-container";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-stretch pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-20 lg:pb-24 md:items-center"
    >
      <AnimatedContainer
        className="mx-auto w-full max-w-[1300px] px-5 text-left md:px-6 md:text-center"
      >
        <h1
          style={{
            fontSize: "clamp(24px, 7vw, 34px)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.06em",
            color: "#fff",
          }}
        >
          Transform AI-generated code into<br />
          <span style={{ fontWeight: 500 }}>production-ready</span> software
        </h1>

        <p
          style={{
            marginTop: 16,
            fontSize: "clamp(13px, 2.85vw, 15px)",
            color: "#999",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            maxWidth: 700,
          }}
        >
          AST-powered analysis that finds structural issues and generates clean, documented pull requests.<br />
          The tool we wish we had for AI code, so we built it.
        </p>

        <div
          className="mt-6 flex items-center justify-start gap-3"
        >
          <a
            href="/signup"
            className="rounded-lg bg-white px-5 py-2 text-base font-semibold text-black transition hover:bg-gray-200 active:bg-gray-300"
          >
            Get Started
          </a>
        </div>
      </AnimatedContainer>

      <div
        className="relative mx-auto mt-16 w-full max-w-[1300px] overflow-hidden rounded-xl md:mt-20 lg:mt-24"
      >
        <div className="w-full">
          <div className="relative w-full">
            <img
              src="/refract home screen.png"
              alt="Refract dashboard"
              className="block h-auto w-full"
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[40%] bg-gradient-to-t from-black to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
