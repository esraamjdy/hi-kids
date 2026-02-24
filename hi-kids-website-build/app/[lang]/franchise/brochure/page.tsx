import type { Metadata } from "next";
import { FileDown, FileText } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Download Brochure",
};

export default async function BrochurePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.brochure;

  return (
    <>
      <section className="bg-gradient-to-b from-accent/10 to-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl text-balance">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-10 w-10" />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {t.description}
            </p>

            <a
              href="/downloads/hikids-franchise-brochure.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              <FileDown className="h-5 w-5" />
              {t.cta}
            </a>

            <p className="text-xs text-muted-foreground">{t.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
