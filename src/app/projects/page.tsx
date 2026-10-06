import type { Metadata } from "next";
import ProjectDeck from "../components/ProjectDeck";

export const metadata: Metadata = {
  title: "Previous Projects | #1 Glass Shop",
  description: "Explore auto, home, commercial, and custom glass projects from #1 Glass Shop in Weslaco.",
};

const projectSections = [
  {
    id: "auto", label: "Auto", title: "Auto glass projects",
    description: "Glass work for windshields and vehicle windows.",
    projects: [
      { title: "Windshield replacement", description: "Space for a windshield project photo and a short description of the vehicle and work completed." },
      { title: "Vehicle window glass", description: "Space for a side or rear window project, including the glass replaced and any useful details." },
      { title: "Side window replacement", description: "Space for a side window photo and details about the vehicle and replacement glass." },
      { title: "Rear window replacement", description: "Space for a rear window project and a description of the completed work." },
      { title: "Another auto project", description: "Space for another vehicle glass photo and a short project description." },
    ],
  },
  {
    id: "home", label: "Home", title: "Home glass projects",
    description: "Shower enclosures, mirrors, windows, and glass railings.",
    projects: [
      { title: "Custom shower enclosure", description: "Space for a completed shower enclosure and details about its layout, glass, and finish." },
      { title: "Bathroom mirrors", description: "Space for a mirror installation and a short description of how it fits the room." },
      { title: "Home window glass", description: "Space for a window glass project and details about the room and installation." },
      { title: "Glass staircase railing", description: "Space for a railing photo and a description of the glass used in the space." },
      { title: "Wall mirror installation", description: "Space for a home mirror project and a short description of the finished result." },
    ],
  },
  {
    id: "commercial", label: "Commercial", title: "Commercial glass projects",
    description: "Glass solutions for storefronts and workspaces.",
    projects: [
      { title: "Storefront glass", description: "Space for a business storefront photo and details about the installation or replacement." },
      { title: "Office glass partition", description: "Space for a workspace project showing how glass divides the area while preserving light." },
      { title: "Gym mirrors", description: "Space for a commercial mirror installation and details about the space." },
      { title: "Desk dividers", description: "Space for glass divider photos and a description of the workspace layout." },
      { title: "Another commercial project", description: "Space for another business glass project and a short description of the work." },
    ],
  },
  {
    id: "custom", label: "Custom", title: "Custom glass projects",
    description: "Glass made for ideas beyond the everyday.",
    projects: [
      { title: "Glass table top", description: "Space for a custom table top and details about its shape, dimensions, or intended use." },
      { title: "Made-to-fit glass", description: "Space for a unique glass project and the customer’s idea that inspired it." },
      { title: "Hunting blind glass", description: "Space for a hunting blind glass photo and details about the custom fit." },
      { title: "Aquarium glass", description: "Space for an aquarium glass project and a short description of the design." },
      { title: "Another custom project", description: "Space for a one-of-a-kind glass project and the idea behind it." },
    ],
  },
];

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
