import DislikeButton from '@/app/ui/DislikeButton';

const BlogsSlugPage = async ({
    params
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;

    return (
        <div>
            Blogs Slug Page : {slug}

            <DislikeButton blogSlug={slug} />
        </div>
    )
}

export default BlogsSlugPage
