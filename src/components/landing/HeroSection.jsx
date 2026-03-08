"use client";

import Link from "next/link";
import { BookOpen, Library, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* small badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-6">
              <Library className="h-4 w-4" />
              Personal Book Management Made Simple
            </div>

            {/* heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Organize Your Reading
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>

            {/* description */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              BookNest helps you manage your personal book collection with
              simplicity and clarity. Track what you want to read, what you're
              reading, and what you've completed — all in one elegant dashboard.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Login
              </Link>
            </div>

            {/* trust text */}
            <p className="mt-6 text-sm text-gray-500">
              Designed for readers who want clarity, not clutter.
            </p>
          </div>

          {/* RIGHT SIDE - DASHBOARD PREVIEW */}
          <div className="relative">
            {/* glow effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-40 blur-2xl" />

            {/* mock dashboard */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl p-6">
              {/* header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-gray-800">
                  Your Reading Dashboard
                </h3>

                <BookOpen className="h-5 w-5 text-indigo-600" />
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-indigo-50 p-3 text-center">
                  <p className="text-lg font-semibold text-indigo-600">24</p>
                  <p className="text-xs text-gray-500">Books</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-3 text-center">
                  <p className="text-lg font-semibold text-purple-600">5</p>
                  <p className="text-xs text-gray-500">Reading</p>
                </div>

                <div className="rounded-lg bg-green-50 p-3 text-center">
                  <p className="text-lg font-semibold text-green-600">12</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>

              {/* book list preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                  <span className="text-sm font-medium text-gray-700">
                    Atomic Habits
                  </span>
                  <span className="text-xs rounded-full bg-indigo-100 px-2 py-1 text-indigo-600">
                    Reading
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                  <span className="text-sm font-medium text-gray-700">
                    Deep Work
                  </span>
                  <span className="text-xs rounded-full bg-green-100 px-2 py-1 text-green-600">
                    Completed
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
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
