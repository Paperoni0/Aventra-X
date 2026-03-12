import { NextResponse } from "next/server";

export function middleware(req) {
    const host = req.headers.get("host");
    if (host?.includes("paperoni0.github.io")) {
        return NextResponse.redirect("https://batch9mw.qzz.io/xa");
    }
    return NextResponse.next();
}