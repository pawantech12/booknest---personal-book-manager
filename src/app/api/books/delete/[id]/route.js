import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Book from "@/app/models/Book";

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = await params;

    await Book.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500 }
    );
  }
}
