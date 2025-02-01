export default function QuotePage() {
    return (
      <main className="max-w-[1100px] mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center">Request a Quote</h1>
        <p className="mt-4 text-gray-600 text-center">
          Fill out the form below or call us at (956) 351-5877 for a quote.
        </p>
  
        <form className="mt-6 flex flex-col max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <input type="tel" placeholder="Your Phone Number" className="p-3 border rounded" />
          <textarea placeholder="Describe your project" className="p-3 border rounded h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Get a Quote
          </button>
        </form>
      </main>
    );
  }
  