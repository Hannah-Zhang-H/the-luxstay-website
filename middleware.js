import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });

  // If the user is not logged in, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow request to proceed
  return NextResponse.next();
}

// Define the routes to which the middleware should be applied

export const config = {
  matcher: ["/account"], // Applies only to these routes
};
