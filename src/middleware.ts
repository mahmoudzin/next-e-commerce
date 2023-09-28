import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/home/0";
  return NextResponse.rewrite(url);
}
export const config = {
  matcher: "/",
};
