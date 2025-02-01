export default function ProjectsPage() {
    return (
      <main className="max-w-[1100px] mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center">Previous Projects</h1>
        <p className="mt-4 text-gray-700 text-center">
          Take a look at some of our completed glass installations.
        </p>
  
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="corner_glass.jpg" alt="Glass Project 1" className="rounded shadow-md" />
          <img src="staircase.jpg" alt="Glass Project 2" className="rounded shadow-md" />
          <img src="shower_door.jpg" alt="Glass Project 3" className="rounded shadow-md" />
        </div>
      </main>
    );
  }
  