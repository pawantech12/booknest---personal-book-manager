import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Book from "@/app/models/Book";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    await dbConnect();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const books = await Book.find({ userId: decoded.id });

    if (!books) {
      return NextResponse.json({
        success: false,
        message: "Book Not Added Yet",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Book Sended",
      books,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
