import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow login page
  if (pathname === "/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // DO NOT verify JWT here
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
