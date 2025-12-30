import devs from "@/lib/devs.json";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer Profiles
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover talented developers from our community. Explore profiles,
            skills, and connect with top talent.
          </p>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devs.map((dev) => (
            <Link key={dev.id} href={`/devs/${dev.id}`}>
              <div className="group h-full p-6 border border-slate-700/50 rounded-xl bg-slate-700/20 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Header with name and role */}
                <div className="space-y-2 mb-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {dev.name}
                  </h2>
                  <p className="text-lg text-cyan-400 font-semibold">
                    {dev.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                  {dev.bio}
                </p>

                {/* Bottom gradient accent */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full"></div>
              </div>
            </Link>
          ))}
        </div>

    
      </div>
    </main>
  );
};

export default page;
