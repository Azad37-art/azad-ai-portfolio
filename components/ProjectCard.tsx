import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="projectCard">
      <Link href={`/portfolio/${project.slug}`} className="projectImageWrap" aria-label={`View ${project.title}`}>
        <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 760px) 100vw, 33vw" className="projectImage" />
        {project.badge && <span className="projectBadge">{project.badge}</span>}
      </Link>
      <div className="projectCardBody">
        <span className="projectCategory">{project.category}</span>
        <h3><Link href={`/portfolio/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.shortDescription}</p>
        <div className="tagRow">
          {project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="projectActions">
          <Link href={`/portfolio/${project.slug}`} className="textLink">View case study <Icon name="arrow" /></Link>
          {project.videoId && (
            <a href={`https://www.youtube.com/watch?v=${project.videoId}`} target="_blank" rel="noreferrer" className="videoLink">
              Watch demo <Icon name="play" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
