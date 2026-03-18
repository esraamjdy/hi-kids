"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface ContactFormDict {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
  success: string;
  error: string;
}

export function ContactForm({ dict }: { dict: ContactFormDict }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[3rem] lg:rounded-[4rem] lg:rounded-[2.5rem] border border-secondary/30 bg-secondary/5 p-14 lg:p-20 lg:p-14 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-secondary" />
        <p className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-semibold text-foreground">{dict.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-semibold text-foreground"
        >
          {dict.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-semibold text-foreground"
        >
          {dict.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-semibold text-foreground"
        >
          {dict.subject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-semibold text-foreground"
        >
          {dict.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      {status === "error" && (
        <p className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-destructive">{dict.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-semibold text-white-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {dict.submit}
      </button>
    </form>
  );
}
