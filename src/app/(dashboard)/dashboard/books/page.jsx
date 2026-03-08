"use client";

import Link from "next/link";
import { BookOpen, Plus, Search, Pencil, Trash2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const {
    register: editRegister,
    handleSubmit: editSubmit,
    reset: editReset,
    formState: { isSubmitting: editIsSubmitting },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("/api/books");

        setBooks(res.data.books);
      } catch (error) {
        console.log("Error while fetching books: ", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (selectedBook) {
      editReset({
        title: selectedBook.title,
        author: selectedBook.author,
        status: selectedBook.status,
        tags: selectedBook.tags.join(", "),
      });
    }
  }, [selectedBook, editReset]);

  const onAddBook = async (data) => {
    try {
      const payload = {
        ...data,
        tags: data.tags.split(",").map((t) => t.trim()),
      };

      const res = await axios.post("/api/books/add", payload);

      toast.success(res.data.message);
      // update UI
      setBooks((prev) => [res.data.book, ...prev]);

      setOpenModal(false);

      reset();
    } catch (error) {
      toast.error("Failed to add book");
    }
  };

  const onEditBook = async (data) => {
    try {
      const payload = {
        ...data,
        tags: data.tags.split(",").map((t) => t.trim()),
      };

      const res = await axios.put(
        `/api/books/update/${selectedBook._id}`,
        payload
      );

      toast.success(res.data.message);
      // update UI
      setBooks((prev) =>
        prev.map((book) =>
          book._id === selectedBook._id ? res.data.book : book
        )
      );

      setEditModal(false);
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const res = await axios.delete(`/api/books/delete/${selectedBook._id}`);

      toast.success(res.data.message);
      // remove from UI
      setBooks((prev) => prev.filter((book) => book._id !== selectedBook._id));

      setDeleteModal(false);
    } catch (error) {
      toast.error("Delete failed");
    } finally {
      setDeleteLoading(false);
    }
  };

  const filteredBooks = books.filter((book) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText) ||
      book.tags.some((tag) => tag.toLowerCase().includes(searchText));

    const matchesStatus =
      statusFilter === "all" || book.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Your Book Collection
            </h1>

            <p className="text-sm text-gray-600 mt-1">
              Manage and track all your books in one place.
            </p>
          </div>

          {/* Add Book Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Add Book
          </button>

          {/* Modal */}
          {openModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              {/* Modal Box */}
              <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl animate-[modal_0.25s_ease]">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5">
                  <div>
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                      Add New Book
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Add a new book to your personal collection.
                    </p>
                  </div>

                  <button
                    onClick={() => setOpenModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-xl"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form */}
                <div className="px-6 py-7">
                  <form
                    className="space-y-3"
                    onSubmit={handleSubmit(onAddBook)}
                  >
                    {/* Title */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Book Title
                      </label>

                      <Input
                        placeholder="Atomic Habits"
                        {...register("title")}
                        className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 text-sm h-11 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                      />

                      <p className="text-xs text-gray-500 mt-1">
                        Enter the name of the book
                      </p>
                    </div>

                    {/* Author */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Author Name
                      </label>

                      <Input
                        placeholder="James Clear"
                        {...register("author")}
                        className="mt-2 w-full rounded-md h-11 border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                      />

                      <p className="text-xs text-gray-500 mt-1">
                        Who wrote this book
                      </p>
                    </div>

                    {/* Status */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Reading Status
                      </label>

                      <div className="mt-2 relative">
                        <select
                          {...register("status")}
                          className="w-full appearance-none rounded-md h-11 border border-gray-200 bg-white px-4 pr-10 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select reading status
                          </option>
                          <option value="want">📖 Want to Read</option>
                          <option value="reading">📘 Reading</option>
                          <option value="completed">✅ Completed</option>
                        </select>

                        {/* custom dropdown arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 mt-1">
                        Track your reading progress
                      </p>
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Tags
                      </label>

                      <Input
                        placeholder="Productivity, Finance, Self Help"
                        {...register("tags")}
                        className="mt-2 w-full rounded-md h-11 border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                      />

                      <p className="text-xs text-gray-500 mt-1">
                        Separate tags with commas
                      </p>
                    </div>
                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-6 pt-4 bg-gray-50">
                      <Button
                        variant="outline"
                        onClick={() => setOpenModal(false)}
                        className="rounded-md px-4 py-5 border border-gray-200"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md px-4 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white"
                      >
                        {isSubmitting ? "Adding book..." : "Add Book"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search + Filter */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search books, authors, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm shadow-sm transition
      placeholder:text-gray-400
      focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            {/* Filter Label */}
            <span className="hidden sm:block text-sm font-medium text-gray-500">
              Filter
            </span>

            <div className="relative">
              <select
                className="w-full appearance-none rounded-md h-11 border border-gray-200 bg-white px-4 pr-10 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="" disabled>
                  All Status
                </option>
                <option value="all">All Books</option>
                <option value="want">Want to Read</option>
                <option value="reading">Currently Reading</option>
                <option value="completed">Completed</option>
              </select>

              {/* custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Book Table */}
        {filteredBooks.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                className="group relative rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Book Info */}
                <div className="flex flex-col justify-between h-full">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p className="text-gray-600 mb-3 text-sm md:text-base">
                    <span className="font-medium text-gray-800">Author:</span>{" "}
                    {book.author}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium uppercase tracking-wide hover:bg-indigo-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 w-fit shadow-sm ${
                      book.status === "reading"
                        ? "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800"
                        : book.status === "completed"
                        ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                  </span>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center mt-auto text-gray-400 text-xs md:text-sm">
                    <span>
                      Added by you •{" "}
                      {book.createdAt
                        ? new Date(book.createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Unknown date"}
                    </span>

                    {/* Actions */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          setSelectedBook(book);
                          setEditModal(true);
                        }}
                        className="bg-indigo-50 text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition shadow"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedBook(book);
                          setDeleteModal(true);
                        }}
                        className="bg-red-50 text-red-600 p-2 rounded-full hover:bg-red-100 transition shadow"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center mt-12 py-10 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
            {/* Optional Illustration / Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c.828 0 1.5.672 1.5 1.5S12.828 11 12 11s-1.5-.672-1.5-1.5S11.172 8 12 8zm0 5c2.21 0 4-1.79 4-4S14.21 5 12 5 8 6.79 8 9s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>

            {/* Main Message */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              No books found
            </h3>

            {/* Subtext */}
            <p className="text-sm text-gray-500 mb-4 text-center max-w-xs">
              Try adjusting your search or filter to find the books you are
              looking for.
            </p>

            {/* Call-to-Action Button */}
            <button
              onClick={() => {
                setSearch("");
                setStatusFilter("all");
              }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
              Browse All Books
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {editModal && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <Pencil className="h-5 w-5 text-indigo-600" />
                  Edit Book
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Update book details.
                </p>
              </div>

              <button
                onClick={() => setEditModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="px-6 py-7">
              <form className="space-y-3" onSubmit={editSubmit(onEditBook)}>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Book Title
                  </label>

                  <Input
                    {...editRegister("title")}
                    className="mt-2 w-full rounded-md border border-gray-200 h-11 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Author Name
                  </label>

                  <Input
                    {...editRegister("author")}
                    className="mt-2 w-full rounded-md border border-gray-200 h-11 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Reading Status
                  </label>

                  <div className="mt-2 relative">
                    <select
                      className="w-full appearance-none rounded-md h-11 border border-gray-200 bg-white px-4 pr-10 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                      {...editRegister("status")}
                    >
                      <option value="" disabled>
                        Select reading status
                      </option>
                      <option value="want">📖 Want to Read</option>
                      <option value="reading">📘 Reading</option>
                      <option value="completed">✅ Completed</option>
                    </select>

                    {/* custom dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Tags
                  </label>

                  <Input
                    placeholder="Productivity, Finance, Self Help"
                    {...editRegister("tags")}
                    s
                    className="mt-2 w-full rounded-md h-11 border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  />
                </div>
                {/* Footer */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-6 pt-4 bg-gray-50">
                  <Button
                    variant="outline"
                    onClick={() => setEditModal(false)}
                    className="rounded-md border border-gray-200 px-4 py-5"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={editIsSubmitting}
                    className="rounded-md px-4 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  >
                    {editIsSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {deleteModal && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <Trash2 className="h-5 w-5 text-red-600" />
                  Delete Book
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  This action cannot be undone.
                </p>
              </div>

              <button
                onClick={() => setDeleteModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <p className="text-sm text-gray-600">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-gray-900">
                  {selectedBook.title}
                </span>
                ?
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4 bg-gray-50">
              <Button
                variant="outline"
                onClick={() => setDeleteModal(false)}
                className="rounded-md border border-gray-200 px-4 py-5"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="rounded-md px-4 py-5 bg-red-600 hover:bg-red-700 text-white"
              >
                {deleteLoading ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
