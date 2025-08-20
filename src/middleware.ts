import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";

  if (hostname.startsWith("demo.")) {
    const url = req.nextUrl.clone();

    if (url.pathname === "/") {
      url.pathname = "/landing";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
