// components/WarningBanner.jsx — Sticky top warning shown on every page
//
// Renders above the NavBar in App.jsx so it persists across all routes.
// Includes a dismiss button that hides it for the session (React state — no localStorage).

import { useState } from "react";

export default function WarningBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="sticky top-0 z-[60] w-full bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 border-b border-red-200 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-5 py-3 text-sm sm:text-base">
        <div className="flex items-center gap-3 min-w-0">
          {/* Red warning icon */}
          <div className="bg-red-100 rounded-full p-1.5">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L1 21h22L12 2zm0 4.6l8.5 14.4h-17L12 6.6zm-1 5.4v4h2v-4h-2zm0 5v2h2v-2h-2z" />
            </svg>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-bold text-red-700 text-sm sm:text-base">
             DISCLAIMER
            </span>
            <p className="text-gray-700 leading-relaxed">
              This is a student project for educational purposes only. Not
              affiliated with, endorsed by, or connected to Coinbase Inc.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss warning banner"
          className="shrink-0 p-1.5 rounded-full bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-red-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}