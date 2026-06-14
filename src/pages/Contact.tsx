import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const Contact = () => {
  return (
    <main className="page-enter" style={{ minHeight: "100vh", backgroundColor: "var(--color-theme-bg)", color: "var(--color-theme-text)" }}>
      <Navbar />

      <div className="section" style={{ paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[680px] px-6">
          <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
            Contact
          </p>
          <h1 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            Get in touch.
          </h1>
          <p className="mt-4" style={{ fontSize: 15, color: "var(--color-theme-text-sec)", lineHeight: 1.6 }}>
            Have a question, feedback, or want to partner with us? We'd love to hear from you.
          </p>

          <div
            className="anim-fade-up mt-10 rounded-md p-6"
            style={{
              background: "var(--color-theme-card)",
              border: "1px solid var(--color-theme-border)",
            }}
          >
            <p className="mb-2 text-sm" style={{ color: "var(--color-theme-text-sec)" }}>
              Email us at
            </p>
            <a
              href="mailto:refractcode@gmail.com"
              style={{ fontSize: 18, fontWeight: 500, color: "var(--color-theme-text)", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(237,236,236,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-theme-text)")}
            >
              refractcode@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
