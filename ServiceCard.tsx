import Link from "next/link";
import { Icon, type IconName } from "@/components/Icons";

export function ServiceCard({
  icon,
  title,
  description,
  features,
  compact = false,
}: {
  icon: IconName;
  title: string;
  description: string;
  features?: string[];
  compact?: boolean;
}) {
  return (
    <article className={`serviceCard ${compact ? "serviceCardCompact" : ""}`}>
      <div className="iconBox"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features && (
        <ul className="featureList">
          {features.map((feature) => (
            <li key={feature}><Icon name="check" />{feature}</li>
          ))}
        </ul>
      )}
      <Link href="/contact" className="textLink">
        Discuss this service <Icon name="arrow" />
      </Link>
    </article>
  );
}
