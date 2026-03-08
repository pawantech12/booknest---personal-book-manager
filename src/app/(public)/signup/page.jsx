"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/auth/signup", data);

      toast.success(res.data.message);

      router.push("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-600 p-10 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <BookOpen className="h-5 w-5" />
              </div>

              <span className="text-lg font-semibold">BookNest</span>
            </div>

            <h1 className="mt-10 text-3xl font-bold leading-snug">
              Start Your
              <br />
              Reading Journey
            </h1>

            <p className="mt-4 text-indigo-100">
              Create your personal reading space. Organize books, track
              progress, and build a library that grows with you.
            </p>
          </div>

          <div className="text-sm text-indigo-100">
            Join readers who keep their book collection organized and simple.
          </div>
        </div>

        <div className="flex flex-col justify-center px-8 py-12 lg:px-12">
          <div className="mx-auto w-full max-w-md">
            {/* heading */}
            <h2 className="text-2xl font-bold text-gray-900">
              Create Your Account
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Sign up to start managing your personal book collection.
            </p>

            {/* form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/,
                        message:
                          "Password must contain uppercase, lowercase and number",
                      },
                    })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* confirm password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>

                <div className="relative mt-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* terms */}
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-indigo-600 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-indigo-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              {/* signup button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                )}
              </button>
            </form>

            {/* login link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
