import React from "react";
import projects from "@/lib/projects.json";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const DevID = Number(id);
  const devProjects = projects.filter((p) => p.developerId === DevID);

  if (devProjects.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-white">No Projects</h1>
            <p className="text-lg text-slate-300">
              This developer hasn't shared any projects yet.
            </p>
          </div>
          <Link href={`/dashboard/devs/${id}`}>
            <button className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-3 bg-gray-900 rounded-lg text-white font-semibold hover:text-cyan-300 transition duration-300">
                Back to Profile
              </div>
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href={`/dashboard/devs/${id}`}>
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            <span className="font-semibold">Back to Profile</span>
          </button>
        </Link>

        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-slate-300">
            Explore the amazing projects built by this developer (
            {devProjects.length})
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devProjects.map((proj) => (
            <div
              key={proj.id}
              className="group h-full p-6 border border-slate-700/50 rounded-xl bg-slate-700/20 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Project Title */}
              <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                {proj.name}
              </h2>

              {/* Description */}
              <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed text-sm md:text-base">
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3 pt-4 border-t border-slate-700/30">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.techStack &&
                    proj.techStack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full hover:bg-cyan-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
