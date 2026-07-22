import { cookies } from "next/headers";

export const getPremiumNews = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!"
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium`, {
        headers: {
            // Authorization: accessToken as unknown as string
            // Authorization: `${accessToken}`
            // Authorization: `Bearer ${accessToken}`

            cookie: `accessToken=${accessToken}`
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 6, // 6 hour
            tags: ["premium-posts"]
        }
    });

    const result = await res.json();

    return result;
}