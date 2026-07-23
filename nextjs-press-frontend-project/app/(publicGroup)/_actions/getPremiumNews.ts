"use server";

import { cookies } from "next/headers";

export const getPremiumNews = async ({
    query
}: {
    query?: { [key: string]: string | string[] | undefined }
}) => {
    // Bad Approach
    // const searchTerm = `${search?.searchTerm ? `?searchTerm=${search.searchTerm}` : ""}`;

    // Good Approach
    const params = new URLSearchParams();

    if (query && query.searchTerm) {
        params.set("searchTerm", query.searchTerm as string);
    }

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!"
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium?${params?.toString()}`, {
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