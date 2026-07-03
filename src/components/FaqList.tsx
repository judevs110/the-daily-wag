import type { Faq } from "@/lib/faqs";

/**
 * Native <details> accordion — zero JavaScript, fully crawlable answers
 * (AEO: the Q&A text is always in the DOM), animated open state via CSS.
 */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-2">
          <summary className="font-display py-4 text-lg font-medium text-ink md:text-xl">
            {faq.question}
          </summary>
          <div className="faq-answer">
            <div>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink/75">
                {faq.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
