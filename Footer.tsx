import Link from "next/link";
import { Icon } from "@/components/Icons";
import { navigation, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Link href="/" className="brand footerBrand">
            <span className="brandMark"><Icon name="brain" /></span>
            <span>{siteConfig.name}</span>
          </Link>
          <p>
            AI chatbots, RAG systems, Shopify shopping assistants, and agentic workflows built for practical business problems.
          </p>
        </div>
        <div>
          <h3>Pages</h3>
          <div className="footerLinks">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3>Connect</h3>
          <div className="footerLinks">
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
