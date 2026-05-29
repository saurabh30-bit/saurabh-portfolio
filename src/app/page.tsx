"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import GitHubProjects from "@/components/GitHubProjects";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* Hero Section */}
        <section className="flex flex-col justify-center min-h-[60vh] py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-mono mb-4 text-lg">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold font-sans text-foreground mb-4 tracking-tight">
              Saurabh Shinde.
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold font-sans text-gray-400 mb-8 tracking-tight">
              I build scalable software.
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              I am a <span className="text-primary font-semibold">Full-Stack Developer</span> (he/him) passionate about building scalable web applications, real-time systems, and AI integrations. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            
            <div className="flex gap-6 items-center">
              <a href="https://github.com/saurabh30-bit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <FaGithub size={28} />
              </a>
              <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <FaEnvelope size={28} />
              </a>
              {/* Add LinkedIn/Twitter if applicable */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20" id="projects">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
              Recent Projects
            </h2>
            <div className="h-[1px] bg-border flex-grow ml-4 max-w-sm" />
          </motion.div>
          
          <GitHubProjects />
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 font-mono text-sm border-t border-border mt-20">
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
          <p className="mt-2">Dynamically fetching data from GitHub API</p>
        </footer>
      </div>
    </main>
  );
}
