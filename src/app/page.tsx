"use client";

import GitHubProjects from "@/components/GitHubProjects";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen relative bg-whisper-gray flex flex-col font-kraken-product">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-10 py-4 z-20 bg-pure-white sticky top-0 shadow-sm">
        <div className="text-subheading font-bold text-midnight-ink tracking-tight font-kraken-brand">
          SAURABH SHINDE
        </div>
        <div className="flex items-center gap-2">
          <a href="#projects" className="text-body text-midnight-ink px-4 py-2 hover:border-b-2 border-kraken-violet transition-all">
            Projects
          </a>
          <a href="https://github.com/saurabh30-bit" target="_blank" rel="noreferrer" className="text-body font-medium text-graphite px-3 py-2 bg-transparent hover:bg-whisper-gray rounded-[10px] transition-colors">
            GitHub
          </a>
          <button className="bg-kraken-violet text-pure-white text-body font-medium rounded-xl px-4 py-2 ml-4 hover:opacity-90 transition-opacity shadow-sm">
            Contact Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-whisper-gray">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none">
          <div className="max-w-2xl text-left pointer-events-auto bg-pure-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-pure-white">
            <div className="inline-block mb-4 px-3 py-1 bg-lavender-mist text-kraken-violet text-caption font-medium rounded-full">
              Full-Stack Developer
            </div>
            <h1 className="text-display font-bold text-midnight-ink mb-6">
              Building precise, scalable digital platforms.
            </h1>
            <p className="text-body-lg text-graphite mb-8 max-w-xl leading-relaxed">
              Software engineer specializing in modern web applications, real-time systems, and AI integrations. Based on principles of clean architecture and high-performance engineering.
            </p>
            <div className="flex gap-4">
              <button className="bg-kraken-violet text-pure-white text-body font-medium rounded-xl px-5 py-2.5 hover:opacity-90 transition-opacity shadow-sm">
                View Portfolio
              </button>
              <button className="bg-pure-white text-midnight-ink border border-mist text-body font-medium rounded-xl px-5 py-2.5 hover:bg-whisper-gray transition-colors shadow-sm">
                Read Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Exhibition Grid */}
      <section id="projects" className="py-20 px-6 lg:px-10 w-full max-w-7xl mx-auto flex-grow relative z-10 bg-whisper-gray">
        <div className="mb-12">
          <h2 className="text-heading-lg font-bold text-midnight-ink mb-2">
            Selected Repositories
          </h2>
          <p className="text-body-lg text-graphite">
            Recent open-source contributions and personal projects.
          </p>
        </div>
        
        <GitHubProjects />
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-10 border-t border-mist bg-pure-white flex flex-col md:flex-row justify-between items-center z-10 mt-auto">
        <div className="text-body text-graphite mb-4 md:mb-0">
          © {new Date().getFullYear()} Saurabh Shinde. Built with Next.js & Tailwind v4.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/saurabh30-bit" target="_blank" rel="noreferrer" className="text-body text-midnight-ink hover:text-kraken-violet transition-colors">
            GitHub
          </a>
          <a href="#" className="text-body text-midnight-ink hover:text-kraken-violet transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
