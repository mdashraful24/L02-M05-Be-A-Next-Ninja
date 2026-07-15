/* eslint-disable @typescript-eslint/no-explicit-any */
// import { cacheLife,cacheTag } from "next/cache";
import { getBlogs } from "../service/getBlogs";
import MyServerComponent from "../ui/MyServerComponent";

const BlogsPage = async () => {
  // "use cache";
  // cacheLife("hours");
  // cacheTag("posts");

  const blogs = await getBlogs();

  console.log(blogs);

  return (
    <div>
      Blogs Page

      {
        blogs.map((blog: any) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      }

      <MyServerComponent />
    </div>
  )
}

export default BlogsPage
