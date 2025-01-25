import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
  const token = request.cookies.get('token');

  // If no token exists, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET);

    // Allow access to the dashboard
    return NextResponse.next();
  } catch (error) {
    // If token is invalid, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Protect routes starting with `/dashboard`
export const config = {
  matcher: '/dashboard/:path*',
};
