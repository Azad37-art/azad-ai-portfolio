import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: "chat" as const,
    title: "AI Chatbots & RAG Systems",
    description: "Custom AI assistants that answer questions accurately using approved documents, website content, and business knowledge.",
    features: ["Document Q&A", "Website knowledge chatbots", "Source-based answers", "Conversation context", "Human handoff"],
  },
  {
    icon: "workflow" as const,
    title: "AI Agents & Workflow Automation",
    description: "Agentic systems that use tools, APIs, and structured workflows to retrieve information and complete controlled tasks.",
    features: ["Tool and function calling", "LangGraph workflows", "Lead collection", "Data processing", "Slack, email, and API actions"],
  },
  {
    icon: "shop" as const,
    title: "Shopify AI Shopping Assistants",
    description: "Conversational shopping experiences that help customers discover, compare, and choose relevant products.",
    features: ["Product recommendations", "Product comparison", "Policy and FAQ answers", "Cart guidance", "Shopify catalog integration"],
  },
  {
    icon: "code" as const,
    title: "Python & API Integrations",
    description: "Reliable Python solutions that connect business platforms, process data, and automate repetitive operations.",
    features: ["FastAPI backends", "Third-party APIs", "Data extraction", "Automation scripts", "Custom business tools"],
  },
];

export const metadata = {
  title: "Services",
  description: "AI chatbot, RAG, AI-agent, Shopify-assistant, Python, and API-integration services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pageHero section">
        <div className="container narrowContainer">
          <SectionHeading
            eyebrow="WHAT I OFFER"
            title="AI Solutions That Solve Real Business Problems"
            description="I build focused AI systems that help customers find answers, help teams work with information, and automate practical workflows."
          />
        </div>
      </section>

      <section className="section pageSectionTop">
        <div className="container serviceGrid serviceGridDetailed">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaCard">
          <div>
            <span className="eyebrow">NOT SURE WHICH SERVICE FITS?</span>
            <h2>Start With the Business Problem</h2>
            <p>Share the current process or customer problem, and I will help you identify a realistic first solution.</p>
          </div>
          <Link href="/contact" className="button">Discuss Your Project</Link>
        </div>
      </section>
    </>
  );
}
