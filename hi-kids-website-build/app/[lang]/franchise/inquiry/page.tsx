import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { FranchiseInquiryForm } from "./inquiry-form";

export const metadata: Metadata = {
  title: "Franchise Inquiry",
};

export default async function InquiryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.inquiry;

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
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
          <FranchiseInquiryForm dict={dict} />
        </div>
      </section>
    </>
  );
}
