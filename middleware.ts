import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ publicRoutes: ["/", "/about", "/pricing", "/sign-in", "/sign-up", "/api/gemini"], ignoredRoutes: "/images" });

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};