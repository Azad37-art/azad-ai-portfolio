import { ContactButtons } from "@/components/ContactButtons";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description: "Contact Azad Sultan about AI chatbots, RAG systems, AI agents, Shopify assistants, and Python automation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pageHero section">
        <div className="container narrowContainer">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let’s Discuss Your AI Project"
            description="Have a project idea, customer-support problem, document workflow, or Shopify use case? Send a message with the details."
          />
        </div>
      </section>

      <section className="section pageSectionTop">
        <div className="container contactGrid">
          <div className="contactPanel">
            <span className="eyebrow">DIRECT CONTACT</span>
            <h2>Choose the easiest way to connect</h2>
            <p>Use the buttons below to email me or open my WhatsApp, LinkedIn, and GitHub profiles directly.</p>
            <ContactButtons />
          </div>
          <div className="formPanel">
            <h2>Tell Me About Your Project</h2>
            <p>Include your website, current process, main problem, and the result you want.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
