import { NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {cookies} from "next/headers";
export const config = {
    matcher: [
        "/login/:path*",
        "/sign-up/:path*"
    ]
}
export function middleware(request: NextRequest) {
    const cookiesStore = cookies();
    const accessToken: string = cookiesStore.get('accessToken')?.value as string;
    if (accessToken) {
        return NextResponse.redirect(new URL("/store", request.url));
    }
}