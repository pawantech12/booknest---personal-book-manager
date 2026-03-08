"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  BookOpen,
  LayoutDashboard,
  PlusCircle,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Books",
      href: "/dashboard/books",
      icon: BookOpen,
    },
  ];

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");

      toast.success(res.data.message);

      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };
  return (
    <div className="flex h-full bg-gray-50">
      {/* SIDEBAR */}
      <div>
        {/* MOBILE TOPBAR */}

        {/* MOBILE OVERLAY */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside
          className={`fixed z-50 h-screen w-72 transform border-r border-gray-200 bg-white/90 backdrop-blur-xl p-6 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static flex flex-col justify-between`}
        >
          {/* MOBILE CLOSE */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <span className="text-sm font-semibold text-gray-900">Menu</span>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* BRAND */}
          <Link
            href="/dashboard"
            className="flex items-center gap-3 mb-10 group"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
              <BookOpen size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">BookNest</p>
              <p className="text-xs text-gray-500">Personal Reading Manager</p>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-2 text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
                >
                  {/* active indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-indigo-600" />
                  )}

                  <Icon
                    size={18}
                    className={`${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-500 group-hover:text-indigo-600"
                    }`}
                  />

                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* USER SECTION */}
          <div className="mt-auto pt-6 border-gray-200 border-t">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <User size={16} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">Reader</p>

                <p className="text-xs text-gray-500">Book Enthusiast</p>
              </div>
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="group flex w-full items-center gap-3 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition border border-gray-200"
            >
              <LogOut
                size={18}
                className="text-gray-500 group-hover:text-red-600"
              />
              Logout
            </button>
          </div>
        </aside>
      </div>
      {/* PAGE CONTENT */}
      <main className="flex-1">
        <header className="flex items-center justify-between border-b bg-white px-5 py-4 lg:hidden">
          <Link href="/dashboard" className="flex items-center gap-2">
            <BookOpen className="text-indigo-600" />
            <span className="font-semibold text-gray-900">BookNest</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>
        </header>
        {children}
      </main>
    </div>
  );
}
