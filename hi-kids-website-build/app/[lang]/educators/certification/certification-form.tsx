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
        <div className="w-24 h-24 bg-[#ffde00]/10 rounded-full flex items-center justify-center text-[#ffde00] mb-4 border border-[#ffde00]/20">
           <CheckCircle2 size={48} />
        </div>
        <h3 className="text-3xl lg:text-4xl font-fredoka font-bold text-[#ffde00]">{t.success}</h3>
        <p className="text-slate-300 text-lg lg:text-xl font-medium max-w-md">{t.successDesc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status === "error" && (
        <div className="flex items-center gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-red-400 animate-shake">
          <AlertCircle className="h-6 w-6 shrink-0" />
          <p className="font-bold font-fredoka uppercase tracking-wide text-sm">{t.formError}</p>
        </div>
      )}

      <div className="space-y-4">
        <label htmlFor="cert-email" className="text-sm font-black uppercase tracking-widest text-[#ffde00] ml-2">
          {t.formLabel}
        </label>
        <input
          id="cert-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-2xl border-2 border-slate-700 bg-slate-800/50 px-8 py-5 text-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-[#ffde00]/20 focus:border-[#ffde00] transition-all"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-4 rounded-[2rem] bg-[#ffde00] px-10 py-6 text-xl font-black text-slate-900 shadow-[0_0_40px_-10px_rgba(255,222,0,0.2)] transition-all hover:bg-white hover:-translate-y-1 hover:shadow-[0_0_60px_-15px_rgba(255,222,0,0.4)] disabled:opacity-50 group"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin" />
              {t.formLoading}
            </>
          ) : (
            <>
              {t.formSubmit}
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
