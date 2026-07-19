import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio",
  description: "AI agent, RAG chatbot, document Q&A, website chatbot, and Shopify shopping-assistant projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pageHero section">
        <div className="container narrowContainer">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="AI Projects Built for Practical Business Problems"
            description="Explore working demos and case studies covering AI agents, RAG systems, document chat, website assistants, and Shopify shopping experiences."
          />
          <div className="filterPills" aria-label="Project categories">
            <span className="active">All Projects</span>
            <span>AI Agents</span>
            <span>RAG Chatbots</span>
            <span>Shopify AI</span>
            <span>Automation</span>
          </div>
        </div>
      </section>

      <section className="section pageSectionTop">
        <div className="container projectGrid projectGridWide">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>
    </>
  );
}
