import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const token = req.headers.get("x-admin-secret");

    if (token !== process.env.ADMIN_SECRET) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
