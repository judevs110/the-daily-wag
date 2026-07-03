import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";

const SUMMARY =
  "Direct answers to the questions Windsor dog owners ask us most: prices (group walks £15, solo £22, puppy visits £10), coverage (Windsor, Eton, Ascot, Maidenhead, Slough), group sizes (four dogs maximum), insurance, keys, weather policy and how the free meet & greet works.";

export const metadata: Metadata = {
  title: "FAQ — Dog Walking Questions, Answered Straight",
  description:
    "How much does a dog walker cost in Windsor? How many dogs per group? Are you insured? Every common question about The Daily Wag, answered directly.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "The Daily Wag — frequently asked questions",
    description: SUMMARY,
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          faqSchema([...FAQS]),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Frequently asked questions"
        title={
          <>
            Asked often,{" "}
            <span className="font-display-wonk italic text-leaf">answered straight</span>
          </>
        }
        summary={SUMMARY}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.6fr_1.4fr]">
          <Reveal>
            <p className="md:sticky md:top-28 max-w-xs leading-relaxed text-ink/70">
              Twelve questions cover almost everything new clients ask. If
              yours isn&apos;t here, the phone works:{" "}
              <a href="tel:+441753123456" className="font-semibold text-clay underline">
                01753 123456
              </a>
              , Monday to Saturday.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqList faqs={[...FAQS]} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Question answered? Good."
        body="The next step is the free meet & greet — half an hour at yours, no obligation, and your dog does most of the interviewing."
      />
    </>
  );
}
