"use client";

import { useState, type FormEvent } from "react";

const SERVICES = [
  "Group dog walk",
  "Solo dog walk",
  "Mobile grooming",
  "Puppy visits",
  "Day sitting",
  "Not sure yet",
];

const AREAS_LIST = ["Windsor", "Eton", "Ascot", "Maidenhead", "Slough", "Nearby village"];

const inputCls =
  "w-full rounded-xl border border-ink/20 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Enquiry failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-butter/60 p-8" role="status">
        <h3 className="font-display text-display-sm text-ink">
          Lovely — we&apos;ll be in touch.
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink/75">
          Thanks for getting in touch. We reply to every enquiry within one
          working day, usually much faster, to arrange your free meet &amp;
          greet. If it&apos;s urgent, call us on{" "}
          <a href="tel:+441753123456" className="font-semibold underline">
            01753 123456
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot — hidden from humans, filters naive bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="dog" className="mb-1.5 block text-sm font-semibold">
          Dog&apos;s name &amp; breed
        </label>
        <input id="dog" name="dog" placeholder="e.g. Biscuit, working cocker" className={inputCls} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
          Phone <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
          What do you need?
        </label>
        <select id="service" name="service" className={inputCls} defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="area" className="mb-1.5 block text-sm font-semibold">
          Where are you?
        </label>
        <select id="area" name="area" className={inputCls} defaultValue={AREAS_LIST[0]}>
          {AREAS_LIST.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Tell us about your dog
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Age, temperament, routine, anything we should know…"
          className={inputCls}
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary text-lg disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm font-medium text-clay-deep" role="alert">
            Something went wrong sending that — please try again, or email us
            directly at hello@thedailywag-windsor.co.uk.
          </p>
        )}
        <p className="mt-4 text-xs text-ink/70">
          We only use your details to reply to this enquiry. No newsletters, no
          nonsense.
        </p>
      </div>
    </form>
  );
}
