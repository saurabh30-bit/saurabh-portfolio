"use client";

import { useEffect, useState } from "react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/saurabh30-bit/repos?sort=updated");
        if (response.ok) {
          const data = await response.json();
          // Filter out forks and keep the top 6 recently updated projects
          const filtered = data
            .filter((repo: any) => !repo.fork)
            .slice(0, 6);
          setRepos(filtered);
        }
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 min-h-[200px] animate-pulse">
            <div className="h-4 bg-mist rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-whisper-gray rounded w-full mb-2"></div>
            <div className="h-3 bg-whisper-gray rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          key={repo.id}
          className="group block"
        >
          {/* Information Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-5 hover:shadow-xl transition-shadow flex flex-col h-full border border-mist/30">
            <h3 className="text-body-lg font-medium text-midnight-ink line-clamp-1 mb-2">
              {repo.name}
            </h3>
            
            <p className="text-body text-graphite line-clamp-2 flex-grow mb-4 text-sm">
              {repo.description || "No description provided."}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              {repo.language && (
                <span className="bg-lavender-mist text-kraken-violet px-2 py-1 rounded-full text-caption font-medium">
                  {repo.language}
                </span>
              )}
              
              <div className="flex items-center gap-1.5 bg-[rgba(20,158,97,0.16)] text-success-green px-1.5 py-0.5 rounded-[6px]">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-caption font-medium">{repo.stargazers_count}</span>
              </div>
              
              <div className="flex items-center gap-1.5 bg-whisper-gray text-graphite px-1.5 py-0.5 rounded-[6px]">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21ZM10 10C10 10.3725 9.89804 10.7214 9.71988 11.0267L14.7072 13.5204C15.0197 13.1931 15.4851 13 16 13C17.1046 13 18 13.8954 18 15C18 16.1046 17.1046 17 16 17C14.8954 17 14 16.1046 14 15C14 14.6275 14.102 14.2786 14.2801 13.9733L9.29285 11.4796C8.98028 11.8069 8.51493 12 8 12C6.89543 12 6 11.1046 6 10C6 8.89543 6.89543 8 8 8C9.10457 8 10 8.89543 10 10ZM17.2929 10.4796C17.6054 10.1523 18.0708 10 18.5708 10C19.6753 10 20.5708 10.8954 20.5708 12C20.5708 13.1046 19.6753 14 18.5708 14C18.0708 14 17.6054 13.8477 17.2929 13.5204L12.3056 16.0141C12.4276 16.3262 12.5 16.6575 12.5 17C12.5 18.1046 11.6046 19 10.5 19C9.39543 19 8.5 18.1046 8.5 17C8.5 15.8954 9.39543 15 10.5 15C11.0001 15 11.4654 15.1523 11.778 15.4796L16.7653 12.9859C16.6433 12.6738 16.5708 12.3425 16.5708 12C16.5708 10.8954 17.4663 10 18.5708 10Z"/>
                </svg>
                <span className="text-caption font-medium">{repo.forks_count}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
