"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how" },
    { name: "Dashboard", href: "#dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-600 transition hover:text-indigo-600"
            >
              {link.name}

              {/* animated underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open Menu"
                className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="mt-8 flex flex-col gap-8">
                {/* Mobile Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  BookNest
                </Link>

                {/* Mobile Links */}
                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium text-gray-700 transition hover:text-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link href="/signup" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
