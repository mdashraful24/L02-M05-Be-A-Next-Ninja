/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPost } from "@/lib/types";
import { NewsCard } from "./NewsCard";

export async function PublicNewsList() {
    const result = {
        success: true,
        data: [
            {
                id: "1",
                title: "This is first premium news",
                content: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
                isFeatured: true,
                status: "DRAFT",
                tags: ["tag1", "tag2"],
                views: 100,
                isPremium: true,
                authorId: "1",
                createdAt: "2022-01-01T00:00:00.000Z",
                updatedAt: "2022-01-01T00:00:00.000Z",
            }
        ]
    };

    if (!result.success || !result.data?.length) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No premium news found.
            </p>
        )
    }

    return (
        <div className='space-y-8'>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {result.data.map((post: IPost | any) => (
                    <NewsCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PublicNewsList