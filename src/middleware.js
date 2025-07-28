// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  const isPublic = [
    "/",
    "/about",
    "/login",
    "/register",
    "/forgot-password",
    "contact",
    "privacy",
    "tfa",
  ].includes(pathname);

  // Token varsa ve public sayfalardaysa → dashboard'a yönlendir
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Token yoksa ve korumalı sayfalardaysa → login'e yönlendir
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Diğer durumlarda erişime izin ver
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // tüm sayfalarda çalışır
};
