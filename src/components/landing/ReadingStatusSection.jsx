"use client";

import { BookMarked, BookOpenCheck, CheckCircle } from "lucide-react";

export default function ReadingStatusSection() {
  const statuses = [
    {
      icon: BookMarked,
      title: "Want to Read",
      description:
        "Save books you plan to read in the future and build your personal reading wishlist.",
      color: "from-gray-500 to-gray-700",
      bg: "bg-gray-50",
    },
    {
      icon: BookOpenCheck,
      title: "Currently Reading",
      description:
        "Track the books you're actively reading and stay focused on your reading goals.",
      color: "from-indigo-500 to-purple-600",
      bg: "bg-indigo-50",
    },
    {
      icon: CheckCircle,
      title: "Completed",
      description:
        "Celebrate your finished books and maintain a record of your completed reads.",
      color: "from-green-500 to-emerald-600",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/20 to-white" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            Reading Workflow
          </h2>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Track Every Step of
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Reading Journey
            </span>
          </h3>

          <p className="mt-5 text-lg text-gray-600">
            BookNest helps you stay organized by categorizing every book into a
            clear reading stage — from discovery to completion.
          </p>
        </div>

        {/* Status Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {statuses.map((status, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-gray-200 ${status.bg} p-8 shadow-sm transition hover:shadow-xl hover:-translate-y-1`}
            >
              {/* icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${status.color} text-white shadow-md`}
              >
                <status.icon className="h-7 w-7" />
              </div>

              {/* title */}
              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                {status.title}
              </h4>

              {/* description */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {status.description}
              </p>

              {/* decorative hover border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-indigo-200 transition"></div>
            </div>
          ))}
        </div>

        {/* workflow connector line */}
        <div className="mt-12 hidden md:flex items-center justify-center">
          <div className="h-1 w-40 bg-gradient-to-r from-gray-300 via-indigo-400 to-green-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
