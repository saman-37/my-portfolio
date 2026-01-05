export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Software Engineer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          C++, Systems, AI, and clean full-stack work.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
    
  );
}

<section id="projects" className="py-32 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-6 bg-white rounded-xl border">
        <h3 className="text-xl font-semibold">
          BC Ferries Reservation System
        </h3>
        <p className="text-gray-600 mt-2">
          Large-scale C++ console system modeling vessels, sailings,
          vehicles, and reservations with persistent storage.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl border">
        <h3 className="text-xl font-semibold">
          Portfolio Website
        </h3>
        <p className="text-gray-600 mt-2">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </div>
  </div>
</section>

