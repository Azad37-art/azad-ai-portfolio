import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://azad-ai-portfolio.vercel.app"),
  title: {
    default: `${siteConfig.name} | AI Chatbot & Agent Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AI chatbots, RAG systems, Shopify shopping assistants, AI agents, and Python automation for practical business problems.",
  openGraph: {
    title: `${siteConfig.name} | AI Chatbot & Agent Developer`,
    description:
      "Explore AI chatbot, RAG, Shopify assistant, and agentic automation projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
