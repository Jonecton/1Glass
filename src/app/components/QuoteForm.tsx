"use client";

import { useRef, useState, type FormEvent } from "react";

const inputClass = "w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-base text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
const labelClass = "mb-2 block text-sm font-semibold";

export default function QuoteForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null);
  const inFlight = useRef(false);
  const attempt = useRef<{ payload: string; id: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const fields = Object.fromEntries(["name", "phone", "email", "description", "website"].map(key => [key, String(values.get(key) || "").trim()]));
    const payload = JSON.stringify(fields);
    if (attempt.current?.payload !== payload) attempt.current = { payload, id: crypto.randomUUID() };
    inFlight.current = true;
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/quote", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, requestId: attempt.current.id }),
      });
      const result = await response.json();
      setStatus({ message: result.message || "Please try again or call (956) 472-5806.", success: response.ok });
      if (response.ok) { form.reset(); attempt.current = null; }
    } catch {
      setStatus({ message: "We couldn’t confirm your request. Please try again or call (956) 472-5806.", success: false });
    } finally { inFlight.current = false; setPending(false); }
  }

  return (
    <form onSubmit={submit} className="mt-6 space-y-5" aria-busy={pending}>
      <fieldset disabled={pending} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="quote-name" className={labelClass}>Your name</label><input id="quote-name" name="name" autoComplete="name" maxLength={100} required className={inputClass} placeholder="Full name" /></div>
          <div><label htmlFor="quote-phone" className={labelClass}>Phone number</label><input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} required className={inputClass} placeholder="(956) 555-0123" /></div>
        </div>
        <div><label htmlFor="quote-email" className={labelClass}>Email <span className="font-normal text-slate-500">(optional)</span></label><input id="quote-email" name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} placeholder="you@example.com" /></div>
        <div><label htmlFor="quote-description" className={labelClass}>Tell us about your project</label><textarea id="quote-description" name="description" rows={5} minLength={10} maxLength={5000} required className={inputClass} placeholder="What glass do you need? Include approximate measurements or vehicle details if you have them." /></div>
        <div hidden aria-hidden="true"><label htmlFor="quote-website">Leave this blank</label><input id="quote-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{pending ? "Sending…" : "Request a quote"}</button>
      </fieldset>
      {status && <p role={status.success ? "status" : "alert"} className={`rounded-lg p-4 text-sm leading-relaxed ${status.success ? "bg-blue-50 text-blue-800" : "bg-red-50 text-red-800"}`}>{status.message}</p>}
      <p className="text-xs text-slate-500">Your details will be used to respond to your request.</p>
    </form>
  );
}
