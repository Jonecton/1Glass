"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCards, Keyboard, Pagination } from "swiper/modules";
import { FiImage } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

type Project = { title: string; description: string };

export default function ProjectDeck({ label, projects }: { label: string; projects: Project[] }) {
  return (
    <>
    <div className="hidden min-w-0 md:block">
      <Swiper
        modules={[A11y, Autoplay, Keyboard, Pagination]}
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={24}
        loop
        speed={600}
        grabCursor
        autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={{ clickable: true }}
        a11y={{ containerMessage: `${label} project carousel`, paginationBulletMessage: "Show project {{index}}" }}
        style={{ paddingBottom: "44px" }}
      >
      {projects.map((project) => (
        <SwiperSlide key={project.title} className="!h-auto">
        <article className="h-full overflow-hidden rounded-xl border border-blue-100 bg-white">
          <div className="flex h-64 flex-col items-center justify-center gap-3 bg-blue-50 px-5 text-center">
            <FiImage aria-hidden="true" size={28} className="text-blue-600" />
            <p className="text-sm text-slate-600">{label} project photo coming soon</p>
          </div>
          <div className="p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Sample project</p>
            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
          </div>
        </article>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
    <div className="mx-auto w-full max-w-[440px] px-8 pb-2 pt-3 sm:px-10 md:hidden">
      <Swiper
        modules={[EffectCards, A11y, Keyboard, Pagination]}
        effect="cards"
        loop
        cardsEffect={{ perSlideOffset: 10, perSlideRotate: 3, slideShadows: false }}
        grabCursor
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={{ clickable: true }}
        a11y={{ containerMessage: `${label} project card deck`, itemRoleDescriptionMessage: "Project card", paginationBulletMessage: "Show project {{index}}" }}
        style={{ paddingBottom: "44px" }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow-md">
            <article>
              <div className="flex h-52 flex-col items-center justify-center gap-3 bg-blue-50 px-5 text-center">
                <FiImage aria-hidden="true" size={28} className="text-blue-600" />
                <p className="text-sm text-slate-600">{label} project photo coming soon</p>
              </div>
              <div className="min-h-52 p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Sample project</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-center text-xs text-slate-500">Swipe through projects or select a dot</p>
    </div>
    </>
  );
}
