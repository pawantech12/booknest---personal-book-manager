"use client";
import { BookOpen, BookCheck, BookMarked, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    reading: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/api/books");
        if (res.data.success) {
          const books = res.data.books;
          setBooks(books);

          // Calculate stats
          const total = books.length;
          const reading = books.filter((b) => b.status === "reading").length;
          const completed = books.filter(
            (b) => b.status === "completed"
          ).length;

          setStats({ total, reading, completed });
        }
      } catch (error) {
        console.error("Error fetching books stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-8 px-6 py-10">
      {/* heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Track your reading journey and manage your book collection.
        </p>
      </div>

      {/* stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Books */}
        <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Books</p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stats.total}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Your complete library collection
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition">
              <BookOpen size={20} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* Currently Reading */}
        <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Currently Reading
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stats.reading}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Books you are reading now
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition">
              <BookMarked size={20} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* Completed */}
        <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completed</p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stats.completed}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Books you have finished
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 group-hover:bg-green-100 transition">
              <BookCheck size={20} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </div>

      {/* recent books */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-3 py-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Your Books</h2>
            <p className="text-sm text-gray-500">
              Recently added or currently reading
            </p>
          </div>

          <Link
            href={"/dashboard/books"}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View All
          </Link>
        </div>

        {/* Book List */}
        <div className="space-y-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:scale-[1.01]"
            >
              {/* Book Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  book.status === "completed"
                    ? "bg-green-50"
                    : book.status === "reading"
                    ? "bg-indigo-50"
                    : "bg-yellow-50"
                }`}
              >
                <Plus
                  className={`w-5 h-5 ${
                    book.status === "completed"
                      ? "text-green-600"
                      : book.status === "reading"
                      ? "text-indigo-600"
                      : "text-yellow-600"
                  }`}
                />
              </div>

              {/* Book Info */}
              <div className="flex-1 min-w-0">
                <p className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {book.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  by {book.author}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {book.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status + Action */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2 sm:mt-0">
                <span
                  className={`px-4 py-1 rounded-full text-xs font-semibold shadow-sm ${
                    book.status === "completed"
                      ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                      : book.status === "reading"
                      ? "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800"
                      : "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800"
                  }`}
                >
                  {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                </span>

                <button className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition shadow-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
