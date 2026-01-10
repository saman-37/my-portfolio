"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      // For now: fake send so UI feels complete.
      // Next step: connect to Resend (real email).
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="text-white/70 leading-relaxed max-w-lg">
              Want to collaborate, discuss an opportunity, or just say hi? Send me a message —
              I usually reply within 24–48 hours.
            </p>

            <div className="space-y-2 text-white/80">
              <p>
                <span className="text-white/60">Email:</span>{" "}
                <a className="underline underline-offset-4" href="mailto:your@email.com">
                  your@email.com
                </a>
              </p>
              <p>
                <span className="text-white/60">LinkedIn:</span>{" "}
                <a className="underline underline-offset-4" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  linkedin.com/in/yourname
                </a>
              </p>
              <p>
                <span className="text-white/60">GitHub:</span>{" "}
                <a className="underline underline-offset-4" href="https://github.com" target="_blank" rel="noreferrer">
                  github.com/yourname
                </a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30 resize-none"
                placeholder="Tell me what you're working on..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl px-6 py-3 font-semibold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-300">Message sent! I’ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
