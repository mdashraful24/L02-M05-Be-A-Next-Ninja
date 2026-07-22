import { NewsCard } from "@/app/(publicGroup)/_components/news/NewsCard";
import { getPremiumNews } from "../../_actions/getPremiumNews";
import { IPost } from "@/lib/types";

export async function PremiumNewsList() {
    const result = await getPremiumNews();

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
                {result.data.map((post: IPost) => (
                    <NewsCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PremiumNewsList