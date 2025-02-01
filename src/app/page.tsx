export default function Home() {
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

      {/* Images Section */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="project1.jpg" alt="Glass Project 1" className="rounded shadow-md" />
        <img src="project2.jpg" alt="Glass Project 2" className="rounded shadow-md" />
        <img src="project3.jpg" alt="Glass Project 3" className="rounded shadow-md" />
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
