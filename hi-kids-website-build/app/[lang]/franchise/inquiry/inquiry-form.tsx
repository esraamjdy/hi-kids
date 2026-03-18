"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, Send, ArrowRight } from "lucide-react";
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
      <div className="flex flex-col items-center gap-6 py-12 text-center animate-scale-in">
        <div className="w-24 h-24 bg-hikids-green/10 rounded-full flex items-center justify-center text-hikids-green mb-4">
           <CheckCircle2 size={48} />
        </div>
        <h3 className="text-3xl lg:text-4xl font-fredoka font-black text-slate-900">{t.success}</h3>
        <p className="text-lg text-slate-500 max-w-sm">Thank you for your interest! Our team will contact you within 24 hours.</p>
        <button 
           onClick={() => setStatus("idle")}
           className="mt-4 text-hikids-blue font-bold px-8 py-3 rounded-full border border-hikids-blue/20 hover:bg-hikids-blue/5 transition-colors"
        >
           Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600 animate-shake">
          <AlertCircle className="h-6 w-6 shrink-0" />
          <p className="font-bold">{t.error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="space-y-3">
          <label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">
            {t.name}
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-hikids-yellow/20 focus:border-hikids-yellow transition-all"
            placeholder="e.g. John Doe"
          />
          {errors.name && (
            <p className="text-xs text-red-500 font-bold ml-2">Required</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-hikids-yellow/20 focus:border-hikids-yellow transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 font-bold ml-2">Valid email required</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Phone */}
        <div className="space-y-3">
          <label htmlFor="phone" className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">
            {t.phone}
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-hikids-yellow/20 focus:border-hikids-yellow transition-all"
            placeholder="+1 234 567 890"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 font-bold ml-2">Required</p>
          )}
        </div>

        {/* Country */}
        <div className="space-y-3">
          <label htmlFor="country" className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">
            {t.country}
          </label>
          <select
            id="country"
            {...register("country")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 focus:outline-none focus:ring-4 focus:ring-hikids-yellow/20 focus:border-hikids-yellow transition-all appearance-none cursor-pointer"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-xs text-red-500 font-bold ml-2">Required</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-3">
        <label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">
          {t.message}
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-hikids-yellow/20 focus:border-hikids-yellow transition-all resize-none"
          placeholder="How can we help you building your legacy?"
        />
        {errors.message && (
          <p className="text-xs text-red-500 font-bold ml-2">Minimum 10 characters</p>
        )}
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
              {t.submit}
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
