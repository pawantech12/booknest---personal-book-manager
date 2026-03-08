"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how" },
    { name: "Dashboard", href: "#dashboard" },
  ];

  return (
    <div>
      <header className="sticky top-0 z-30 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-sm">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              BookNest
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-gray-600 transition hover:text-indigo-600"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="rounded-lg bg-indigo-600 px-5 text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed min-h-screen  inset-0 z-70 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-50 min-h-screen  w-72 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-8">
          {/* Close Button */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 "
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                BookNest
              </span>
            </Link>
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-5 mt-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 transition hover:text-indigo-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-4">
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
