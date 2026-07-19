import Link from "next/link";
import { HeroSkillAnimation } from "@/components/HeroSkillAnimation";
import { Icon } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/data/projects";
import { technologies } from "@/data/site";

const skills = [
  { icon: "brain" as const, title: "Agentic AI", text: "Agents that reason, use tools, and complete controlled multi-step work." },
  { icon: "chat" as const, title: "Generative AI", text: "Useful conversational experiences built around real business needs." },
  { icon: "database" as const, title: "RAG Systems", text: "Grounded answers from documents, websites, and knowledge sources." },
  { icon: "workflow" as const, title: "AI Automation", text: "Connected workflows that reduce repetitive manual tasks." },
  { icon: "shop" as const, title: "Shopify AI", text: "Shopping assistants for product discovery, FAQs, and buying guidance." },
  { icon: "code" as const, title: "API Integrations", text: "Python backends that connect data, tools, and business platforms." },
];

const services = [
  {
    icon: "chat" as const,
    title: "AI Chatbots & RAG",
    description: "Custom assistants that answer questions using your documents, website content, and approved business knowledge.",
  },
  {
    icon: "workflow" as const,
    title: "AI Agents & Automation",
    description: "Agents that use tools, APIs, and structured workflows to retrieve information and perform actions.",
  },
  {
    icon: "shop" as const,
    title: "Shopify AI Assistants",
    description: "Shopping assistants that guide product discovery, answer policy questions, and support the customer journey.",
  },
  {
    icon: "code" as const,
    title: "Python & API Solutions",
    description: "FastAPI backends, third-party integrations, data processing, and custom workflow tools.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container heroGrid">
          <div className="heroContent">
            <span className="eyebrow">AI CHATBOT & AGENT DEVELOPER</span>
            <h1>I Build AI Assistants That <span>Answer, Recommend</span> and Automate</h1>
            <p className="heroText">
              I develop AI chatbots, RAG systems, Shopify shopping assistants, and AI agents that help businesses answer questions, work with their data, and automate repetitive tasks.
            </p>
            <div className="heroActions">
              <Link href="/portfolio" className="button">View My Work</Link>
              <Link href="/contact" className="button buttonOutline">Discuss Your Project</Link>
            </div>
            <div className="techPills" aria-label="Technologies">
              {technologies.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </div>
          <HeroSkillAnimation />
        </div>
      </section>

      <section className="section skillsSection">
        <div className="container">
          <SectionHeading
            eyebrow="MY SKILLS"
            title="Building Practical AI Solutions, Not Just Basic Chatbots"
            description="I combine AI reasoning, retrieval, tools, APIs, and product-focused interfaces to create systems that are useful in real workflows."
          />
          <div className="skillGrid">
            {skills.map((skill) => (
              <article className="skillCard" key={skill.title}>
                <span className="iconBox"><Icon name={skill.icon} /></span>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="SERVICES"
            title="AI Services Built Around Business Needs"
            description="Focused development services for customer support, knowledge access, product discovery, and workflow automation."
          />
          <div className="serviceGrid">
            {services.map((service) => <ServiceCard key={service.title} {...service} compact />)}
          </div>
          <div className="centerAction"><Link href="/services" className="button buttonOutline">Explore All Services</Link></div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <SectionHeading
            eyebrow="FEATURED WORK"
            title="Projects That Show How I Build"
            description="See working demonstrations, technical choices, and the business problems behind each solution."
          />
          <div className="projectGrid">
            {projects.slice(0, 3).map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
          <div className="centerAction"><Link href="/portfolio" className="button">View Complete Portfolio</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="PROCESS" title="A Clear Path From Idea to Working Solution" />
          <div className="processGrid">
            {[
              ["01", "Understand", "Clarify the business problem, users, data, and success criteria."],
              ["02", "Design", "Plan the conversation, workflow, integrations, and user experience."],
              ["03", "Build", "Develop the AI logic, backend, interface, and required connections."],
              ["04", "Test & Deliver", "Evaluate answers, edge cases, safety, usability, and deployment."],
            ].map(([number, title, text]) => (
              <article className="processCard" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaCard">
          <div>
            <span className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</span>
            <h2>Have an AI Project in Mind?</h2>
            <p>Tell me about the questions, data, or repetitive workflow you want to improve.</p>
          </div>
          <Link href="/contact" className="button">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}
