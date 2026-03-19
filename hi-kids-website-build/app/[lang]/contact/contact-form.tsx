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
      <div className="rounded-[2.5rem] bg-emerald-50/50 border-2 border-emerald-100 p-12 text-center animate-scale-in">
        <div className="mx-auto mb-6 h-20 w-20 flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-200">
           <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-black font-fredoka text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600 font-medium">{dict.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2"
          >
            {dict.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50/50 px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:border-hikids-blue/30 focus:bg-white focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2"
          >
            {dict.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50/50 px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:border-hikids-blue/30 focus:bg-white focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-subject"
          className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2"
        >
          {dict.subject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
          className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50/50 px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:border-hikids-blue/30 focus:bg-white focus:outline-none transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2"
        >
          {dict.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Your message here..."
          className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50/50 px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:border-hikids-blue/30 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs font-bold animate-shake">
          {dict.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative w-full inline-flex items-center justify-center gap-3 rounded-full bg-hikids-blue px-8 py-5 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-hikids-blue/20 transition-all hover:bg-hikids-blue/90 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:translate-y-0"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        )}
        {dict.submit}
      </button>
    </form>
  );
}
