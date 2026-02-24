import { notFound } from "next/navigation";
import { i18n, isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <div lang={lang}>
      <Header locale={lang} dict={dict} />
      <main>{children}</main>
      <Footer locale={lang} dict={dict} />
    </div>
  );
}
