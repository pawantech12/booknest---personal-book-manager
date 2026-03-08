"use client";

import { UserPlus, BookPlus, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description:
        "Sign up securely in seconds and get access to your personal reading dashboard.",
    },
    {
      icon: BookPlus,
      title: "Add Your Books",
      description:
        "Add books with title, author, tags, and reading status to build your personal collection.",
    },
    {
      icon: BarChart3,
      title: "Track Your Reading",
      description:
        "Update your reading progress and manage your library with a clean, focused dashboard.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/40 to-white" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            How It Works
          </h2>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Manage Your Books in
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h3>

          <p className="mt-5 text-lg text-gray-600">
            BookNest simplifies the way you organize and track your reading
            journey — no clutter, just clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md">
                {index + 1}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <step.icon className="h-6 w-6" />
              </div>

              <h4 className="mt-6 text-lg font-semibold text-gray-900">
                {step.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
