// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';


// export function middleware(request) {
//   const token = request.cookies.get('AuthToken');
//   console.log(process.env.JWT_SECRET_KEY, "<== HERE IS THE JWT")
//   const tokenValue = token?.value
//   console.log(token, "middleware")

//   // If no token exists, redirect to login
//   if (!token) {
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }

//   try {
//     // Verify the token
//     // jwt.verify(tokenValue, process.env.JWT_SECRET_KEY);

//     // Allow access to the dashboard
//     return NextResponse.next();
//   } catch (error) {
//     console.log(error.message, "<=== middleware error")
//     // If token is invalid, redirect to login
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }
// }

// // Protect routes starting with `/dashboard`
// export const config = {
//   matcher: ['/admin/dashboard/:path*',
//     '/user/dashboard/:path*']
// };
