// middleware.js
import { NextResponse } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/twofactor",
  "/forgot-password",
  "/reset-password",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/blog",
  "/blog/:path*",
];

export function middleware(req) {
  const token = req.cookies.get("accessToken");
  const isAuth = !!token;
  const { pathname } = req.nextUrl;

  if (isAuth && PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!isAuth && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
};
