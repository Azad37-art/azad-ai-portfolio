import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icons";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="projectHero section">
        <div className="container projectHeroGrid">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.overview}</p>
            <div className="tagRow projectTags">
              {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="heroActions">
              {project.videoId && (
                <a className="button" href={`#demo-${project.slug}`}>Watch Demo</a>
              )}
              <Link className="button buttonOutline" href="/contact">Discuss a Similar Project</Link>
            </div>
          </div>
          <div className="detailImageWrap">
            <Image src={project.image} alt={`${project.title} preview`} fill priority sizes="(max-width: 900px) 100vw, 50vw" className="projectImage" />
            {project.badge && <span className="projectBadge">{project.badge}</span>}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container caseStudyGrid">
          <article className="caseCard">
            <span className="eyebrow">THE PROBLEM</span>
            <h2>What needed improvement</h2>
            <p>{project.problem}</p>
          </article>
          <article className="caseCard">
            <span className="eyebrow">THE SOLUTION</span>
            <h2>How the system addresses it</h2>
            <p>{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container detailGrid">
          <div>
            <span className="eyebrow">KEY FEATURES</span>
            <h2>What the project demonstrates</h2>
          </div>
          <ul className="largeFeatureList">
            {project.features.map((feature) => <li key={feature}><Icon name="check" />{feature}</li>)}
          </ul>
        </div>
      </section>

      {project.videoId && (
        <section className="section altSection" id={`demo-${project.slug}`}>
          <div className="container narrowVideo">
            <div className="sectionHeading sectionHeading-center">
              <span className="eyebrow">PROJECT DEMO</span>
              <h2>See the workflow in action</h2>
            </div>
            <div className="videoEmbed">
              <iframe
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={`${project.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      <section className="section ctaSection">
        <div className="container ctaCard">
          <div>
            <span className="eyebrow">BUILD A CUSTOM VERSION</span>
            <h2>Need a Similar AI Solution?</h2>
            <p>Share your data, workflow, website, or store and we can discuss an appropriate first version.</p>
          </div>
          <Link href="/contact" className="button">Contact Me</Link>
        </div>
      </section>
    </>
  );
}
