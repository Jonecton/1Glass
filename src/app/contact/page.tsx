import type { Metadata } from "next";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Quotes | #1 Glass Shop",
  description: "Contact #1 Glass Shop in Weslaco to discuss your glass project and request a quote.",
};

const eyebrowClass = "text-xs font-bold uppercase tracking-[0.18em] text-blue-600";
const callClass = "inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 text-slate-800 sm:px-8">
      <section aria-labelledby="contact-heading" className="max-w-2xl pb-8 pt-4 sm:pt-8">
        <p className={eyebrowClass}>Let’s talk about your project</p>
        <h1 id="contact-heading" className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Contact us. Get a quote.</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">Have a glass project or a question? Call the shop or tell us what you need below.</p>
      </section>
      <div className="grid items-start gap-7 md:grid-cols-[0.85fr_1.35fr]">
        <aside>
          <section aria-labelledby="shop-heading" className="rounded-xl bg-blue-50 p-6 sm:p-7">
            <p className={eyebrowClass}>#1 Glass Shop · Weslaco</p>
            <h2 id="shop-heading" className="mt-3 text-2xl font-bold tracking-tight">Start with a conversation.</h2>
            <p className="mt-3 leading-relaxed text-slate-600">For questions about your glass needs, give us a call.</p>
            <a href="tel:+19564725806" className={`${callClass} mt-5`}>Call (956) 472-5806</a>
            <dl className="mt-7 space-y-6">
              <div><dt className="font-semibold">Visit the shop</dt><dd className="mt-1 text-sm leading-relaxed text-slate-600">1609 Judi St<br />Weslaco, TX</dd></div>
              <div><dt className="font-semibold">Shop hours</dt><dd className="mt-1 text-sm leading-relaxed text-slate-600">Monday–Friday: 8AM–5:30PM<br />Saturday: 9AM–1PM</dd></div>
              <div><dt className="font-semibold">Our service area</dt><dd className="mt-1 text-sm text-slate-600">Weslaco and the Rio Grande Valley</dd></div>
            </dl>
          </section>
          <section aria-labelledby="details-heading" className="mt-6 border-t border-slate-200 pt-6">
            <h2 id="details-heading" className="text-base font-semibold">A few details help</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Photos of the space or damaged glass</li>
              <li>Approximate measurements, if available</li>
              <li>Vehicle year, make, and model for auto glass</li>
            </ul>
          </section>
        </aside>
        <section id="quote-form" aria-labelledby="quote-heading" className="scroll-mt-32 rounded-xl border border-slate-200 bg-white p-6 sm:p-7">
          <p className={eyebrowClass}>Tell us what you need</p>
          <h2 id="quote-heading" className="mt-3 text-2xl font-bold tracking-tight">Request a quote</h2>
          <p className="mt-3 leading-relaxed text-slate-600">Share your project details and how we can reach you.</p>
          <QuoteForm />
        </section>
      </div>
      <footer className="mt-10 border-t border-slate-200 py-5 text-xs text-slate-500">#1 Glass Shop · Weslaco, Texas</footer>
    </main>
  );
}
