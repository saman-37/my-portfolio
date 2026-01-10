import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: Text */}
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Hey, I am
            </p>
            <h1 className="text-6xl font-extrabold tracking-tight">
              a Tech Enthusiast
            </h1>
          </div>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            As an aspiring software engineer, I love turning ideas into clean,
            user-friendly software solutions. I build systems, design interfaces,
            and ship projects that feel polished.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 font-semibold"
            >
              Contact Me
            </a>

            {/* Resume (PDF) from /public */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-white/25 hover:border-white/50 transition font-semibold"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-white/10 border border-white/15">
            <Image
              src="/myphoto.jpg"
              alt="Saman profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
