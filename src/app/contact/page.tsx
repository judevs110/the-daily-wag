import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const SUMMARY = `Book dog walking, mobile grooming or puppy visits with The Daily Wag: call ${SITE.phone}, email ${SITE.email}, or send the enquiry form below. We reply within one working day (${SITE.openingHours.human}), and every new client starts with a free meet & greet at home in Windsor, Eton, Ascot, Maidenhead or Slough.`;

export const metadata: Metadata = {
  title: "Contact & Booking — Free Meet & Greet",
  description:
    "Book a free meet & greet with The Daily Wag. Call 01753 123456 or send an enquiry — dog walking, mobile grooming and puppy visits across Windsor and East Berkshire.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book with The Daily Wag",
    description: SUMMARY,
    url: "/contact",
  },
};

const EXPECT = [
  {
    step: "Within a day",
    body: "A reply from a human who has actually read your message — usually within hours during walking days.",
  },
  {
    step: "Within a week",
    body: "Your free meet & greet: half an hour at your home, dog present and opinionated. We bring treats and zero paperwork pressure.",
  },
  {
    step: "Whenever you're ready",
    body: "First walks booked around your schedule. No minimum commitment, no contract lock-in — regulars simply keep their slots.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Contact & booking"
        title={
          <>
            Say hello.{" "}
            <span className="font-display-wonk italic text-leaf">Bring the dog.</span>
          </>
        }
        summary={SUMMARY}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Direct contact + what happens next */}
          <div>
            <Reveal>
              <h2 className="font-display text-display-sm text-ink">Prefer to talk?</h2>
              <address className="mt-5 space-y-3 text-lg not-italic">
                <p>
                  <a href={`tel:${SITE.phoneHref}`} className="link-underline font-semibold text-clay">
                    {SITE.phone}
                  </a>
                  <span className="block text-sm text-ink/70">{SITE.openingHours.human}</span>
                </p>
                <p>
                  <a href={`mailto:${SITE.email}`} className="link-underline break-all font-semibold text-clay">
                    {SITE.email}
                  </a>
                  <span className="block text-sm text-ink/70">Replies within one working day</span>
                </p>
              </address>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <h2 className="eyebrow text-clay">What happens next</h2>
              <div className="mt-5 space-y-7">
                {EXPECT.map((item) => (
                  <article key={item.step} className="border-l-2 border-moss pl-5">
                    <h3 className="font-display-wonk text-xl italic text-ink">{item.step}</h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink/70">{item.body}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-parchment p-6 md:p-10">
              <h2 className="font-display text-display-sm text-ink">Enquiry form</h2>
              <p className="mt-2 mb-8 text-sm text-ink/70">
                Two minutes, no account, no obligation.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
