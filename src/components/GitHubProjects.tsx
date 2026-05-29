"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaCode } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/saurabh30-bit/repos?sort=updated&per_page=6");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <motion.a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group block h-full"
        >
          <div className="bg-card text-card-foreground border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary transition-colors duration-300 relative overflow-hidden shadow-lg hover:shadow-primary/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold font-sans text-primary group-hover:text-primary-foreground transition-colors line-clamp-1">
                {repo.name}
              </h3>
              <FaExternalLinkAlt size={16} className="text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
            
            <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
              {repo.description || "No description provided."}
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mt-auto pt-4 border-t border-border">
              {repo.language && (
                <div className="flex items-center gap-1">
                  <FaCode size={14} className="text-blue-400" />
                  <span>{repo.language}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <FaStar size={14} className="text-yellow-400" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeBranch size={14} className="text-green-400" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
