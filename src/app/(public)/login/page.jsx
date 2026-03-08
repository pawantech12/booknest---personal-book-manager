"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/auth/login", data);

      if (res.data.success) {
        toast.success(res.data.message || "Login Successful");

        router.push("/dashboard");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 md:py-12 py-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-600 p-10 max-sm:p-5 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <BookOpen className="h-5 w-5" />
              </div>

              <span className="text-lg font-semibold">BookNest</span>
            </div>

            <h1 className="mt-10 text-3xl font-bold leading-snug">
              Your Personal
              <br />
              Reading Companion
            </h1>

            <p className="mt-4 text-indigo-100">
              Manage your book collection, track reading progress, and organize
              your library with clarity and simplicity.
            </p>
          </div>

          <div className="text-sm text-indigo-100">
            Trusted by readers who value clarity over clutter.
          </div>
        </div>

        <div className="flex flex-col justify-center px-8 py-6 md:py-12 lg:px-12">
          <div className="mx-auto w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>

            <p className="mt-2 text-sm text-gray-600">
              Login to manage your personal book collection.
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                />
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>

                <Link
                  href="#"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
              >
                {isSubmitting ? "Logging in..." : "Login to BookNest"}
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
