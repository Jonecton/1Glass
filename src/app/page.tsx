"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeContainer, setActiveContainer] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToContainer = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containers = Array.from(container.children);
      const target = containers[index + 1];

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        setActiveContainer(index);
      }
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const containers = Array.from(containerRef.current.children);
    let closestIndex = activeContainer;
    let minDistance = Infinity;

    containers.forEach((child, idx) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const distance = Math.abs(e.clientX - rect.left - rect.width / 2);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx - 1;
      }
    });

    if (closestIndex >= 0 && closestIndex < containers.length - 2) {
      scrollToContainer(closestIndex);
    }
  };

  return (
    <main className="max-w-[1100px] mx-auto p-6 text-center">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold text-blue-600">#1 Glass Shop</h1>
        <p className="mt-4 text-gray-700 text-lg">
          High-quality glass solutions for homes, businesses, vehicles, and anything custom.
        </p>
      </section>

      {/* Mobile View - Horizontal Scrollable Containers */}
      {isMobile && (
        <section className="mt-10 text-gray-700">
          <h2 className="text-xl font-semibold text-blue-600">Why Choose Us?</h2>

          <div
            ref={containerRef}
            className="mt-4 flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-8 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="min-w-[50%]"></div>

            {/* Individual Click Handlers on Cards */}
            {[
              { img: "/glass_on_rack.png", title: "Top-Quality Glass", text: "No shortcuts, only the best materials. We source our glass from the RGV and offer same-day service." },
              { img: "/old_worktruck.jpg", title: "We Come to You", text: "Free mobile service across the RGV." },
              { img: "/5_star_rating.png", title: "5-Star Rated", text: "100% customer satisfaction on Google." },
              { img: "/bath_mirrors.jpg", title: "Auto, Residential, & Commercial Glass", text: "We do it all!" }
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] p-4 bg-gray-100 rounded-lg shadow-md snap-center cursor-pointer"
                onClick={(e) => handleCardClick(e)}
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-40 object-cover rounded" 
                />
                <h3 className="mt-4 font-semibold text-blue-600">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </div>
            ))}

            <div className="min-w-[50%]"></div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>

        {/* Services Highlights (Stacks on Mobile, 3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-left">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Residential Glass</h3>
            <p className="text-gray-600 mt-2">
              Custom shower doors, home windows, glass railings, mirrors, and more.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Commercial Glass</h3>
            <p className="text-gray-600 mt-2">
              Storefronts, office partitions, desk dividers, security glass, and more.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Auto Glass</h3>
            <p className="text-gray-600 mt-2">
              Windshields, side and rear windows, sunroofs, and full vehicle tinting.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Custom Fabrication</h3>
            <p className="text-gray-600 mt-2">
              Hunting Blinds, Aquarium Tanks, Table Tops, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="/services"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Services
        </a>
      </div>

      {/* Images Section (Grid on Desktop, Carousel on Mobile) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-500">Our Work</h2>

        {isMobile ? (
          <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} className="mt-4">
            {["/corner_glass.jpg", "/staircase.jpg", "/shower_door.jpg"].map((img, index) => (
              <SwiperSlide key={index}>
                <Image src={img} alt={`Glass Project ${index + 1}`} width={500} height={300} className="rounded shadow-md w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {["/corner_glass.jpg", "/staircase.jpg", "/shower_door.jpg"].map((img) => (
            <Image key={img} src={img} alt="Glass Project" width={500} height={300} className="rounded shadow-md" />
          ))}
          </div>
        )}
      </section>
            {/* Contact Info */}
            <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-500">Get a Free Quote</h2>
        <p className="mt-2 text-gray-600">Call us today at (956) 472-5806 or request a quote online.</p>
        <a
          href="/quote"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}
