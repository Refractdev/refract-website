import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const Privacy = () => {
  return (
    <div className="page-enter" style={{ minHeight: "100vh", backgroundColor: "var(--surface-base)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>Last Updated: June 10, 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>1. Introduction</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                This Privacy Policy explains how Refract ("Refract", "we", "our", or "us") collects, uses, stores, and protects your information when you use our services.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                By using Refract, you acknowledge the practices described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>2. Information We Collect</h2>

              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, marginTop: 20 }}>Account Information</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                When you create an account, we may collect:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Name</li>
                <li>Email address</li>
                <li>Authentication information</li>
              </ul>

              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, marginTop: 20 }}>Code and Project Data</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                To provide our services, we may process:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Source code files</li>
                <li>Project structures</li>
                <li>Repository metadata</li>
                <li>Generated reports and recommendations</li>
              </ul>

              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, marginTop: 20 }}>Usage Analytics</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                We collect product usage information through PostHog, including events such as:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>analysis_started</li>
                <li>analysis_completed</li>
                <li>pr_created</li>
                <li>feature usage activity</li>
                <li>subscription-related events</li>
              </ul>

              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, marginTop: 20 }}>Technical Information</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                We may collect technical metadata, including:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Timestamps</li>
                <li>Log data</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>3. How We Use Information</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
                We use collected information to:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6 }}>
                <li>Deliver code analysis and reporting services;</li>
                <li>Generate recommendations and pull requests;</li>
                <li>Improve Refract's algorithms, heuristics, and product experience;</li>
                <li>Maintain security and prevent abuse;</li>
                <li>Communicate important account, billing, and service-related information;</li>
                <li>Produce aggregated analytics and usage insights.</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                We do not send marketing communications without your consent or opt-in where required.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>4. Third-Party Service Providers</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
                We rely on trusted third-party providers to operate the Service.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 8 }}>
                <strong style={{ color: "var(--text-primary)" }}>Supabase</strong> — Used for authentication, database storage, and user management.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 8 }}>
                <strong style={{ color: "var(--text-primary)" }}>Lemon Squeezy</strong> — Used for subscription billing and payment processing. Payment information is processed directly by Lemon Squeezy. Refract does not store or have access to your full payment card details.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 8 }}>
                <strong style={{ color: "var(--text-primary)" }}>PostHog</strong> — Used for product analytics, usage measurement, and feature improvement.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 8 }}>
                <strong style={{ color: "var(--text-primary)" }}>Vercel</strong> — Used for hosting, infrastructure, and edge functions and deployment services.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                We do not sell personal information to third parties.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>5. Data Retention</h2>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, marginTop: 12 }}>Code and Project Data</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Submitted code and project data are retained only as long as necessary to provide the Service. Unless otherwise required by law, code submissions are deleted within thirty (30) days after subscription termination or sooner upon request.
              </p>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, marginTop: 16 }}>Account Data</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Account information is retained while your account remains active and for a reasonable period thereafter as necessary to comply with legal, security, and operational requirements.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>6. Your Rights</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
                Depending on your jurisdiction, you may have rights including:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6 }}>
                <li>Accessing your personal information;</li>
                <li>Correcting inaccurate information;</li>
                <li>Requesting deletion of your information;</li>
                <li>Restricting certain processing activities;</li>
                <li>Exporting your data;</li>
                <li>Objecting to certain uses of your information.</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                Where available, data export functionality can be accessed through account settings. Privacy-related requests may be submitted to:{" "}
                <a href="mailto:refractcode@gmail.com" style={{ color: "var(--text-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  refractcode@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>7. Cookies and Analytics</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Refract uses cookies and similar technologies necessary for operation of the Service. These include functional cookies required for authentication and platform functionality, and analytics cookies provided by PostHog for product improvement. We do not use third-party advertising trackers.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>8. Security</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                We implement reasonable technical and organizational measures to protect user information. These measures include TLS encryption for data in transit, encryption and security controls provided by Supabase for data at rest, restricted internal access to sensitive data, and monitoring and security practices designed to prevent unauthorized access. No system can guarantee absolute security, and users acknowledge that internet-based services carry inherent risks.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>9. International Data Transfers</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Your information may be processed and stored in countries where our service providers operate. By using Refract, you acknowledge that information may be transferred internationally and handled in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>10. Changes to This Privacy Policy</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                We may update this Privacy Policy periodically. Material changes will be communicated through the Service or by email when appropriate. Continued use of Refract after changes become effective constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>11. Contact</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                For privacy-related inquiries, requests, or concerns, contact:{" "}
                <a href="mailto:privacy@refract.dev" style={{ color: "var(--text-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  privacy@refract.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
