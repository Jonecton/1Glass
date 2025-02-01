"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to switch layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="max-w-[1100px] mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Glass Shop</h1>
      <p className="mt-4 text-gray-700 text-lg">
        High-quality glass solutions for your home, business, and vehicle.
      </p>

      {/* Services Overview */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-500">Our Services</h2>
        <p className="mt-2 text-gray-600">
          We specialize in custom glass work, including shower doors, tabletops, 
          storefronts, and more.
        </p>
      </section>

      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Our Services
        </a>
      </div>

      {/* Images Section (Grid on Desktop, Carousel on Mobile) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-500">Our Work</h2>

        {isMobile ? (
          // Mobile: Swiper Carousel
          <Swiper spaceBetween={20} slidesPerView={1} className="mt-4">
            <SwiperSlide>
              <img src="corner_glass.jpg" alt="Glass Project 1" className="rounded shadow-md w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="staircase.jpg" alt="Glass Project 2" className="rounded shadow-md w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="shower_door.jpg" alt="Glass Project 3" className="rounded shadow-md w-full" />
            </SwiperSlide>
          </Swiper>
        ) : (
          // Desktop: Grid Layout
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <img src="corner_glass.jpg" alt="Glass Project 1" className="rounded shadow-md" />
            <img src="staircase.jpg" alt="Glass Project 2" className="rounded shadow-md" />
            <img src="shower_door.jpg" alt="Glass Project 3" className="rounded shadow-md" />
          </div>
        )}
      </section>

      {/* Contact Info */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-500">Get a Free Quote</h2>
        <p className="mt-2 text-gray-600">Call us today at (956) 351-5877 or request a quote online.</p>
        <a
          href="/quote"
          className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}
