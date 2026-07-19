"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formId || formId === "your_formspree_form_id") {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formGrid">
        <label>
          Full name
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
        <label>
          Company / website
          <input name="company" type="text" placeholder="company.com" />
        </label>
        <label>
          Service needed
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>AI Chatbot or RAG</option>
            <option>AI Agent or Automation</option>
            <option>Shopify Shopping Assistant</option>
            <option>Python or API Integration</option>
            <option>Not sure — need guidance</option>
          </select>
        </label>
        <label>
          Estimated budget
          <select name="budget" defaultValue="">
            <option value="">Select a budget</option>
            <option>Under $500</option>
            <option>$500–$1,500</option>
            <option>$1,500–$3,000</option>
            <option>$3,000+</option>
            <option>Not decided</option>
          </select>
        </label>
        <label className="formFull">
          Project description
          <textarea name="message" rows={7} placeholder="Tell me about your business problem, workflow, or AI project idea..." required />
        </label>
      </div>

      <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" />
      <button className="button formSubmit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <div className="formStatus" aria-live="polite">
        {status === "success" && <p className="statusSuccess">Thank you. Your message has been sent successfully.</p>}
        {status === "error" && (
          <p className="statusError">
            The form is not configured yet or could not send. Please use the email or WhatsApp button.
          </p>
        )}
      </div>
    </form>
  );
}
