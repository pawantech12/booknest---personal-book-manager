"use client";

import Link from "next/link";
import { BookOpen, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/30 to-white" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
                <BookOpen className="h-5 w-5" />
              </div>

              <span className="text-lg font-semibold text-gray-900">
                BookNest
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              BookNest helps readers organize their personal library, track
              reading progress, and manage books with clarity and simplicity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-indigo-600 transition">
                  Features
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-indigo-600 transition">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-indigo-600 transition">
                  Manage Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Account
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/login"
                  className="hover:text-indigo-600 transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="hover:text-indigo-600 transition"
                >
                  Create Account
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-indigo-600 transition">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Connect
            </h4>

            <p className="mt-4 text-sm text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-indigo-600 hover:border-indigo-200 transition"
              >
                <Github className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-indigo-600 hover:border-indigo-200 transition"
              >
                <Twitter className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-indigo-600 hover:border-indigo-200 transition"
              >
                <Linkedin className="h-4 w-4" />
              </Link>

              <Link
                href="mailto:contact@booknest.app"
                className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-indigo-600 hover:border-indigo-200 transition"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BookNest. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-indigo-600 transition">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:text-indigo-600 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
