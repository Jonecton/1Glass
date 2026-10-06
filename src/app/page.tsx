"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Keyboard } from "swiper/modules";
import { FiHome, FiBriefcase, FiTruck, FiTool } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  { id: "residential", title: "Residential glass", description: "Shower doors, home windows, mirrors, and glass railings.", action: "Discuss your home project", Icon: FiHome },
  { id: "commercial", title: "Commercial glass", description: "Storefronts, office partitions, desk dividers, and mirrors.", action: "Discuss your business needs", Icon: FiBriefcase },
  { id: "auto", title: "Auto glass", description: "Glass for windshields, side windows, and rear windows.", action: "Ask about your vehicle", Icon: FiTruck },
  { id: "custom", title: "Custom glass", description: "Table tops, hunting blinds, and other made-to-fit projects.", action: "Bring us your idea", Icon: FiTool },
];

const projects = [
  { image: "/projects/home/shower-glass-panels.jpg", title: "Custom shower enclosure" },
  { image: "/projects/commercial/office-partition-wide.jpg", title: "Office glass partition" },
  { image: "/projects/custom/oval-entry-door.jpg", title: "Decorative entry glass" },
];

const reasons = [
  { image: "/glass_warehouse.jpg", title: "Top-Quality Glass", description: "No shortcuts, only the best materials. We source our glass from the RGV and offer same-day service." },
  { image: "/old_worktruck.jpg", title: "We Come to You", description: "Free mobile service across the RGV." },
  { image: "/5_star_rating.png", title: "5-Star Rated", description: "100% customer satisfaction on Google." },
  { image: "/bath_mirrors.jpg", title: "Auto, Residential, & Commercial Glass", description: "We do it all!" },
];

const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";
const buttonClass = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${focusClass}`;
const eyebrowClass = "text-xs font-bold uppercase tracking-[0.18em] text-blue-600";

function ProjectPhoto({ project }: { project: (typeof projects)[number] }) {
  return (
    <figure>
      <div className="relative h-64 overflow-hidden rounded-lg bg-slate-50 md:h-52 lg:h-60">
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 33vw, 330px" className="object-contain" />
      </div>
      <figcaption className="mt-3 text-center font-semibold text-slate-800">{project.title}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 text-slate-800 sm:px-8">
      <section aria-labelledby="home-heading" className="grid items-start gap-8 pb-10 pt-4 md:grid-cols-2 md:gap-10 sm:pt-8">
        <div>
          <p className={eyebrowClass}>Weslaco · Rio Grande Valley</p>
          <h1 id="home-heading" className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Glass for your home.<br />Your business.<br />Your car.<br />Your next idea.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
            Shower enclosures, storefronts, vehicle windows, and custom glass. Find the right service for your project at #1 Glass Shop.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+19564725806" className={`${buttonClass} bg-blue-600 text-white hover:bg-blue-700`}>Call (956) 472-5806</a>
            <Link href="/services" className={`${buttonClass} border border-slate-300 hover:bg-slate-50`}>Explore our services <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </div>
        <figure className="min-w-0">
          <div className="relative h-80 overflow-hidden rounded-xl bg-slate-50 md:h-[430px]">
            <Image src="/projects/home/shower-glass-panels.jpg" alt="Custom glass shower enclosure" fill priority sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 500px" className="object-contain" />
          </div>
          <figcaption className="mt-2 text-xs text-slate-500">Custom shower enclosure · From our project gallery</figcaption>
        </figure>
      </section>

      <section aria-labelledby="home-services-heading" className="border-t border-slate-200 py-8">
        <p className={eyebrowClass}>What we do</p>
        <h2 id="home-services-heading" className="mt-3 text-3xl font-bold tracking-tight">One shop. A wide range of glass solutions.</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, title, description, action, Icon }) => (
            <article key={id} className="flex flex-col rounded-xl border border-blue-100 bg-blue-50 p-5">
              <Icon aria-hidden="true" className="text-blue-600" size={24} />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mb-5 mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              <Link href={`/services#${id}`} className={`mt-auto rounded-sm text-sm font-semibold text-blue-600 hover:underline ${focusClass}`}>{action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-projects-heading" className="min-w-0 border-t border-slate-200 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div><p className={eyebrowClass}>From our project gallery</p><h2 id="home-projects-heading" className="mt-3 text-3xl font-bold tracking-tight">See the possibilities.</h2></div>
          <Link href="/projects" className={`rounded-sm text-sm font-semibold text-blue-600 hover:underline ${focusClass}`}>View our projects <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-6 min-w-0 md:hidden">
          <Swiper modules={[A11y, Pagination, Keyboard]} slidesPerView={1} spaceBetween={20} pagination={{ clickable: true }} keyboard={{ enabled: true, onlyInViewport: true }} a11y={{ containerMessage: "Glass project gallery", itemRoleDescriptionMessage: "Project slide", paginationBulletMessage: "Show project {{index}}" }} style={{ paddingBottom: "40px" }}>
            {projects.map((project) => <SwiperSlide key={project.image}><ProjectPhoto project={project} /></SwiperSlide>)}
          </Swiper>
        </div>
        <div className="mt-6 hidden grid-cols-3 gap-5 md:grid">
          {projects.map((project) => <ProjectPhoto key={project.image} project={project} />)}
        </div>
      </section>

      <section aria-labelledby="home-reasons-heading" className="border-t border-slate-200 py-8">
        <p className={eyebrowClass}>The #1 Glass Shop difference</p>
        <h2 id="home-reasons-heading" className="mt-3 text-3xl font-bold tracking-tight">Why choose us?</h2>
        <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="w-[280px] flex-shrink-0 snap-center rounded-xl border border-blue-100 bg-blue-50 p-5 md:w-auto">
              <Image src={reason.image} alt={reason.title} width={300} height={200} className="h-40 w-full rounded-lg object-cover" />
              <h3 className="mt-4 text-center text-lg font-semibold text-slate-800">{reason.title}</h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-slate-600">{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-contact-heading" className="my-3 flex flex-wrap items-center justify-between gap-6 rounded-xl bg-blue-50 p-6 sm:p-8">
        <div><p className={eyebrowClass}>Let’s talk about your project</p><h2 id="home-contact-heading" className="mt-3 text-3xl font-bold tracking-tight">What can we help you create?</h2><p className="mt-3 text-slate-600">1609 Judi St, Weslaco, TX</p></div>
        <a href="tel:+19564725806" className={`${buttonClass} bg-blue-600 text-white hover:bg-blue-700`}>Call (956) 472-5806 <span aria-hidden="true" className="ml-2">→</span></a>
      </section>
      <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-slate-200 py-5 text-xs text-slate-500"><span>#1 Glass Shop · Weslaco, Texas</span><span>Residential · Commercial · Auto · Custom</span></footer>
    </main>
  );
}
