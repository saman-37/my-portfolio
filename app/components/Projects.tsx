const projects = [
  {
    title: "Backstage Concert Companion Mobile Application",
    impact:
      "Concert-tracking app with a modern multi-tab experience, real-time event discovery, and a scalable Firebase account system.",
    tech: ["Kotlin", "Android Studio", "Firebase Auth", "Firestore", "MVVM", "Ticketmaster API"],
    highlights: [
      "Developed a multi-tab UX for exploring events, connecting with friends, and managing interests using MVVM.",
      "Implemented real-time concert search by integrating Ticketmaster’s API with location-aware content.",
      "Built secure login + profile management using Firebase Authentication and Firestore.",
      "Enabled saved events and synced cross-device data for a consistent user experience.",
    ],
    github: "https://github.com/saman-37/Backstage.git",
    live: "https://lnkd.in/gqZgqxV9",
  },
  {
    title: "Ferry Reservation System",
    impact:
      "C++ system to manage ferry reservations and vehicle check-ins with persistent binary storage and SDLC-driven documentation.",
    tech: ["C++", "Binary File I/O", "GitHub", "Kanban", "SDLC", "Testing"],
    highlights: [
      "Designed and implemented a reservation + check-in workflow aligned with real-world constraints.",
      "Produced requirements + design documentation (UI, architecture, detailed design) with explicit tradeoffs.",
      "Implemented persistent data handling with binary file I/O; performed integration + unit testing (80%+ statement coverage).",
      "Coordinated development via GitHub and Kanban to maintain transparency and consistency.",
    ],
    github: "https://github.com/saman-37/FerryReservationSystem.git",
    live: "https://github.com/saman-37/FerryReservationSystem?tab=readme-ov-file",
  },
  {
    title: "Squat Posture Classifier (Machine Learning)",
    impact:
      "KNN-based posture classifier using pose landmarks from video; reached ~80% accuracy through feature engineering and tuning.",
    tech: ["Python", "MediaPipe", "scikit-learn", "KNN", "Feature Engineering"],
    highlights: [
      "Built a KNN model to classify correct vs incorrect squat posture from video input.",
      "Extracted pose landmarks using MediaPipe for reliable frame-level features.",
      "Improved performance via feature engineering and model tuning to achieve ~80% accuracy.",
      "Designed the pipeline for consistent real-time feature extraction from pose estimates.",
    ],
    github: "https://github.com/saman-37/AI_PostureIdentifier.git",
    live: "https://www.linkedin.com/posts/saman37_sfu-cmpt310-artificialintelligence-activity-7359651788020465664-XEC1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADR5KSEBucanqyE5J5JereeW-DJsK4but_c",
  },
    {
    title: "Mobile Workout Tracking Application",
    impact:
      "Android fitness tracker with 3 workout modes (manual, GPS, and sensor-based inference) plus profiles and reliable local persistence.",
    tech: ["Kotlin", "Android Studio", "SQLite", "Google Maps API", "Sensors/ML"],
    highlights: [
      "Built interactive flows to record, view, and manage workouts with a clean UI.",
      "Integrated manual input, GPS tracking (Google Maps), and automatic activity inference using accelerometer signals.",
      "Added a profile module with camera/gallery image selection, privacy preferences, and unit settings.",
      "Improved reliability with SQLite storage + lifecycle-aware data handling for smooth persistence/retrieval.",
    ],
    github: "", 
    live: "", 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Projects</h2>
            <p className="text-white/70 mt-3 max-w-2xl">
              A few builds I’m proud of — focused on real features, clean UX, and solid engineering.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-white/20 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="text-white/70 mt-3 leading-relaxed">{p.impact}</p>
                </div>
              </div>

              {/* Tech chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full border border-white/15 bg-black/30 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-6 space-y-2 text-white/75 leading-relaxed list-disc pl-5">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={p.github}
                  className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition font-semibold"
                  target={p.github === "#" ? undefined : "_blank"}
                  rel={p.github === "#" ? undefined : "noreferrer"}
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 font-semibold"
                  target={p.live === "#" ? undefined : "_blank"}
                  rel={p.live === "#" ? undefined : "noreferrer"}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
