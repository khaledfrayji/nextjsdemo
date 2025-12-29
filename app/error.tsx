"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [errorId, setErrorId] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = `ERR-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;
    setErrorId(id);

    logErrorToService({
      id,
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== "undefined" ? navigator.userAgent : "N/A",
      url: typeof window !== "undefined" ? window.location.href : "N/A",
    });

    setIsMounted(true);
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <AlertIcon />
              <h1 className="text-3xl font-bold">Oops! Something Went Wrong</h1>
            </div>
            <p className="text-red-100 text-sm">
              We&apos;ve been notified and our team is investigating this issue.
            </p>
          </div>

          <div className="px-6 py-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                What happened?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {error.message ||
                  "An unexpected error occurred. Please try again or contact support."}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Error Reference ID</p>
              <p className="font-mono text-sm text-slate-900 break-all">
                {isMounted ? errorId : "Loading..."}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Share this ID with support for faster resolution
              </p>
            </div>

            {isDevelopment && error.stack && (
              <details className="mb-6">
                <summary className="cursor-pointer text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-2">
                  <ChevronIcon />
                  Stack Trace (Development Only)
                </summary>
                <pre className="mt-3 bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto text-xs whitespace-pre-wrap break-words max-h-48">
                  {error.stack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <RetryIcon />
                Try Again
              </button>
              <Link
                href="/"
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <HomeIcon />
                Return Home
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-3">
                <strong>Need help?</strong> Our support team is here for you:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:support@example.com"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  ✉ support@example.com
                </a>
                <a
                  href="https://example.com/status"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  📊 System Status
                </a>
                <a
                  href="https://example.com/docs"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  📚 Documentation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-400 text-sm">
          <p>
            Error logged at{" "}
            {isMounted ? new Date().toLocaleTimeString() : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}

function logErrorToService(errorData: any) {
  try {
    if (process.env.NODE_ENV === "production") {
      fetch("/api/errors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(errorData),
      }).catch(() => {});
    }

    console.error("[Error Logger]", errorData);
  } catch (e) {
    console.error("Failed to log error:", e);
  }
}

function AlertIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronIcon() {
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function RetryIcon() {
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
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function HomeIcon() {
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
