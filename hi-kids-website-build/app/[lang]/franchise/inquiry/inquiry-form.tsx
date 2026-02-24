"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  country: z.string().min(1),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function FranchiseInquiryForm({ dict }: { dict: Dictionary }) {
  const t = dict.franchise.inquiry.form;
  const countries = dict.franchise.inquiry.countries;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/franchise-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-secondary/30 bg-secondary/5 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-secondary" />
        <p className="text-lg font-semibold text-foreground">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {t.error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          {t.name}
        </label>
        <input
          id="name"
          {...register("name")}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder={t.name}
        />
        {errors.name && (
          <p className="text-xs text-destructive">Required</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          {t.email}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder={t.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">Valid email required</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          {t.phone}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder={t.phone}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">Required</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="country" className="text-sm font-medium text-foreground">
          {t.country}
        </label>
        <select
          id="country"
          {...register("country")}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">{t.country}</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-xs text-destructive">Required</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {t.message}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder={t.message}
        />
        {errors.message && (
          <p className="text-xs text-destructive">Minimum 10 characters</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {t.submit}
      </button>
    </form>
  );
}
