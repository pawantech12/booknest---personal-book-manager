import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });

    // clear auth cookie
    res.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // expire immediately
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Logout failed" },
      { status: 500 }
    );
  }
}
