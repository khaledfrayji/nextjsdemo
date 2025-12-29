"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-12 text-white text-center">
            <div className="mb-4 flex justify-center">
              <div className="text-7xl font-bold opacity-80">404</div>
            </div>
            <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
            <p className="text-amber-100 text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="px-6 py-8">
            <div className="mb-8 text-center">
              <p className="text-slate-600 text-base leading-relaxed">
                We couldn't find the resource you requested. It may have been
                deleted, moved, or the URL might be incorrect. Let's get you
                back on track.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Check the URL
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Make sure the address is correct and try again.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SearchIcon />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Use search
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Search for what you're looking for using our search feature.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HomeIcon />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Go to homepage
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Return to the main page and browse from there.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <HomeIconSmall />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <BackIcon />
                Go Back
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-4 font-semibold">
                Helpful Links:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                >
                  About
                </Link>
                <a
                  href="https://example.com/support"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                >
                  Support
                </a>
                <a
                  href="https://example.com/docs"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                >
                  Documentation
                </a>
                <a
                  href="https://example.com/contact"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                >
                  Contact Us
                </a>
                <a
                  href="https://example.com/status"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                >
                  System Status
                </a>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Still having trouble?</strong> Contact our support team
                at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Error Code: 404 Not Found</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m-4 4l-4-4"
      />
    </svg>
  );
}

function HomeIconSmall() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m-4 4l-4-4"
      />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}
