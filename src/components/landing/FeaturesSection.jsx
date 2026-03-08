"use client";

import { BookOpen, Tags, BarChart3, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Organize Your Book Collection",
      description:
        "Add, edit, and manage your personal library with a clean and intuitive interface designed for book lovers.",
    },
    {
      icon: Tags,
      title: "Smart Tags & Filters",
      description:
        "Categorize books with tags and instantly filter your collection to find exactly what you're looking for.",
    },
    {
      icon: BarChart3,
      title: "Track Reading Progress",
      description:
        "Monitor your reading journey by marking books as Want to Read, Reading, or Completed.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Personal Library",
      description:
        "Your book collection is private and protected with secure authentication and user-based access control.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/30 to-white" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            Features
          </h2>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Manage Your Reading
            </span>
          </h3>

          <p className="mt-5 text-lg text-gray-600">
            BookNest helps you organize your personal library, track reading
            progress, and stay focused on what matters — the joy of reading.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
                <feature.icon className="h-6 w-6" />
              </div>

              <h4 className="mt-5 text-lg font-semibold text-gray-900">
                {feature.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
