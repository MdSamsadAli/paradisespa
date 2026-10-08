"use client";
import { useState } from "react";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (res.ok) {
        setStatus("ok");
        setF({ name: "", email: "", phone: "", subject: "", message: "" });
      } else setStatus("err");
    } catch {
      setStatus("err");
    }
  }

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  return (
    <form onSubmit={submit} className="contact-form">
      <h2 className="big">Get in touch!</h2>
      <p>We&apos;d love to hear from you! Whether you have questions about our spa services, want to book an appointment, or need assistance with your wellness journey, our team is here to help. Reach out to us, and we&apos;ll respond within 24 hours.</p>
      <label>Full Name<input required value={f.name} onChange={set("name")} /></label>
      <label>Email Address<input type="email" required value={f.email} onChange={set("email")} /></label>
      <label>Phone no<input type="tel" value={f.phone} onChange={set("phone")} /></label>
      <label>Subject<input value={f.subject} onChange={set("subject")} /></label>
      <label>Message<textarea rows={3} required value={f.message} onChange={set("message")} /></label>
      <button className="btn btn-primary btn-lg" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Message"}</button>
      {status === "ok" && <p className="ok-text">Message sent. We will get back to you within 24 hours.</p>}
      {status === "err" && <p className="err-text">Could not send. Please try again.</p>}
    </form>
  );
}
