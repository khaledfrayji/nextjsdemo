import devs from "@/lib/devs.json";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const devId = Number(id);
  const dev = devs.find((dev) => dev.id === devId);

  if (!dev) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-white">Not Found</h1>
            <p className="text-lg text-slate-300">
              The developer profile you're looking for doesn't exist.
            </p>
          </div>
          <Link href="/dashboard/users">
            <button className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-3 bg-gray-900 rounded-lg text-white font-semibold hover:text-cyan-300 transition duration-300">
                Back to Profiles
              </div>
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href="/dashboard/users">
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            <span className="font-semibold">Back to Profiles</span>
          </button>
        </Link>

        {/* Main Profile Card */}
        <div className="space-y-8 p-8 border border-slate-700/50 rounded-2xl bg-slate-700/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
          {/* Header Section */}
          <div className="space-y-4 pb-8 border-b border-slate-700/30">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {dev.name}
            </h1>
            <p className="text-2xl text-cyan-400 font-semibold">{dev.role}</p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>

          {/* Bio Section */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">About</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {dev.bio}
            </p>
          </div>

          {/* Additional Info Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-700/30">
            <div className="space-y-2 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300">
              <p className="text-sm text-slate-400 uppercase tracking-wide">
                ID
              </p>
              <p className="text-xl font-bold text-cyan-300">{dev.id}</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300">
              <p className="text-sm text-slate-400 uppercase tracking-wide">
                Status
              </p>
              <p className="text-xl font-bold text-emerald-400">Active</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300 col-span-2 md:col-span-1">
              <p className="text-sm text-slate-400 uppercase tracking-wide">
                Level
              </p>
              <p className="text-xl font-bold text-blue-400">Professional</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700/30">
            <button className="flex-1 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-3 bg-gray-900 rounded-lg text-white font-semibold hover:text-cyan-300 transition duration-300 text-center">
                Connect
              </div>
            </button>
            <Link href={`/devs/${id}/projects`} className="flex-1">
              <button className="w-full px-6 py-3 rounded-lg border border-cyan-400/50 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition duration-300">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
