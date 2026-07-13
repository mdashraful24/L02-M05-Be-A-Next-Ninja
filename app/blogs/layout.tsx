import React from 'react'

const BlogsLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            Blogs Layout is special only for blogs route or nested routes the blogs directory.

            {children}
        </div>
    )
}

export default BlogsLayout
