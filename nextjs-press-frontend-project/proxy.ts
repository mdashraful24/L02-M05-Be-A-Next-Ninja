import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    console.log(request.nextUrl, "request");
    console.log(pathName, "pathname");
    console.log("Proxy");

    // return NextResponse.redirect(new URL('/', request.url))

    return NextResponse.next()
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: [
        // '/dashboard/:path*',
        // '/admin-dashboard/:path*',
        // '/author-dashboard/:path*',

        '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
    ],
}