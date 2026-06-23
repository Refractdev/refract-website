import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";

const Contact = () => {
  return (
    <PageShell
      label="Contact"
      title="Get in touch."
      description="Have a question, feedback, or want to partner with us? We'd love to hear from you."
    >
      <Card className="p-6">
        <p className="text-body-sm mb-2 text-ld-muted">Email us at</p>
        <a
          href="mailto:refractcode@gmail.com"
          className="text-headline-sm transition-opacity hover:opacity-80"
        >
          refractcode@gmail.com
        </a>
      </Card>
    </PageShell>
  );
};

export default Contact;
