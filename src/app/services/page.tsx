import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Glass Services | #1 Glass Shop",
  description: "Residential, commercial, auto, and custom glass services in Weslaco and the Rio Grande Valley.",
};

const services = [
  {
    id: "residential", title: "Residential glass", image: "/shower_door.jpg",
    alt: "Glass shower enclosure from the shop’s project gallery",
    description: "Bring more light and a clean finish to your home with glass made for your space.",
    items: ["Custom shower doors and enclosures", "Home windows and glass replacement", "Bathroom, gym, and wall mirrors", "Glass railings"],
    action: "Tell us about your home project",
  },
  {
    id: "commercial", title: "Commercial glass", image: "/corner_glass.jpg",
    alt: "Architectural glass from the shop’s project gallery",
    description: "Practical glass solutions for welcoming storefronts and functional workspaces.",
    items: ["Storefront windows and glass", "Office glass partitions", "Desk dividers", "Custom mirrors for gyms and studios"],
    action: "Discuss your business needs",
  },
  {
    id: "auto", title: "Auto glass", image: "/old_worktruck.jpg",
    alt: "The glass shop’s work truck",
    description: "Have a damaged vehicle window? Contact us to discuss the glass and service your vehicle needs.",
    items: ["Windshield glass", "Side windows", "Rear windows"],
    action: "Ask about your vehicle",
  },
  {
    id: "custom", title: "Custom glass", image: "/staircase.jpg",
    alt: "Glass staircase railing from the shop’s project gallery",
    description: "For projects beyond the usual window or mirror, start with your idea and we’ll discuss the possibilities.",
    items: ["Glass table tops", "Glass for hunting blinds", "Aquarium glass projects", "Other made-to-fit glass projects"],
    action: "Bring us your idea",
  },
];

const steps = [
  { label: "01 | Your project", title: "Tell us what you need", description: "Describe the space, damaged glass, or custom piece you have in mind." },
  { label: "02 | The details", title: "Have a few details ready", description: "Photos and approximate measurements help. For auto glass, have your vehicle’s year, make, and model ready." },
  { label: "03 | The next step", title: "Talk through your options", description: "Contact the shop to discuss your project and what’s needed for a quote." },
];

const buttonClass = "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 text-slate-800 sm:px-8">
      <section className="max-w-3xl pb-8 pt-4 sm:pt-8" aria-labelledby="services-heading">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Weslaco · Rio Grande Valley</p>
        <h1 id="services-heading" className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Glass solutions for<br className="hidden sm:block" /> the spaces you live in.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          From a new shower enclosure to a storefront or vehicle window, find the glass service that fits your project. Have something custom in mind? Let’s talk about it.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#project-contact" className={`${buttonClass} bg-blue-600 text-white hover:bg-blue-700`}>Discuss your project <span aria-hidden="true" className="ml-2">→</span></a>
          <a href="tel:+19564725806" className={`${buttonClass} border border-slate-300 hover:bg-slate-50`}>Call (956) 472-5806</a>
        </div>
      </section>

      <nav aria-label="Service categories" className="grid grid-cols-1 gap-3 border-y border-slate-200 py-5 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`} className="group flex min-h-12 items-center justify-between gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-blue-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
            {service.title}
            <span aria-hidden="true" className="text-blue-400 transition-colors group-hover:text-white">↓</span>
          </a>
        ))}
      </nav>

      <section aria-label="Our glass services" className="grid grid-cols-1 gap-7 py-8 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} id={service.id} className="flex scroll-mt-32 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="relative h-56 sm:h-64">
              <Image src={service.image} alt={service.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 510px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
              <ul className="my-5 space-y-2 text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3"><span aria-hidden="true" className="font-semibold text-blue-600">✓</span><span>{item}</span></li>
                ))}
              </ul>
              <a href="#project-contact" className="mt-auto rounded-sm pt-2 text-sm font-semibold text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{service.action} <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </section>

      <section aria-labelledby="process-heading" className="border-t border-slate-200 py-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Getting started</p>
        <h2 id="process-heading" className="mt-3 text-3xl font-bold tracking-tight">Let’s make your project clear.</h2>
        <ol className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.label}>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{step.label}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="project-contact" aria-labelledby="contact-heading" className="my-3 scroll-mt-32 rounded-xl bg-blue-50 p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Have a project in mind?</p>
        <h2 id="contact-heading" className="mt-3 text-3xl font-bold tracking-tight">Start with a conversation.</h2>
        <p className="mt-3 leading-relaxed text-slate-600">Call #1 Glass Shop to discuss your glass needs.</p>
        <p className="mt-1 text-slate-600">1609 Judi St, Weslaco, TX · Serving the Rio Grande Valley</p>
        <a href="tel:+19564725806" className={`${buttonClass} mt-6 bg-blue-600 text-white hover:bg-blue-700`}>Call (956) 472-5806</a>
      </section>
      <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-slate-200 py-5 text-xs text-slate-500">
        <span>#1 Glass Shop · Weslaco, Texas</span><span>Residential · Commercial · Auto · Custom</span>
      </footer>
    </main>
  );
}
  
