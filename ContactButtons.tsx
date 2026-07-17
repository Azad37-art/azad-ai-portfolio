import { Icon, type IconName } from "@/components/Icons";
import { siteConfig } from "@/data/site";

const contacts: Array<{
  label: string;
  value: string;
  href: string;
  icon: IconName;
  external?: boolean;
  action: string;
}> = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
    action: "Send email",
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: "phone",
    action: "Call",
  },
  {
    label: "WhatsApp",
    value: "Start a direct conversation",
    href: siteConfig.whatsapp,
    icon: "whatsapp",
    external: true,
    action: "Open WhatsApp",
  },
  {
    label: "LinkedIn",
    value: "View professional profile",
    href: siteConfig.linkedin,
    icon: "linkedin",
    external: true,
    action: "Open LinkedIn",
  },
  {
    label: "GitHub",
    value: "Explore projects and code",
    href: siteConfig.github,
    icon: "github",
    external: true,
    action: "Open GitHub",
  },
];

export function ContactButtons() {
  return (
    <div className="contactButtons">
      {contacts.map((contact) => (
        <div className="contactRow" key={contact.label}>
          <div className="contactIdentity">
            <span className="contactIcon"><Icon name={contact.icon} /></span>
            <div>
              <strong>{contact.label}</strong>
              <span>{contact.value}</span>
            </div>
          </div>
          <a
            className="button buttonGhost buttonTiny"
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noreferrer" : undefined}
          >
            {contact.action}
          </a>
        </div>
      ))}
      <div className="contactRow contactLocation">
        <div className="contactIdentity">
          <span className="contactIcon"><Icon name="location" /></span>
          <div>
            <strong>Location</strong>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
