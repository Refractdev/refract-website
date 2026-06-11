import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const Terms = () => {
  return (
    <div className="page-enter" style={{ minHeight: "100vh", backgroundColor: "var(--surface-base)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>Last Updated: June 10, 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>1. Introduction</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Welcome to Refract ("Refract", "we", "our", or "us"). Refract is a software-as-a-service (SaaS) platform that analyzes AI-generated code and provides code quality reports, refactoring recommendations, architectural insights, and automated pull request generation.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                By accessing or using Refract, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>2. Eligibility and Accounts</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                To use Refract, you must be at least 18 years old or have the consent of a parent or legal guardian.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                You are responsible for:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Maintaining the confidentiality of your account credentials.</li>
                <li>All activities that occur under your account.</li>
                <li>Ensuring the information associated with your account remains accurate and up to date.</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                You agree not to:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Use the Service for any unlawful purpose.</li>
                <li>Attempt to reverse engineer, decompile, or otherwise extract the source code of the platform.</li>
                <li>Interfere with the operation or security of the Service.</li>
                <li>Use automated tools, bots, crawlers, or scraping techniques to access the Service without authorization.</li>
                <li>Circumvent usage limits, subscription restrictions, or security measures.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>3. Subscription Plans and Payments</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Refract offers both free and paid subscription plans.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                Current paid plans include:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li><strong style={{ color: "var(--text-primary)" }}>Pro Plan</strong> — USD $20 per month</li>
                <li><strong style={{ color: "var(--text-primary)" }}>Team Plan</strong> — USD $49 per month</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                Payments are processed through Lemon Squeezy and may be made using supported payment methods, including credit cards and PayPal.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                Subscriptions renew automatically at the end of each billing cycle unless canceled before renewal.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                You may cancel your subscription at any time through your account dashboard. Cancellation will prevent future billing but does not entitle you to a partial refund for the current billing period unless required by applicable law.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                We reserve the right to modify pricing, features, or subscription offerings with reasonable notice.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>4. Ownership of Code and Content</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                You retain all rights, title, and ownership of any source code, repositories, files, documentation, or other content you upload or submit to Refract.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                By submitting code to the Service, you grant Refract a limited, non-exclusive, temporary license solely for the purpose of:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Processing your submissions;</li>
                <li>Performing code analysis;</li>
                <li>Generating reports, recommendations, and pull requests;</li>
                <li>Operating and improving the functionality of the Service.</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                Refract does not claim ownership of your code or intellectual property.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>5. Service Availability</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                The Service is provided on an "as available" basis. Free-tier users receive no guaranteed service level agreement (SLA).
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                For Pro and Team subscribers, Refract will make commercially reasonable efforts to maintain approximately 99% service availability. However, no specific uptime level is guaranteed and temporary interruptions may occur due to maintenance, upgrades, third-party outages, or circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>6. Disclaimer and Limitation of Liability</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Refract provides automated analysis and recommendations generated through software systems and artificial intelligence technologies.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                We do not guarantee that:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Reports are error-free;</li>
                <li>Recommendations are correct in every situation;</li>
                <li>Generated pull requests are suitable for production environments;</li>
                <li>The Service will identify every bug, security vulnerability, performance issue, or architectural concern.</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                You are solely responsible for reviewing, testing, and validating any recommendations before applying them.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                To the maximum extent permitted by law, Refract and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 8 }}>
                Our total liability for any claim related to the Service shall not exceed the amount paid by you to Refract during the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>7. Suspension and Termination</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                We reserve the right to suspend or terminate accounts that:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <li>Violate these Terms;</li>
                <li>Abuse the platform;</li>
                <li>Present security risks;</li>
                <li>Engage in fraudulent, illegal, or harmful activities.</li>
              </ul>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>
                You may terminate your account or subscription at any time through your dashboard settings. Upon termination, access to the Service may be revoked and data may be deleted according to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>8. Changes to These Terms</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                We may update these Terms from time to time. When material changes are made, we will provide notice through the Service or by email. Continued use of the Service after such changes become effective constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>9. Contact</h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Questions regarding these Terms may be directed to:{" "}
                <a href="mailto:legal@refract.dev" style={{ color: "var(--text-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  legal@refract.dev
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

export default Terms;
