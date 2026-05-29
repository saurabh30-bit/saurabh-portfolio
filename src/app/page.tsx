"use client";

"use client";

import GitHubProjects from "@/components/GitHubProjects";
import Scene3D from "@/components/Scene3D";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-10 py-6 border-b border-[#000000] z-20 bg-background relative">
        <div className="text-body font-medium uppercase tracking-widest">
          PLATFORM: SAURABH
        </div>
        <div className="flex gap-8">
          <button className="text-body bg-transparent text-[#000000] border-none p-0 cursor-pointer hover:underline underline-offset-4">
            GALLERY
          </button>
          <button className="text-body bg-transparent text-[#000000] border-none p-0 cursor-pointer hover:underline underline-offset-4">
            EXHIBITIONS
          </button>
          <button className="text-body bg-transparent text-[#000000] border-none p-0 cursor-pointer hover:underline underline-offset-4">
            CONTACT
          </button>
        </div>
      </nav>

      {/* Hero Section with 3D Canvas */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center border-b border-[#000000] overflow-hidden">
        <Scene3D />
        
        <div className="relative z-10 text-center max-w-4xl px-6 pointer-events-none mix-blend-difference text-white">
          <h1 className="text-heading-sm uppercase">
            SAURABH SHINDE
          </h1>
          <p className="text-body-lg uppercase mt-4">
            SOFTWARE EXHIBITION
          </p>
          <p className="text-body mt-8 max-w-2xl mx-auto">
            Full-Stack Developer (he/him) passionate about building scalable web applications, real-time systems, and AI integrations. 
          </p>
        </div>
      </section>

      {/* Projects Exhibition Grid */}
      <section className="py-[72px] px-10 w-full max-w-[1600px] mx-auto flex-grow relative z-10 bg-background">
        <div className="flex justify-between items-end mb-[72px] border-b border-[#000000] pb-4">
          <h2 className="text-body-lg uppercase">
            Selected Works
          </h2>
          <span className="text-body uppercase">2023 — 2026</span>
        </div>
        
        <GitHubProjects />
      </section>

      {/* Footer */}
      <footer className="w-full py-10 px-10 border-t border-[#000000] flex justify-between items-center z-10 bg-background">
        <div className="text-caption uppercase">
          © {new Date().getFullYear()} SAURABH SHINDE. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/saurabh30-bit" target="_blank" rel="noreferrer" className="text-caption uppercase hover:underline">
            GITHUB
          </a>
          <a href="#" className="text-caption uppercase hover:underline">
            LINKEDIN
          </a>
        </div>
      </footer>
    </main>
  );
}
