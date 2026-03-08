import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Book from "@/app/models/Book";

export async function PUT(req, { params }) {
  try {
    await dbConnect();

    const data = await req.json();

    const { id } = await params;

    const book = await Book.findByIdAndUpdate(id, data, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    );
  }
}
