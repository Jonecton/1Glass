import type { Metadata } from "next";
import ProjectDeck from "../components/ProjectDeck";

export const metadata: Metadata = {
  title: "Previous Projects | #1 Glass Shop",
  description: "Explore auto, home, commercial, and custom glass projects from #1 Glass Shop in Weslaco.",
};

import { projectSections } from './project-data';

const eyebrowClass = "text-xs font-bold uppercase tracking-[0.18em] text-blue-600";
const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 text-slate-800 sm:px-8">
      <section aria-labelledby="projects-heading" className="pb-6 pt-4 sm:pt-8">
        <p className={eyebrowClass}>From our project gallery</p>
        <h1 id="projects-heading" className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">See our glass work in action.</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">Explore projects for vehicles, homes, businesses, and custom spaces.</p>
      </section>

      <nav aria-label="Project types" className="flex flex-wrap gap-3 pb-7">
        {projectSections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className={`inline-flex min-h-11 items-center rounded-lg border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white ${focusClass}`}>
            {section.label}
          </a>
        ))}
      </nav>

      {projectSections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-32 border-t border-slate-200 py-8">
          <h2 id={`${section.id}-heading`} className="text-3xl font-bold tracking-tight">{section.title}</h2>
          <p className="mb-6 mt-3 leading-relaxed text-slate-600">{section.description}</p>
          <ProjectDeck label={section.label} projects={section.projects} />
        </section>
      ))}

      <section aria-labelledby="projects-contact-heading" className="mt-6 rounded-xl bg-blue-50 p-6 sm:p-8">
        <p className={eyebrowClass}>Your project could be next</p>
        <h2 id="projects-contact-heading" className="mt-3 text-3xl font-bold tracking-tight">Have something in mind?</h2>
        <p className="mt-3 leading-relaxed text-slate-600">Bring your ideas, photos, or questions. Let’s discuss the glass your project needs.</p>
        <a href="tel:+19564725806" className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 ${focusClass}`}>
          Call (956) 472-5806 <span aria-hidden="true" className="ml-2">→</span>
        </a>
      </section>
      <footer className="mt-8 border-t border-slate-200 py-5 text-xs text-slate-500">#1 Glass Shop · Weslaco, Texas</footer>
    </main>
  );
}
