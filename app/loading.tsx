"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Animated Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-12 w-12 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Loading Profiles
            </h1>
          </div>
          <p className="text-slate-300 text-lg">
            Fetching developer profiles...
          </p>
        </div>

        {/* Skeleton Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 space-y-4 animate-pulse"
            >
              {/* Avatar Skeleton */}
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 animate-shimmer"></div>
              </div>

              {/* Name Skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-md mx-auto w-32 animate-shimmer"></div>
                <div className="h-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-md mx-auto w-24 animate-shimmer"></div>
              </div>

              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-md animate-shimmer"></div>
                <div className="h-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-md w-5/6 animate-shimmer"></div>
              </div>

              {/* Tags Skeleton */}
              <div className="flex gap-2 justify-center flex-wrap pt-2">
                {[1, 2, 3].map((tag) => (
                  <div
                    key={tag}
                    className="h-6 w-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-shimmer"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Loading Progress Indicator */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Loading content</span>
            <span className="text-cyan-400 font-semibold">In Progress</span>
          </div>
          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-shimmer rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
          background: linear-gradient(
            90deg,
            rgba(51, 65, 85, 0.5) 0%,
            rgba(71, 85, 105, 0.5) 50%,
            rgba(51, 65, 85, 0.5) 100%
          );
        }
      `}</style>
    </div>
  );
};

export default Loading;
