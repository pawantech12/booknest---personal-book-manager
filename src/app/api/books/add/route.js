import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Book from "@/app/models/Book";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await dbConnect();

    const { title, author, status, tags } = await req.json();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const book = await Book.create({
      userId: decoded.id,
      title,
      author,
      status,
      tags,
    });

    return NextResponse.json({
      success: true,
      message: "Book added successfully",
      book,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to add book" },
      { status: 500 }
    );
  }
}
