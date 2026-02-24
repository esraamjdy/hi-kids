"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
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
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-secondary" />
        <p className="text-lg font-semibold text-card-foreground">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="cert-email" className="text-sm font-medium text-card-foreground">
          {t.emailPlaceholder}
        </label>
        <input
          id="cert-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 disabled:opacity-50"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {t.cta}
      </button>
    </form>
  );
}
