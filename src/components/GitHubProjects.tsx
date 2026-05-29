"use client";

import { useEffect, useState } from "react";

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
      <div className="flex justify-center items-center py-20 text-body">
        [ LOADING EXHIBITION... ]
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {repos.map((repo) => (
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          key={repo.id}
          className="group block"
        >
          {/* Artwork Frame */}
          <div className="border border-[#000000] p-0 mb-4 bg-white relative h-64 overflow-hidden flex flex-col justify-center items-center group-hover:bg-[#f5f5f5] transition-colors">
            <div className="text-body-lg text-center px-4 line-clamp-1">{repo.name}</div>
            {repo.language && (
              <div className="text-caption mt-2 uppercase tracking-widest">
                {repo.language}
              </div>
            )}
          </div>
          
          {/* Artwork Information */}
          <div className="flex flex-col gap-2">
            <h3 className="text-body font-medium uppercase tracking-wide">
              {repo.name}
            </h3>
            <p className="text-body-sm line-clamp-2">
              {repo.description || "Untitled."}
            </p>
            <div className="text-caption uppercase mt-2">
              STARS: {repo.stargazers_count} — FORKS: {repo.forks_count}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
