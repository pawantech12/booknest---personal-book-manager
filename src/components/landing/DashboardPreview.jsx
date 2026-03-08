"use client";

import { BookOpen, BookCheck, BookMarked } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/40 to-white" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Product Dashboard
            </h2>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Clean Dashboard Built
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                For Focused Readers
              </span>
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              BookNest gives you a simple yet powerful dashboard where you can
              manage your book collection, track reading progress, and stay
              organized without distractions.
            </p>

            {/* features list */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-indigo-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Instantly view your entire personal book collection.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BookMarked className="h-5 w-5 text-purple-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Track books you want to read, are currently reading, or have
                  completed.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BookCheck className="h-5 w-5 text-green-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Update reading status quickly and keep your library organized.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE DASHBOARD PREVIEW */}
          <div className="relative">
            {/* glow background */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-40 blur-3xl" />

            {/* dashboard container */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl p-6">
              {/* dashboard header */}
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-800">
                  Your Reading Dashboard
                </h4>

                <span className="text-xs rounded-full bg-indigo-100 px-3 py-1 text-indigo-600">
                  BookNest
                </span>
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-indigo-50 p-4 text-center">
                  <p className="text-lg font-semibold text-indigo-600">24</p>
                  <p className="text-xs text-gray-500">Total Books</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-4 text-center">
                  <p className="text-lg font-semibold text-purple-600">6</p>
                  <p className="text-xs text-gray-500">Reading</p>
                </div>

                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <p className="text-lg font-semibold text-green-600">12</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>

              {/* book list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 hover:bg-gray-50 transition">
                  <span className="text-sm font-medium text-gray-700">
                    Atomic Habits
                  </span>

                  <span className="text-xs rounded-full bg-indigo-100 px-2 py-1 text-indigo-600">
                    Reading
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 hover:bg-gray-50 transition">
                  <span className="text-sm font-medium text-gray-700">
                    Deep Work
                  </span>

                  <span className="text-xs rounded-full bg-green-100 px-2 py-1 text-green-600">
                    Completed
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 hover:bg-gray-50 transition">
                  <span className="text-sm font-medium text-gray-700">
                    The Psychology of Money
                  </span>

                  <span className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-600">
                    Want to Read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
