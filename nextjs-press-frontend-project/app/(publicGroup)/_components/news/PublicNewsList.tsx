import { IPost } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { getNonPremiumNews } from "../../_actions/getNonPremiumNews";

export async function PublicNewsList({
    searchParams
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const query = await searchParams;

    const result = await getNonPremiumNews({ query });

    if (!result.success || !result.data?.length) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No news found.
            </p>
        )
    }

    return (
        <div className='space-y-8'>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {result.data.map((post: IPost) => (
                    <NewsCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PublicNewsList