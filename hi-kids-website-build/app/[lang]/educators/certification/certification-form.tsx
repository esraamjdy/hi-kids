"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function CertificationForm({ dict }: { dict: Dictionary }) {
  const t = dict.educators.certification;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/educator-certification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 py-12 text-center animate-scale-in">
        <div className="w-20 h-20 bg-hikids-green/10 rounded-full flex items-center justify-center text-hikids-green mb-4">
           <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl lg:text-3xl font-fredoka font-black text-slate-900">{t.success}</h3>
        <p className="text-slate-500 font-medium">We've received your request. Check your inbox for the next steps!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600 animate-shake">
          <AlertCircle className="h-6 w-6 shrink-0" />
          <p className="font-bold font-fredoka uppercase tracking-wide text-sm">Something went wrong. Please try again.</p>
        </div>
      )}

      <div className="space-y-3">
        <label htmlFor="cert-email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">
          Your Professional Email
        </label>
        <input
          id="cert-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-hikids-blue/20 focus:border-hikids-blue transition-all"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-4 rounded-3xl bg-slate-900 px-10 py-6 text-xl font-black text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 group"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Apply Now
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
