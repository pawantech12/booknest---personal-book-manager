"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Card Container */}
        <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 p-4 sm:p-10 md:p-14 text-center shadow-xl">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30 mb-6">
            <BookOpen className="h-7 w-7 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Building Your
            <span className="block">Personal Reading Library Today</span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Organize your books, track your reading progress, and manage your
            entire collection in one clean and powerful dashboard.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-indigo-600 shadow-lg transition hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Login
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Free to start • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
